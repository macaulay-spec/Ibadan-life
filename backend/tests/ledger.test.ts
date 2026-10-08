import { describe, it, expect } from "vitest";
import { makeServices, seedPlayer, totalPlayerCash, ledgerCount } from "./helpers";
import { nairaToKobo, transferTaxKobo } from "../src/lib/money";

/**
 * These tests prove the economy ledger is exploit-proof:
 *  - append-only (no updates/deletes)
 *  - no money duplication (balance always equals the ledger sum)
 *  - the 2.5% municipal tax is a real sink (money leaves the player economy)
 *  - transfers are atomic (a failed transfer leaves no partial entries)
 */
describe("economy ledger — append-only, no duplication", () => {
  it("faucet increases player cash and records a ledger entry", () => {
    const s = makeServices();
    const p = seedPlayer(s, "ada", "lapo", 1000); // ₦1000 = 100000 kobo
    expect(p.cash).toBe(nairaToKobo(1000));

    s.ledger.faucet(p.id, nairaToKobo(50), "wage");
    expect(s.ledger.getBalance(p.id).cash).toBe(nairaToKobo(1050));
    expect(ledgerCount(s)).toBe(2); // starting faucet + wage faucet
  });

  it("sink decreases player cash (rent, utilities, fines)", () => {
    const s = makeServices();
    const p = seedPlayer(s, "ada", "lapo", 1000);
    s.ledger.sink(p.id, nairaToKobo(200), "rent");
    expect(s.ledger.getBalance(p.id).cash).toBe(nairaToKobo(800));
  });

  it("sink rejects insufficient funds", () => {
    const s = makeServices();
    const p = seedPlayer(s, "ada", "lapo", 100);
    expect(() => s.ledger.sink(p.id, nairaToKobo(999_999), "rent")).toThrow();
    // balance unchanged
    expect(s.ledger.getBalance(p.id).cash).toBe(nairaToKobo(100));
  });

  it("transfer moves the principal and charges the 2.5% municipal tax", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 1000);
    const b = seedPlayer(s, "bola", "lapo", 0);

    const amount = nairaToKobo(100); // send ₦100
    const res = s.ledger.transfer(a.id, b.id, amount);

    expect(res.tax).toBe(transferTaxKobo(amount)); // ₦2.50 = 250 kobo
    expect(res.total).toBe(amount + res.tax); // sender pays ₦102.50

    expect(s.ledger.getBalance(a.id).cash).toBe(nairaToKobo(1000) - amount - res.tax);
    expect(s.ledger.getBalance(b.id).cash).toBe(amount); // recipient gets ₦100
  });

  it("transfer rejects when the sender cannot cover amount + tax", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 100); // exactly ₦100
    const b = seedPlayer(s, "bola", "lapo", 0);
    // sending ₦100 needs ₦102.50 — must fail
    expect(() => s.ledger.transfer(a.id, b.id, nairaToKobo(100))).toThrow();
    expect(s.ledger.getBalance(a.id).cash).toBe(nairaToKobo(100));
    expect(s.ledger.getBalance(b.id).cash).toBe(0);
  });

  it("transfer to yourself is rejected", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 1000);
    expect(() => s.ledger.transfer(a.id, a.id, nairaToKobo(10))).toThrow();
  });

  it("the tax is a real sink: total player cash drops by exactly the tax", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 1000);
    const b = seedPlayer(s, "bola", "lapo", 0);

    const before = totalPlayerCash(s);
    const res = s.ledger.transfer(a.id, b.id, nairaToKobo(400));
    const after = totalPlayerCash(s);

    expect(before - after).toBe(res.tax); // ₦10 left the player economy to the system
  });

  it("deposit moves cash -> bank and withdraw moves bank -> cash", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 1000);

    s.ledger.deposit(a.id, nairaToKobo(300));
    expect(s.ledger.getBalance(a.id)).toMatchObject({
      cash: nairaToKobo(700),
      bank: nairaToKobo(300),
    });

    s.ledger.withdraw(a.id, nairaToKobo(100));
    expect(s.ledger.getBalance(a.id)).toMatchObject({
      cash: nairaToKobo(800),
      bank: nairaToKobo(200),
    });
  });

  it("deposit/withdraw reject amounts exceeding the source wallet", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 100);
    expect(() => s.ledger.deposit(a.id, nairaToKobo(200))).toThrow();
    expect(() => s.ledger.withdraw(a.id, nairaToKobo(1))).toThrow(); // bank is 0
  });

  it("a failed transfer is atomic — it leaves no partial ledger entries", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 100);
    const b = seedPlayer(s, "bola", "lapo", 0);

    const before = ledgerCount(s);
    expect(() => s.ledger.transfer(a.id, b.id, nairaToKobo(5000))).toThrow();
    const after = ledgerCount(s);

    expect(after).toBe(before); // nothing was written
    expect(s.ledger.getBalance(a.id).cash).toBe(nairaToKobo(100));
    expect(s.ledger.getBalance(b.id).cash).toBe(0);
  });

  it("integrity: cached balances always equal the ledger-derived balances", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 1000);
    const b = seedPlayer(s, "bola", "nepo", 5000);

    s.ledger.transfer(a.id, b.id, nairaToKobo(250));
    s.ledger.deposit(b.id, nairaToKobo(100));
    s.ledger.sink(a.id, nairaToKobo(75), "utility");
    s.ledger.faucet(a.id, nairaToKobo(500), "wage");

    const result = s.ledger.verifyIntegrity();
    expect(result.ok).toBe(true);
    expect(result.mismatches).toHaveLength(0);
  });

  it("ledger is append-only: entries are only ever added, never removed", () => {
    const s = makeServices();
    const a = seedPlayer(s, "ada", "lapo", 1000);
    const b = seedPlayer(s, "bola", "lapo", 0);

    const counts = [ledgerCount(s)];
    s.ledger.transfer(a.id, b.id, nairaToKobo(10));
    counts.push(ledgerCount(s));
    s.ledger.sink(b.id, nairaToKobo(1), "fee");
    counts.push(ledgerCount(s));

    // strictly non-decreasing
    expect(counts[1]).toBeGreaterThan(counts[0]);
    expect(counts[2]).toBeGreaterThan(counts[1]);
  });
});
