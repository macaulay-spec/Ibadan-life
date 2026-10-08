# AI CODING AND UNREAL RULES – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Technical Lead (Unreal) / AI Coordination Lead  
**Tier:** 4  
**Depends On:** AI_DEVELOPMENT_PROTOCOL.md, UNREAL_ENGINE_ARCHITECTURE.md, PERFORMANCE_AND_MOBILE_TARGETS.md, SECURITY_ARCHITECTURE.md  

> **North Star:** code that is clear, maintainable, server-authoritative, and mobile-fast — so humans and agents can build this city together for years.

---

## 1. Core Coding Rules

1. **Clarity over cleverness.** Readable, maintainable, documented.
2. **Never put authoritative game logic on the client.** Server owns money, inventory, ownership, state.
3. **Validate everything server-side.** No exploitable client path.
4. **Mobile performance is mandatory** in all gameplay code (budgets are contracts).
5. **Log what matters.** Economic and state transitions are auditable.

---

## 2. Unreal (UE5) Rules

- Use **Gameplay Ability System (GAS)** for attributes, needs, abilities, and effects.
- Use **World Partition** for the world; stream by proximity; respect LOD budgets.
- Use **Iris** for replication; replicate by proximity and relevance.
- Use **Chaos** for vehicles; tune for mobile.
- **Modular avatars** via FSkeletalMeshMerge; 1 draw call per character.
- **Bake lighting** (GPU Lightmass); avoid heavy runtime lighting.

---

## 3. Naming & Structure

- Follow project **naming conventions** and **module boundaries**.
- One responsibility per module/class; clear interfaces.
- Comments explain **why**, not what. Code explains what.

---

## 4. AI-Assisted Coding

- **Copilot / Claude** may draft UE5 C++, GAS attributes, and Blender Python automation.
- **AI-generated code is reviewed like any other** — it must meet every rule above.
- AI work follows **AI_DEVELOPMENT_PROTOCOL.md** and is logged in `AGENT_DECISIONS/`.

---

## 5. Testing

- **Automated tests** for critical logic (economy, persistence, validation).
- **Headless bot clients** stress-test replication, memory, and zone transitions in CI/CD.
- A feature that breaks the **performance budget** or a **security rule** does not ship.

---

## 6. Definition of Done for Code

All of **DEFINITION_OF_DONE.md** applies — plus: reviewed, tested, performant, secure, and documented.
