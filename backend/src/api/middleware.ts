import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/jwt.js";
import { ApiError, isApiError } from "../lib/errors.js";
import type { JWTPayload } from "../types.js";
import { config } from "../config.js";

export interface AuthedRequest extends Request {
  user?: JWTPayload;
}

/** Require a valid `Authorization: Bearer <jwt>` token. */
export function authMiddleware(req: AuthedRequest, _res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    next(new ApiError(401, "Missing or malformed Authorization header"));
    return;
  }
  const token = header.slice("Bearer ".length).trim();
  try {
    req.user = verifyToken(token);
    next();
  } catch {
    next(new ApiError(401, "Invalid or expired token"));
  }
}

/** Require the admin/system token (for faucet, sink, verify). */
export function adminMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const token = req.headers["x-admin-token"];
  if (typeof token !== "string" || token !== config.adminToken) {
    next(new ApiError(403, "Forbidden: admin token required"));
    return;
  }
  next();
}

/** Wrap an async route so rejected promises reach the error handler. */
export function asyncHandler(
  fn: (req: AuthedRequest, res: Response, next: NextFunction) => Promise<unknown>,
): (req: Request, res: Response, next: NextFunction) => void {
  return (req, res, next) => {
    fn(req as AuthedRequest, res, next).catch(next);
  };
}

/** Central error handler. */
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction): void {
  if (isApiError(err)) {
    res.status(err.status).json({ error: err.message });
    return;
  }
  console.error("[unhandled]", err);
  res.status(500).json({ error: "Internal server error" });
}
