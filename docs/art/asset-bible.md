# Asset Bible & Asset-Readiness Plan

**Art direction:** grounded, stylized realism for low/mid-range Android; authored for Ibadan, not a generic city asset pack with local labels.
**Asset register:** [`assets/manifest.csv`](../../assets/manifest.csv)
**Status:** specifications prepared; most production assets still need to be acquired or authored.

## 1. Visual direction

### North star

A walkable contemporary Ibadan street with warm daylight, layered low-rise building silhouettes, varied compound walls and gates, a real road junction, shaded shopfronts, street trees, overhead utilities, gutters/drains and people going about their day. Use simplified shapes and strong colour/material response so forms remain readable on a small screen. Preserve lived-in texture without making disorder a visual punchline.

### Palette and materials

- Warm concrete/plaster, muted cream and aged paint; weathered metal, dark wood, tile/corrugated roofing; local red/brown earth where exposed; dense leafy greens.
- Controlled accent colours on awnings, storefronts, fabrics and transport; use street signage as a composition/readability asset, not a wall of unreadable text.
- PBR range should be intentionally restrained on mobile: moderate roughness; no expensive clearcoat/transmission except a small number of hero objects.
- Avoid one uniform “dust filter.” Use material variation and lighting rather than a full-screen brown tint.

## 2. Cultural and reference rules

- Use the geographic reference document and local reviewer notes as the source for layout; do not infer culture from stock imagery alone.
- Everyday dress should include current local/Nigerian variety; include Ankara/adire-inspired fabric only after pattern and cultural review. Aso-oke/ceremonial attire is a specific context, not default NPC clothing.
- Buildings should show a plausible mix: simple compound homes, rentals/hostels, shopfronts, larger modern/institutional blocks, gates, grilles, shade structures and courtyards. Do not stereotype every home as unfinished or every public space as crowded.
- Use invented businesses, prices and plates. Do not use a real logo or a distinctive private interior without clearance.
- Field photos and recorded dialogue require consent, release record, source and intended use. Do not ship identifiable bystanders as texture content.

## 3. Asset folder and naming standard

```text
assets/
  manifest.csv
  licenses/                  # source URL, license copy/record, retrieval date, attribution
  geodata/raw/               # large source files, ignored by Git
  geodata/processed/         # clipped, normalized source data and provenance
  models/source/             # Blender .blend and source images
  models/runtime/            # optimized GLB files
  textures/source/           # authoring files
  textures/runtime/          # KTX2/WebP/PNG as appropriate
  audio/source/              # WAV/48 kHz masters and release forms
  audio/runtime/             # OGG/Opus or browser-tested compressed files
  ui/source/                 # SVG, design source
  ui/runtime/                # compact SVG/PNG
```

No raw national extract, editor cache, or high-resolution scan belongs in the game bundle or ordinary Git history. Add large/derived source data to the repository's ignore/external storage rules before downloading it.

**File pattern:** `IBL_<DOMAIN>_<DISTRICT>_<ASSET>_<VARIANT>_v001.<ext>`; examples: `IBL_ENV_SANGO_SHOPFRONT_A_v001.glb`, `IBL_PROP_SANGO_UTILITY_POLE_B_v001.glb`, `IBL_CHAR_PLAYER_BASE_A_v001.glb`.

Every delivered asset row must have: asset ID, author/source, source URL, asset-specific license, attribution text if required, date/version, source project file, runtime file, dimensions/units, poly/material/texture budget, LODs/collider, approval status and any release/brand review. No asset enters a release if license metadata is blank.

## 4. 3D authoring and optimization spec

- **Authoring:** Blender; use metres, Y-up in game runtime (Blender export conversion checked), real-world reference dimensions where known.
- **Runtime format:** glTF 2.0 binary `.glb`; neutral format selected because it carries meshes, materials, rigging/animation, and is supported across browser engines. [Khronos glTF 2.0 specification](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html)
- **Compression:** Meshopt or Draco for geometry where validated; KTX2/Basis for texture payload only after visual and device tests. Preserve editable `.blend` originals.
- **Texture sizing:** target 512–1024 px for ordinary assets; 2048 px only for a close-up hero texture after profiling. Use atlases/shared materials on repeatable street kits; no default 4K textures.
- **LODs:** LOD0 for close player interaction, LOD1 for mid-distance, simplified silhouette/impostor or omission for far buildings. Landmark gets custom silhouette; repeated small props can share one LOD set.
- **Collision:** separate low-poly collision or primitive proxies; disabled on overhead cables, leaves and decorative trim. Doors and gates use explicit interaction/collision states.
- **Animation:** humanoid assets share a documented skeleton/retarget profile; keep mobile-friendly bone count, no unnecessary facial rig in the first slice.
- **Materials:** favour opaque materials; control transparent surfaces and alpha sorting. Reuse materials and texture atlases to reduce state changes.

## 5. Starting budgets (targets to validate, not measured results)

| Budget | Initial target |
|---|---:|
| Browser initial download before world cells | ≤ 8 MB compressed (loading shell + controller + UI + core libraries; physics WASM only if the test proves necessary) |
| First streamed cell | ≤ 4 MB compressed, excluding shared runtime code |
| Visible draw calls | Aim ≤ 100 on baseline Android; profile and revise by device, not by guess |
| Visible triangles | Aim ≤ 250k in the first view on baseline hardware, with LOD and culling |
| Base colour/normal maps | Mostly 512–1024 px; share and atlas repeating details |
| Animation updates | One local player plus only nearby characters; low update rate and skeletal LOD for others |
| Frame rate | Stable 30 fps baseline; 45–60 fps on stronger devices where thermals permit |
| Shadow casters | One low-cost directional key shadow or baked/local ambient shading; do not shadow every pole/building |
| Audio | Short loops and streams; stop/reduce distant sources, avoid dozens of live emitters |

These are the first performance gates. `renderer.info`/frame-time and memory measurements on an actual Android device decide whether the budgets are sufficient.

## 6. Production asset plan by domain

### Geography and world

- OSM road/path, buildings, waterways and relevant POIs clipped to the AOI, versioned and attributed; not a runtime web dependency.
- SRTM-derived broad terrain height with version/CC-BY credit; hand-tuned route correction and collision mesh.
- Reusable curb/road/drain/path/crossing kit; do not tile a single texture across the whole world.
- Building kit: compound wall/gate, simple residential modules, shopfront modules, hostels, apartment block, service/office massing, roof types, verandah, courtyard, signage frames and repair/paint variations.
- Street kit: poles, wires, lamp posts, water tanks, generator silhouettes, bus stop/waiting canopy, bins, barriers, billboards, drain covers, benches and simple road markings.
- Landmark models: stylised but recognisable silhouettes. Do not model later landmarks until the first corridor content is playable.

### Characters and animation

- Player: one original rig/body with swappable skin tone, hair, top, trousers/skirt, shoes and small accessory slots. First milestone supports a compact set of options with visible differences.
- Pedestrians: small compatible variants made from shared bodies/rigs/material atlases; count dynamically scaled by device quality.
- Locomotion animations: idle, walk, jog/run, start/stop, turn-in-place, interact/use vendor, sit/rest, and vehicle enter/exit only when vehicle gameplay is built.
- Any retarget/animation download is individually license-checked. Do not assume an animation library grants redistribution or product embedding rights.

### Vehicles and transport (later, fully functional before claim)

- One test sedan or minibus first; then motorcycle/keke if time and collision/performance tests pass. Create separate exterior, wheel/steering components, seat/exiting points, collider, brake lights/headlights and damage-independent collision feedback.
- Model clean unbranded bodywork. Avoid real route/company livery unless licensed.
- Traffic actors may use low-poly, non-player LOD and follow road graph; player-driveable vehicles require actual input/physics/entry/exit—not just a parked prop.

### Sound and music

- Original location atmosphere layers (road wash, vendors at distance, birds, footsteps, rain/roof sounds, shop interiors); use consented recording sessions in Ibadan where practical.
- Every voice line includes language, transcription/translation, performer permission and context. No “generic African” loops, unlicensed commercial music or identifiable private conversations.
- If using external audio, verify source license and attribution per recording, not only the website's overall license.

### UI and graphic assets

- Original icon family with consistent stroke/fill, high contrast and scalable SVG sources.
- Touch joystick and context button use large hit areas and translucent low-opacity surfaces; hide or fade controls while not needed.
- Local map is drawn from in-game road data. Do not put an unlicensed basemap tile under it.

## 7. License and provenance policy

- **OSM:** preserve source attribution visibly in About/Credits and distribute data-derived database under the terms required by ODbL after legal review. Keep raw source snapshots external to the runtime bundle.
- **Terrain:** use the specifically licensed Digital Earth Africa SRTM product (CC BY 4.0 as stated in its specs) or another approved dataset; save the exact attribution and retrieval version.
- **Generic CC0 material/props:** Poly Haven is an approved candidate source; record exact item IDs. CC0 does not mean trademarks, likenesses or privacy rights are cleared.
- **Original content:** keep creation/source file and author; obtain contributor assignment or agreement before commercial release.
- **Fonts:** use OFL/Apache-licensed fonts with license text preserved, or system font stack; do not extract fonts from logos.
- **Audio:** asset-specific permission and performer releases.
- **No unclear license:** placeholder with a generated/procedural replacement; do not “borrow now, clear later.”

## 8. Current asset readiness

The **provisional AOI polygon and asset register exist**. The following are **not ready as finished runtime assets**: OSM/DEM data, road meshes, building kits, character model/rig/animations, vehicles, final materials, audio recordings and map/UI art. The manifest says whether each row is specification-ready, a provisional file, or still unacquired. This distinction is intentional; the project must not report an asset as finished solely because a source or tool has been selected.
