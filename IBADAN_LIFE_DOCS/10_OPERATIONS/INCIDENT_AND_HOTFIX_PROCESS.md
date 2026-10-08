# INCIDENT AND HOTFIX PROCESS – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Live Operations Lead / Technical Lead  
**Tier:** 4  
**Depends On:** LIVE_OPERATIONS.md, SECURITY_ARCHITECTURE.md, ECONOMY_MONITORING.md, ANALYTICS_AND_METRICS.md  

> **North Star:** when something breaks, we respond fast, fix forward, and learn — so players barely feel it and the city stays trustworthy.

---

## 1. Severity Levels

| Severity | Examples | Response |
|----------|----------|----------|
| **SEV1 — Critical** | Economy exploit, mass crash, data loss, safety emergency | Immediate; all hands; hotfix now; player comms |
| **SEV2 — Major** | Feature broken, big performance regression, moderation outage | Urgent; hotfix within hours–day |
| **SEV3 — Minor** | Non-blocking bug, cosmetic issue | Scheduled fix in next cycle |
| **SEV4 — Trivial** | Typo, tiny polish | Backlog |

---

## 2. Response Flow

1. **Detect** — monitoring, reports, or telemetry flags the incident.
2. **Triage** — on-call assesses severity and scope; declares SEV level.
3. **Mitigate** — stop the bleeding (disable feature, roll back, block exploit, take a shard down).
4. **Communicate** — status updates to the team; player comms for SEV1/SEV2.
5. **Fix** — root-cause and patch; hotfix for SEV1/SEV2.
6. **Reconcile** — for economy/security incidents, **reconcile the ledger** from truth.
7. **Recover** — restore service; verify stability.
8. **Postmortem** — what happened, why, and what changes so it does not recur.

---

## 3. Hotfix Rules

- **Hotfixes are fast but never reckless.** A hotfix still passes critical review and tests.
- **Rollback is always an option** — prefer rolling back over a risky patch.
- **Never fix forward on a broken economy** — reconcile from the ledger.

---

## 4. Economy & Security Incidents

- Exploits and fraud follow **SECURITY_ARCHITECTURE.md**.
- Affected economies are **reconciled from the append-only ledger** — truth is restored, not rewritten.
- Players affected are **made whole** where possible and informed.

---

## 5. Postmortem (Blameless)

Every SEV1/SEV2 gets a **blameless postmortem**: timeline, root cause, impact, and **action items** with owners. The goal is a **better system**, not a guilty person.

---

## 6. Rule

**Players should barely feel an incident.** Speed matters, but **trust matters more** — fix it right, reconcile honestly, and learn.
