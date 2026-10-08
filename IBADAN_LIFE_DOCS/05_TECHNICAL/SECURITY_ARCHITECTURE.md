# SECURITY ARCHITECTURE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Security)  
**Tier:** 3  
**Depends On:** SYSTEM_ARCHITECTURE.md, NETWORK_ARCHITECTURE.md, AUTHENTICATION_AND_ACCOUNT.md, ECONOMY_MASTER_SPEC.md  

> **North Star:** assume the client can be compromised — because it can. The server is the only truth, and every exploit path is closed by design.

---

## 1. Core Principle: Never Trust the Client

The client is **presentation**. The **server is authority**. We assume any client can be modified, and we design so that modification gains nothing.

---

## 2. Anti-Cheat Pillars

| Pillar | Practice |
|--------|----------|
| **Server authority** | Money, inventory, ownership, position reconciliation, wanted level — all server-owned |
| **Validation** | Every client action is validated server-side before it counts |
| **Ledger** | All economic transactions are logged and auditable |
| **Anomaly detection** | Impossible states (speed, currency spikes, teleporting) are flagged and acted on |
| **No client secrets** | No authoritative logic or keys live on the client |

---

## 3. What We Learned From Lagos Life

First-generation browser sims suffered **client-side state exploits** — massive unauthorised currency generation until server-side validation was backfilled. **We do not repeat that mistake.** Server-side validation is **day-one**, not a patch.

---

## 4. Economy Security

- The **economy ledger** is server-authoritative and append-only.
- Every Naira movement is **logged** (faucets, sinks, transfers, taxes).
- **Fraud patterns** (duplication, impossible trades) trigger review and action.

---

## 5. Account & Data Security

- **Secure token-based auth** with strong account protection (see AUTHENTICATION_AND_ACCOUNT.md).
- **Encryption in transit** (HTTPS/TLS) and at rest for sensitive data.
- **Privacy by design** (see PRIVACY_AND_DATA_PROTECTION.md).
- **Device fingerprinting** and anomaly signals support account recovery and fraud detection.

---

## 6. Communication Security

- Chat and messages are **moderated** and **logged** where required (see MODERATION_AND_SAFETY.md).
- No end-to-end claims we cannot honour; safety and moderation are features, not afterthoughts.

---

## 7. Incident Response

- Security issues follow **INCIDENT_AND_HOTFIX_PROCESS.md**.
- Exploits are **patched fast**, and affected economies are **reconciled** from the ledger.

---

## 8. Rules

1. **Server authority, always.**
2. **Validate everything.**
3. **Log every transaction.**
4. **Assume breach; design for containment.**
5. **Security is a Definition-of-Done gate**, not a post-launch patch.
