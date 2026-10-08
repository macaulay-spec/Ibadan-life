import { describe, it, expect } from "vitest";
import { makeServices } from "./helpers";
import { nairaToKobo } from "../src/lib/money";

describe("auth & registration", () => {
  it("registers a Lapo player with the ₦500 starting stipend and returns a token", async () => {
    const s = makeServices();
    const { token, player } = await s.auth.register({
      email: "ada@ibadan.io",
      password: "password123",
      name: "Ada",
      background: "lapo",
    });
    expect(token).toBeTruthy();
    expect(player.name).toBe("Ada");
    expect(player.background).toBe("lapo");
    expect(player.cash).toBe(nairaToKobo(500));
  });

  it("registers a Nepo player with the ₦50,000 starting capital", async () => {
    const s = makeServices();
    const { player } = await s.auth.register({
      email: "boss@ibadan.io",
      password: "password123",
      name: "Boss",
      background: "nepo",
    });
    expect(player.cash).toBe(nairaToKobo(50_000));
  });

  it("records the starting balance as a ledger faucet entry (ledger is source of truth)", async () => {
    const s = makeServices();
    const { player } = await s.auth.register({
      email: "ada@ibadan.io",
      password: "password123",
      name: "Ada",
      background: "lapo",
    });
    const entries = s.ledger.getLedger(player.id);
    expect(entries.some((e) => e.kind === "faucet" && e.reason === "starting_balance_lapo")).toBe(true);
    expect(s.ledger.verifyIntegrity().ok).toBe(true);
  });

  it("rejects a duplicate email with 409", async () => {
    const s = makeServices();
    const body = { email: "dup@ibadan.io", password: "password123", name: "Dup", background: "lapo" as const };
    await s.auth.register(body);
    await expect(s.auth.register(body)).rejects.toMatchObject({ status: 409 });
  });

  it("rejects a duplicate player name with 409", async () => {
    const s = makeServices();
    await s.auth.register({ email: "a@ibadan.io", password: "password123", name: "Same", background: "lapo" });
    await expect(
      s.auth.register({ email: "b@ibadan.io", password: "password123", name: "Same", background: "lapo" }),
    ).rejects.toMatchObject({ status: 409 });
  });

  it("rejects a short password", async () => {
    const s = makeServices();
    await expect(
      s.auth.register({ email: "a@ibadan.io", password: "short", name: "Ada", background: "lapo" }),
    ).rejects.toMatchObject({ status: 400 });
  });

  it("logs in with correct credentials and returns a token", async () => {
    const s = makeServices();
    await s.auth.register({ email: "ada@ibadan.io", password: "password123", name: "Ada", background: "lapo" });
    const { token, player } = await s.auth.login({ email: "ada@ibadan.io", password: "password123" });
    expect(token).toBeTruthy();
    expect(player.name).toBe("Ada");
  });

  it("rejects login with the wrong password (401)", async () => {
    const s = makeServices();
    await s.auth.register({ email: "ada@ibadan.io", password: "password123", name: "Ada", background: "lapo" });
    await expect(s.auth.login({ email: "ada@ibadan.io", password: "wrong-password" })).rejects.toMatchObject({ status: 401 });
  });

  it("rejects login for an unknown email (401)", async () => {
    const s = makeServices();
    await expect(s.auth.login({ email: "ghost@ibadan.io", password: "password123" })).rejects.toMatchObject({ status: 401 });
  });

  it("passwords are stored hashed, never in plaintext", async () => {
    const s = makeServices();
    await s.auth.register({ email: "ada@ibadan.io", password: "password123", name: "Ada", background: "lapo" });
    const row = s.db.prepare(`SELECT password_hash FROM credentials WHERE email = ?`).get("ada@ibadan.io") as { password_hash: string };
    expect(row.password_hash).not.toBe("password123");
    expect(row.password_hash.startsWith("$2")).toBe(true); // bcrypt
  });
});
