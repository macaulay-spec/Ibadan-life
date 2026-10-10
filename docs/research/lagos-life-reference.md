# Lagoslife.app — curated-place reference

**Reviewed:** 2026-10-10
**Reference:** <https://lagoslife.app/>
**Use:** design-pattern inspiration only; no assets, names, text, map data or implementation are copied.

## What the public page shows

The public-facing page presents a set of named urban destinations rather than promising that every block of Lagos is individually authored. Visible examples include Amala Shitta, CcHub, Freedom Park, a Market, i-Fitness, Quilox, a Library, a Beach and a Hospital. It also shows player/home-status elements and site-reported online/visit counters. Those displayed counters were not independently verified.

A landing page is not evidence of the underlying map renderer, geographic accuracy, data pipeline, concurrency or technical multiplayer architecture. This review records only visible product framing; it is not a technical teardown.

## Pattern to adapt for IBADAN LIFE

- Make **a few recognisable place anchors** the purpose of a compact street network.
- Give each anchor a clear activity or social role; do not populate a map with empty named pins.
- Let streets and short connections make the destinations feel like one neighbourhood.
- Keep human-player presence honest: do not show online avatars, counters or homes as live unless a real multiplayer service supplies them.
- Expand into adjacent areas only after the first neighbourhood has a complete playable loop.

## Application to the first Ibadan slice

The initial recommendation is a small Sango T-junction area with short pieces of Polytechnic Road and Ijokodo Road, not the whole city or the complete Sango–UI–Agbowo route. Start with a compact set of fictional/verified gameplay destinations around the real road layout—for example, a transport/meeting point, one food/vendor point, a work/contact point and a safe rest/social place. The road geometry is sourced separately from the dated OSM-derived clip; the OSM snapshot does not itself verify these businesses or services.

See [the M1 data audit](../../assets/geodata/M1_DATA_AUDIT.md) and [the world/district plan](../world/district-plan.md) for the provisional bounds, coverage limits and next QA gates.
