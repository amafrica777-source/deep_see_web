# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static marketing website for **Deep See** (DeepSee AI & Robotics), an AI/robotics/software agency. No build system, no package manager, no bundler — plain HTML files linking a single shared stylesheet, plus one small vanilla JS file for the home page. There is no test suite or linter configured.

Visual identity is the dark-ocean "bioluminescent" theme (near-black backgrounds, cyan `#5ee6ff` accent, glassmorphism cards, `Space Grotesk`/`Instrument Sans`/`JetBrains Mono` via Google Fonts) applied site-wide, per the design handoff described below.

## Running the site

There is no dev server or build step. Open the HTML files directly in a browser (all internal links and the stylesheet are referenced with relative paths, e.g. `../css/global_styles.css` from `pages/`), or serve the repo root with any static file server (e.g. `python3 -m http.server`).

## Architecture

- `index.html` — home page. The only page that loads `js/home.js` and has the animated orbiting-capability hero.
- `pages/` — secondary pages: `services.html`, `projects.html`, `research.html`, `contact.html`.
- `assets/deepsee-mark.png` — the Deep See logo mark, used in every page's nav (`.logo img`) and in the home hero's orbit center.
- `js/home.js` — the site's only JavaScript file, loaded solely by `index.html`. Renders the hero's 22-dot particle ambiance and the services/projects card lists from local arrays (`services`, `projects`) at the top of the file — edit those arrays to change home page card content, don't hand-edit the generated markup.
- `css/global_styles.css` — single global stylesheet shared by every page. Structure:
  - `:root` custom properties at the top hold the full design-token palette (`--accent`, `--bg-black`, text-color tiers, etc.) and the three font-family variables — change the theme by editing tokens here, not by hunting for hex codes throughout the file.
  - Shared components used on every page: `.navbar` (logo + pill `.nav-links`, mark the current page's link `class="active"`), `.footer`, `.cta-btn` / `.btn-secondary` buttons, `.cta` (with `.cta-ring` decorative circles).
  - `.glass-card`-style cards are defined by grouping selectors rather than a single reusable class — `.service-card, .research-card, .detail-card { ... }` share one ruleset. If you add a new card-like element, add its class to that selector group instead of duplicating the rules.
  - `.page-hero` is the shared subpage hero treatment (radial-gradient background + centered heading). Apply it as a second class alongside the page's own hero class, e.g. `<section class="contact-hero page-hero">`.
  - `.hero-bio` / `.orbit*` classes are home-page-only (the orbiting capability system + particle layer) and are not meant to be reused on subpages — subpages intentionally get the simpler `.page-hero` instead.
  - A `@media (prefers-reduced-motion: reduce)` block at the end disables every decorative animation (`spin`, `spinrev`, `floatB`, `ping`, `glow`, particle `rise`). Keep any new decorative animation covered by this block.
- `design_handoff_bioluminescent_home/` — the **design reference bundle** the current theme was implemented from (not production code). `1b_bioluminescent_home.html` is the original self-contained hi-fi prototype; `README.md` is the full design spec (colors, type scale, spacing, keyframes, exact copy). Keep this around as the source of truth for the visual language — if the design language needs to evolve, update tokens in `global_styles.css` and treat this folder as historical reference rather than editing it.

### Link path convention

All stylesheet/nav links use paths relative to the linking file's own location: `index.html` at the repo root links out as `css/global_styles.css` and `pages/services.html`; files inside `pages/` link back up as `../css/global_styles.css` and `../index.html`, and link to sibling pages directly (`contact.html`). Keep new pages consistent with this — don't introduce root-absolute paths like `/deep_see_web/...`, which break unless the site happens to be mounted at that exact subpath.
