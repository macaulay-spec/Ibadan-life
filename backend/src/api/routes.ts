import { Router } from "express";
import type { LedgerService } from "../services/ledger.service.js";
import type { PlayerService } from "../services/player.service.js";
import type { AuthService } from "../services/auth.service.js";
import { ApiError } from "../lib/errors.js";
import { nairaToKobo } from "../lib/money.js";
import { authMiddleware, adminMiddleware, asyncHandler } from "./middleware.js";
import type { AuthedRequest } from "./middleware.js";
import { toApiPlayer, toApiBalance, toApiEntry } from "./serializers.js";
import type { Wallet } from "../types.js";

interface Services {
  ledger: LedgerService;
  players: PlayerService;
  auth: AuthService;
}

/** Parse a Naira amount from the request body into integer kobo. */
function parseAmountKobo(v: unknown): number {
  if (typeof v !== "number" || !Number.isFinite(v) || v <= 0) {
    throw new ApiError(400, "`amount` must be a positive number (in Naira)");
  }
  return nairaToKobo(v);
}

function parseId(v: unknown): number {
  const n = Number(v);
  if (!Number.isInteger(n) || n <= 0) throw new ApiError(400, "id must be a positive integer");
  return n;
}

export function createRouter(services: Services): Router {
  const { ledger, players, auth } = services;
  const router = Router();

  // -- health ---------------------------------------------------------------
  router.get("/health", (_req, res) => res.json({ status: "ok", service: "ibadan-life-backend" }));

  // -- auth -----------------------------------------------------------------
  router.post(
    "/auth/register",
    asyncHandler(async (req, res) => {
      const { token, player } = await auth.register(req.body ?? {});
      res.status(201).json({ token, player: toApiPlayer(player) });
    }),
  );

  router.post(
    "/auth/login",
    asyncHandler(async (req, res) => {
      const { token, player } = await auth.login(req.body ?? {});
      res.json({ token, player: toApiPlayer(player) });
    }),
  );

  router.get(
    "/auth/me",
    authMiddleware,
    asyncHandler(async (req: AuthedRequest, res) => {
      const player = auth.getPlayerForPayload(req.user!);
      res.json({ player: toApiPlayer(player) });
    }),
  );

  // -- players (public profile) --------------------------------------------
  router.get(
    "/players/:id",
    asyncHandler(async (req, res) => {
      const profile = players.getPublicProfile(parseId(req.params.id));
      if (!profile) throw new ApiError(404, "Player not found");
      res.json({ player: profile });
    }),
  );

  // -- economy (player-facing, authenticated) -------------------------------
  router.get(
    "/economy/balance",
    authMiddleware,
    asyncHandler(async (req: AuthedRequest, res) => {
      const balance = ledger.getBalance(req.user!.playerId);
      res.json(toApiBalance(balance));
    }),
  );

  router.get(
    "/economy/ledger",
    authMiddleware,
    asyncHandler(async (req: AuthedRequest, res) => {
      const limit = Math.min(Number(req.query.limit ?? 50) || 50, 200);
      const entries = ledger.getLedger(req.user!.playerId, limit);
      res.json({ entries: entries.map(toApiEntry) });
    }),
  );

  router.post(
    "/economy/transfer",
    authMiddleware,
    asyncHandler(async (req: AuthedRequest, res) => {
      const toPlayerId = parseId(req.body?.toPlayerId);
      const amountKobo = parseAmountKobo(req.body?.amount);
      const result = ledger.transfer(req.user!.playerId, toPlayerId, amountKobo);
      const balance = ledger.getBalance(req.user!.playerId);
      res.json({
        amount: result.entry.amount / 100,
        tax: result.tax / 100,
        total: result.total / 100,
        balance: toApiBalance(balance),
      });
    }),
  );

  router.post(
    "/economy/deposit",
    authMiddleware,
    asyncHandler(async (req: AuthedRequest, res) => {
      const amountKobo = parseAmountKobo(req.body?.amount);
      ledger.deposit(req.user!.playerId, amountKobo);
      res.json({ balance: toApiBalance(ledger.getBalance(req.user!.playerId)) });
    }),
  );

  router.post(
    "/economy/withdraw",
    authMiddleware,
    asyncHandler(async (req: AuthedRequest, res) => {
      const amountKobo = parseAmountKobo(req.body?.amount);
      ledger.withdraw(req.user!.playerId, amountKobo);
      res.json({ balance: toApiBalance(ledger.getBalance(req.user!.playerId)) });
    }),
  );

  // -- economy (admin/system: faucets, sinks, integrity) --------------------
  router.post(
    "/economy/faucet",
    adminMiddleware,
    asyncHandler(async (req, res) => {
      const playerId = parseId(req.body?.playerId);
      const amountKobo = parseAmountKobo(req.body?.amount);
      const reason = String(req.body?.reason ?? "faucet");
      const entry = ledger.faucet(playerId, amountKobo, reason);
      res.json({ entry: toApiEntry(entry), balance: toApiBalance(ledger.getBalance(playerId)) });
    }),
  );

  router.post(
    "/economy/sink",
    adminMiddleware,
    asyncHandler(async (req, res) => {
      const playerId = parseId(req.body?.playerId);
      const amountKobo = parseAmountKobo(req.body?.amount);
      const reason = String(req.body?.reason ?? "sink");
      const wallet = (req.body?.wallet === "bank" ? "bank" : "cash") as Wallet;
      const entry = ledger.sink(playerId, amountKobo, reason, wallet);
      res.json({ entry: toApiEntry(entry), balance: toApiBalance(ledger.getBalance(playerId)) });
    }),
  );

  router.get(
    "/economy/verify",
    adminMiddleware,
    asyncHandler(async (_req, res) => {
      res.json(ledger.verifyIntegrity());
    }),
  );

  return router;
}
