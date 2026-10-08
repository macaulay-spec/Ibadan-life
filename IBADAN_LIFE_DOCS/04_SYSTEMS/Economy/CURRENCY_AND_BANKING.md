# CURRENCY AND BANKING – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Systems Design Lead (Economy)  
**Tier:** 2  
**Depends On:** ECONOMY_MASTER_SPEC.md, SECURITY_ARCHITECTURE.md, PLAYER_MARKETPLACE.md  

> **North Star:** one honest currency — the Naira — with a wallet, a bank, and a ledger the server alone controls.

---

## 1. The Currency: Naira (₦)

- The single in-game currency is the **Naira (₦)**.
- All prices, wages, fines, rents, and taxes are denominated in Naira.
- The **server ledger** is the only truth for every player's balance.

---

## 2. The Wallet

- Every player has a **wallet** (cash on hand) and a **bank account**.
- **Cash** is physical: you can hand it to another player (spatial transfer) or deposit it.
- **Bank** holds larger sums safely; transfers between players go through the ledger.

---

## 3. Spatial Money (A Signature Interaction)

Money is **physical and social**:

- **Hand over cash** — meet a player and give them Naira (a tangible, memorable act).
- **Use the in-game mobile banking app** — transfer to anyone, anywhere.
- Both create **real social moments**: generosity, payment, debt, extortion — all player stories.

---

## 4. Transfers & the Municipal Tax

- Peer-to-peer wallet transfers are allowed and encouraged (micro-commerce, generosity, business).
- A **2.5% municipal transaction tax** applies to P2P wallet transfers — a core **currency sink** that keeps the economy healthy.
- All transfers are **server-validated and logged**.

---

## 5. Banking

| Function | Detail |
|----------|--------|
| **Deposit / withdraw** | Move Naira between wallet and bank |
| **Transfer** | Send Naira to another player (2.5% tax) |
| **Pay bills** | Rent, utilities, fines auto-managed from bank |
| **History** | Full, auditable ledger per player |

---

## 6. Faucets & Sinks (Recap)

- **Faucets:** wages, Lapo relief stipends, enterprise earnings.
- **Sinks:** rent, utilities (electricity + generator diesel), food/hygiene, fuel/maintenance, **2.5% transfer tax**.

Balance is tuned continuously (see ECONOMY_MONITORING.md).

---

## 7. Rules

1. The **server ledger** is the only balance truth.
2. Every transaction is **logged** (anti-fraud, tuning, moderation).
3. **No pay-to-win.** Naira is earned in-world, never bought for power.
4. **Transfers are taxed** to keep currency circulating and the economy stable.
