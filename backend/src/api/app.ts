import express from "express";
import type { DatabaseSync } from "node:sqlite";
import { LedgerService } from "../services/ledger.service.js";
import { PlayerService } from "../services/player.service.js";
import { AuthService } from "../services/auth.service.js";
import { createRouter } from "./routes.js";
import { errorHandler } from "./middleware.js";

/**
 * Build the Express app around a database connection.
 * Returning the services too lets tests drive them directly.
 */
export function createApp(db: DatabaseSync) {
  const ledger = new LedgerService(db);
  const players = new PlayerService(db);
  const auth = new AuthService(db, players, ledger);

  const app = express();
  app.disable("x-powered-by");
  app.use(express.json());

  app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "ibadan-life-backend" }));
  app.use("/api", createRouter({ ledger, players, auth }));

  app.use(errorHandler);
  return { app, services: { ledger, players, auth } };
}
