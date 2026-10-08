import jwt from "jsonwebtoken";
import { config } from "../config.js";
import type { JWTPayload } from "../types.js";

export function signToken(payload: JWTPayload): string {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  } as jwt.SignOptions);
}

export function verifyToken(token: string): JWTPayload {
  return jwt.verify(token, config.jwtSecret) as unknown as JWTPayload;
}
