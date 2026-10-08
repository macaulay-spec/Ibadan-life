# AUTHENTICATION AND ACCOUNT – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Security)  
**Tier:** 3  
**Depends On:** SECURITY_ARCHITECTURE.md, PRIVACY_AND_DATA_PROTECTION.md, BACKEND_ARCHITECTURE.md  

> **North Star:** a secure, recoverable account — your identity in the city is protected, and you can always get back in.

---

## 1. Account Model

- Every player has an **account** (identity + credentials) linked to a **player** (their life in the city).
- One account can hold its character; the account is the durable identity.

---

## 2. Authentication

- **Secure, token-based authentication** (short-lived tokens, refresh flow).
- Credentials are **never stored in plaintext** (hashed + salted).
- **Encryption in transit** (TLS) for all auth traffic.
- Support for **platform/social login** where it improves access (final choices via ADR).

---

## 3. Account Protection

- **Device fingerprinting** and anomaly signals detect suspicious access.
- **Rate limiting** and lockout on brute-force attempts.
- **Alerts** on login from a new device/location (where feasible).
- We **never ask for your password** in chat or email — ever.

---

## 4. Recovery

- **Account recovery** is always possible (verified email/phone, recovery flow).
- **Soft account deletion** — a player can leave and take their data with them (see PRIVACY_AND_DATA_PROTECTION.md).
- Support can **verify and restore** access safely.

---

## 5. Sessions

- A login creates a **session** tied to a token.
- Sessions are **revocable** (logout, change password, security event).
- Game sessions and account sessions are linked but distinct.

---

## 6. Rules

1. **Protect the account** like we protect the economy — it is the player's identity.
2. **Never trust a credential** over an unencrypted channel.
3. **Recovery is always possible** — no one is locked out of their life forever.
4. **Privacy is part of security** — handle identity data with care.
