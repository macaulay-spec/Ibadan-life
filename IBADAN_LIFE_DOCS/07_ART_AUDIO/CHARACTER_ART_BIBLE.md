# CHARACTER ART BIBLE – IBADAN LIFE

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** Active  
**Owner:** Art & Cultural Authenticity Lead  
**Tier:** 2  
**Depends On:** ART_BIBLE.md, CHARACTER_CREATION.md, VISUAL_DIRECTION.md, CULTURAL_AUTHENTICITY_GUIDE.md, PERFORMANCE_AND_MOBILE_TARGETS.md  

> **North Star:** thousands of distinct, recognisable, authentic Nigerian players — rendered efficiently on a mid-range phone.

---

## 1. The Challenge

A player-driven city needs **thousands of distinct human characters** on screen, on **mobile GPUs**. Unique, fully-rigged high-poly characters for everyone is impossible. So we **compose** characters from shared parts.

---

## 2. Modular Mesh Assembly

- **One shared humanoid skeletal master rig** (~62 bones; no per-finger bones on lower LODs).
- At runtime, selected **slot meshes** (head, torso, legs, shoes) merge into **one skeletal mesh** via **FSkeletalMeshMerge**.
- Result: **1 draw call per character** (down from 8–10).

---

## 3. LOD Budgets (Performance Contract)

| LOD | Context | Triangle budget |
|-----|---------|-----------------|
| **LOD0** | Inventory inspection | ~15,000 tris |
| **LOD1** | Proximity < 10 m | ~6,000 tris |
| **LOD2** | 10–30 m | ~2,500 tris |
| **LOD3** | > 30 m / crowds | ~800 tris (simplified / impostor) |

---

## 4. The Face (Identity)

- **16 morph-target scalar parameters:** jaw width, nose height, **melanin slider**, lip fullness, cheekbone prominence.
- Goal: **a face that feels like you**, across Nigeria's rich diversity of features.
- Expressive enough that players **recognise each other**.

---

## 5. Attire (Identity & Status)

| Category | Examples |
|----------|----------|
| **Traditional** | Agbada, iro and buba, gele, fila — aso-oke and Ankara fabric shaders |
| **Contemporary** | Streetwear, university varsity, corporate suits |
| **Work / uniform** | Mechanic overalls, transport union uniforms, security |
| **Fashion (earned/prestige)** | Premium aso-oke, designer streetwear, event wear |

- Clothing is **visible status** — what you wear says who you are.
- Fashion is **cosmetic** — it never grants power (no pay-to-win).

---

## 6. Diversity & Authenticity

- Authentic Nigerian **skin tones, features, and proportions** — represented with care.
- Attire reflects **real Ibadan and Nigerian urban dress**.
- Every character asset passes the **Respect Checklist** (CULTURAL_AUTHENTICITY_GUIDE.md).

---

## 7. Rules

1. **One rig, many people.** Modular assembly is the foundation.
2. **LOD budgets are contracts.** Exceeding them needs evidence.
3. **Identity is visible.** Players recognise each other.
4. **Authentic and respectful.** No caricature, ever.
5. **Cosmetic only.** Fashion never buys power.
