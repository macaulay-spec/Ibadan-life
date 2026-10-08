import type { Balance, LedgerEntry, Player } from "../types.js";
import { koboToNaira } from "../lib/money.js";

/** Public player shape (Naira at the API boundary; kobo is internal truth). */
export function toApiPlayer(p: Player) {
  return {
    id: p.id,
    name: p.name,
    background: p.background,
    cash: koboToNaira(p.cash),
    bank: koboToNaira(p.bank),
    total: koboToNaira(p.cash + p.bank),
    createdAt: p.createdAt,
  };
}

export function toApiBalance(b: Balance) {
  return {
    cash: koboToNaira(b.cash),
    bank: koboToNaira(b.bank),
    total: koboToNaira(b.total),
  };
}

export function toApiEntry(e: LedgerEntry) {
  return {
    id: e.id,
    kind: e.kind,
    amount: koboToNaira(e.amount),
    fromPlayerId: e.fromPlayerId,
    fromWallet: e.fromWallet,
    toPlayerId: e.toPlayerId,
    toWallet: e.toWallet,
    reason: e.reason,
    createdAt: e.createdAt,
  };
}
