# IBADAN LIFE

### *Your city. Your hustle. Your story.*

A **persistent, 3D, open-world, multiplayer life simulation** inspired by **Ibadan, Nigeria**.
Real players are the population. They walk the streets, work real jobs, run real
businesses, own property, make friends and enemies, and build lives that continue
even when they log off.

> **We are building one of the best games in the world.**

- **Engine:** Unreal Engine 5 · **Mobile-first** (mid-range Android)
- **Backend:** Node.js 22 + TypeScript (server-authoritative; append-only economy ledger)
- **Phase:** Phase 0 (docs) complete → **Phase 1 (Core Engine & Network)** underway

---

## 🚀 Quick start

### Read the vision (15 minutes)
Start with the documentation hub: **[IBADAN_LIFE_DOCS/README.md](IBADAN_LIFE_DOCS/README.md)**
Then the **[ONBOARDING_GUIDE.md](IBADAN_LIFE_DOCS/00_MASTER/ONBOARDING_GUIDE.md)** for your role.

### Run the backend (the money truth)
```bash
cd backend
npm install
npm run dev      # http://localhost:3000  (SQLite, no server needed)
npm test         # 32 tests: ledger, auth, HTTP API
```
See **[backend/README.md](backend/README.md)**.

### Build the game client (Unreal Engine 5)
The C++ source is in **[client/](client/)**. To compile it you need **Unreal Engine 5.4**
installed (a human machine + Epic login — it is not compiled in CI here):
```bash
# Open client/IbadanLife.uproject in the UE5 editor, then build for Android.
```
See **[client/README.md](client/README.md)**.

---

## 🗺️ What's in this repo

| Path | What it is |
|------|------------|
| **[IBADAN_LIFE_DOCS/](IBADAN_LIFE_DOCS/)** | Design truth — the full documentation set (87 docs) |
| **[backend/](backend/)** | Server-authoritative backend — auth + append-only economy ledger + API (tested) |
| **[client/](client/)** | Unreal Engine 5 client + dedicated server source (C++/GAS) |
| **[infra/](infra/)** | Docker + Kubernetes deployment |
| **[.github/workflows/](.github/workflows/)** | CI — backend (typecheck+test) + docs integrity |
| **[Ibadan Life Research Brief.pdf](Ibadan Life Research Brief.pdf)** | 22-page research foundation |

## ⚖️ The rules that govern everything

1. **Docs are truth; code implements them.** Conflicts resolve in favour of the higher tier ([SOURCE_OF_TRUTH.md](IBADAN_LIFE_DOCS/00_MASTER/SOURCE_OF_TRUTH.md)).
2. **The server is authoritative.** The client is never trusted with money or state.
3. **Six design pillars** guide every decision ([DESIGN_PILLARS.md](IBADAN_LIFE_DOCS/01_PRODUCT/DESIGN_PILLARS.md)).
4. **Brand voice:** specific, confident, warm, respectful, zero filler ([BRAND_AND_TONE_OF_VOICE.md](IBADAN_LIFE_DOCS/00_MASTER/BRAND_AND_TONE_OF_VOICE.md)).
5. **Decisions are recorded** — major ones in [ADR/](IBADAN_LIFE_DOCS/ADR/), agent decisions in [AGENT_DECISIONS/](IBADAN_LIFE_DOCS/AGENT_DECISIONS/).

## 🏙️ The city

Six districts: **UI Student Hub · Dugbe CBD · Bodija Central · Iwo Transit Hub · Bower's Historic · Agodi Green Zone**.

---

*Built with pride. Built for Ibadan. Built for the world.* 🇳🇬
