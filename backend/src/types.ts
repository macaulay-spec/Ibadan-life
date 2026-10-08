export type Wallet = "cash" | "bank";
export type Background = "nepo" | "lapo";
export type LedgerKind = "faucet" | "sink" | "transfer" | "tax" | "wallet_move";

/** A player. Money fields are integer KOBO (1 Naira = 100 kobo). */
export interface Player {
  id: number;
  accountId: number;
  name: string;
  background: Background;
  cash: number; // kobo
  bank: number; // kobo
  createdAt: string;
}

/** An append-only ledger entry. Money is integer kobo. */
export interface LedgerEntry {
  id: number;
  kind: LedgerKind;
  amount: number; // kobo
  fromPlayerId: number | null;
  fromWallet: Wallet | null;
  toPlayerId: number | null;
  toWallet: Wallet | null;
  reason: string;
  metadata: string | null;
  createdAt: string;
}

export interface JWTPayload {
  sub: number; // account id
  playerId: number;
  email: string;
}

export interface Balance {
  cash: number; // kobo
  bank: number; // kobo
  total: number; // kobo
}
