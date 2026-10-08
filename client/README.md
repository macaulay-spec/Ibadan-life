# IBADAN LIFE — Unreal Engine 5 Client

> **Your city. Your hustle. Your story.**

This is the **UE5 client** source for IBADAN LIFE — a persistent, 3D, open-world,
multiplayer life simulation inspired by Ibadan, Nigeria. **Mobile-first (mid-range Android).**

## ⚠️ Read this first

The C++ source here is **written and ready to compile**, but it is **not compiled in
this repository's CI** — Unreal Engine 5 is a large editor that requires a human
machine with the engine installed (and an Epic Games login). To build the game:

1. Install **Unreal Engine 5.4** (via the Epic Games Launcher).
2. Open `IbadanLife.uproject` (right-click → **Generate Visual Studio project files**,
   or let the editor generate them).
3. Build the **IbadanLife** module (Development Editor, then Development Android).
4. Cook/package for **Android**.

The **backend** (`../backend/`) is fully built and tested in CI — it is the
server-authoritative truth for money, accounts, and persistence.

## Architecture (client)

| File | Role |
|------|------|
| `Source/IbadanLife/ILGameMode.*` | Authoritative game mode (dedicated server). |
| `Source/IbadanLife/Player/ILPlayerState.*` | Replicated identity + economy mirror (server-owned). |
| `Source/IbadanLife/Player/ILCharacter.*` | Modular avatar, third-person movement, GAS. |
| `Source/IbadanLife/Ability/ILAttributeSet.*` | The six needs (Hunger, Energy, Hygiene, Bladder, Fun, Social) + vitals. |
| `Source/IbadanLife/Economy/ILEconomyComponent.*` | Client interface to the backend ledger (HTTP). |

## Key design rules (from the docs)

- **Server is authoritative.** The client is presentation; money/inventory/ownership
  truth lives in the backend ledger (`../backend/`). Never put game logic on the client.
- **Modular avatars.** One shared skeletal rig; slot meshes merged at runtime
  (FSkeletalMeshMerge) → 1 draw call per character. LOD'd for mobile.
- **GAS** drives the six needs and all abilities/effects.
- **Mobile-first.** 60 FPS target / 30 FPS floor on mid-range Android. World Partition
  streaming, baked lighting, aggressive LODs.
- **Economy.** The client calls the backend over HTTP; the ledger is append-only
  and the single source of truth for Naira.

## Config

- `Config/DefaultEngine.ini` — mobile rendering + dedicated-server networking defaults.
- `Config/DefaultGame.ini` — game mode / player state / pawn classes, starting district.

## Docs

Full design & architecture: `../IBADAN_LIFE_DOCS/` (start with `README.md` there).
