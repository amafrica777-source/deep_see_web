# Handoff: Deep See — Bioluminescent Home Page (Direction 1B)

## Overview
A redesigned marketing home page for **Deep See** — an AI, robotics, and intelligent-software agency. The design is a dark, deep-ocean ("bioluminescent") theme: near-black backgrounds, a cyan bioluminescent accent, glassmorphism cards, drifting particle ambiance, and a signature **orbiting capability system** in the hero (the four core service icons revolve around the central Deep See logo mark). The page has five sections: sticky nav, hero, services, selected work, and a closing CTA + footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, **not production code to copy directly**. The task is to **recreate this design in the target codebase's environment** (React, Vue, Svelte, etc.) using its established component patterns, styling approach (CSS modules / Tailwind / styled-components), and conventions. If no front-end environment exists yet, choose an appropriate framework and implement there. The inline styles in the reference file are for portability only — translate them into the codebase's normal styling system.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, shadows, and animations are all final and specified below. Recreate pixel-perfectly using the codebase's libraries. The reference canvas is designed at **1280px content width**; make it fluid/responsive per the codebase's breakpoints (see Responsive Behavior).

## Screens / Views

### Screen: Home (single scrolling page)
Five stacked sections, full-bleed, max content width **1280px**, centered.

#### 1. Sticky top nav
- **Layout**: `flex`, `justify-content: space-between`, `align-items: center`, padding `24px 56px`. z-index above hero.
- **Left — logo lockup**: `flex`, `gap: 12px`, `align-items: center`.
  - Logo mark image `deepsee-mark.png`, `36×36px`, `object-fit: contain`, `filter: drop-shadow(0 0 14px rgba(94,230,255,0.7))`.
  - Wordmark "Deep See" — Space Grotesk 700, `20px`, color `#eaf2ff`; the word "See" is `#5ee6ff`.
- **Right — nav pill**: `flex`, `gap: 8px`, background `rgba(255,255,255,0.05)`, border `1px solid rgba(255,255,255,0.1)`, padding `6px`, `border-radius: 999px`, `backdrop-filter: blur(8px)`. Links: `14px`.
  - Active link ("Home"): background `#5ee6ff`, color `#04070d`, weight 600, padding `8px 16px`, `border-radius: 999px`.
  - Inactive links: color `#c3cee0`, padding `8px 16px`.
  - Items: Home · Services · Projects · Research · Contact.

#### 2. Hero (centered, with orbiting capability system)
- **Container**: `background: radial-gradient(1200px 700px at 50% -10%, #0b2b47 0%, #071726 40%, #04090f 80%)`, `overflow: hidden`, `position: relative`.
- **Particle layer**: absolutely-positioned full-bleed layer of ~22 small cyan dots (`#8bf0ff`, `box-shadow: 0 0 12px #5ee6ff`), sizes 2–5px, each animating with the `rise` keyframe (float upward + fade) over a randomized 7–16s duration and negative delay. Purely decorative; `pointer-events: none`.
- **Content wrapper**: padding `70px 56px 110px`, `text-align: center`, `flex` column, centered.
- **Orbiting capability system** (signature element): a `520×520px` relative box, floating gently via `floatB` (±14px, 6s).
  - Dashed orbit ring: `440×440px` centered circle, `border: 1px dashed rgba(94,230,255,0.16)`.
  - **Center**: the logo mark `104×104px` with `drop-shadow(0 0 34px rgba(94,230,255,0.85))`, wrapped by two concentric `104px` cyan rings each running the `ping` keyframe (scale-out + fade) at `3.4s`, one offset by `1.7s` — a sonar-pulse effect.
  - **Four orbiting badges**: an inner wrapper spins via `spin` (0→360°, **42s linear infinite**). Each badge is placed at a cardinal angle and pushed out along a **220px radius** using the pattern `transform: rotate(θ) translate(220px) rotate(-θ)`; θ = -90°, 0°, 90°, 180°. Each badge counter-rotates with `spinrev` (0→-360°, 42s) so **labels stay upright** while orbiting.
  - Each badge = a `60×60px` glass tile (`border-radius: 16px`, background `rgba(10,25,42,0.72)`, border `1px solid rgba(94,230,255,0.34)`, `backdrop-filter: blur(6px)`, shadow `0 10px 34px rgba(0,0,0,0.45), 0 0 26px rgba(94,230,255,0.18)`) holding a cyan (`#5ee6ff`) icon, with a label below it (JetBrains Mono `10.5px`, color `#d7e7f6`, `text-shadow: 0 1px 7px rgba(0,10,20,0.75)`, `white-space: nowrap`).
  - The four badges (in orbit order θ = -90/0/90/180): **AI Applications** (neural-nodes icon), **Robotics & Autonomy** (chip icon), **Web & Product Eng.** (`</>` glyph), **Applied Research** (target/concentric-circle icon). Icons are inline `26×26` SVGs (see reference file for exact paths).
- **Eyebrow**: JetBrains Mono `13px`, `letter-spacing: 3px`, uppercase, color `#5ee6ff` — text "Signal from the depths".
- **H1**: Space Grotesk 700, `64px`, `line-height: 1.05`, `letter-spacing: -1.4px`, color `#f3f8ff`, `max-width: 840px`, `text-wrap: balance` — "We build AI & robotics that see in the dark."
- **Sub-paragraph**: Instrument Sans `19px`, `line-height: 1.6`, color `#b7c4d8`, `max-width: 600px` — "Autonomous systems, production machine learning, and the software that ties it together — engineered for the environments everyone else avoids."
- **Buttons** (`flex`, `gap: 16px`):
  - Primary "Start a project": background `#5ee6ff`, color `#04070d`, weight 600, padding `15px 32px`, `border-radius: 999px`, `16px`, glow `box-shadow: 0 0 40px rgba(94,230,255,0.55)`.
  - Secondary "See our work": color `#eaf2ff`, padding `15px 28px`, `border-radius: 999px`, border `1px solid rgba(255,255,255,0.18)`, background `rgba(255,255,255,0.04)`.

#### 3. Services — "What we build"
- **Section**: background `#04090f`, padding `90px 56px`.
- **H2** (centered): Space Grotesk 600, `38px`, `letter-spacing: -0.7px`, color `#eaf2ff`, margin-bottom `52px`.
- **Card row**: `display: flex`, `flex-wrap: wrap`, `gap: 22px`. Each card `flex: 1 1 460px` (2-up on wide, reflows to 1-up; the 5th card fills the last row).
- **Card**: `background: linear-gradient(160deg, rgba(94,230,255,0.09), rgba(255,255,255,0.02))`, border `1px solid rgba(94,230,255,0.18)`, `border-radius: 18px`, padding `34px`, `backdrop-filter: blur(6px)`, animating `glow` (pulsing cyan box-shadow, 5s).
  - Number chip: `40×40px`, `border-radius: 12px`, background `rgba(94,230,255,0.14)`, border `1px solid rgba(94,230,255,0.3)`, JetBrains Mono `14px`, color `#5ee6ff`.
  - Title: Space Grotesk 600, `22px`, color `#eaf2ff`.
  - Body: Instrument Sans `15.5px`, `line-height: 1.65`, color `#9fb0c8`.
- **Five services** (see Content below).

#### 4. Selected work — projects
- **Section**: `background: radial-gradient(900px 500px at 50% 120%, #0b2b47, #04090f)`, padding `90px 56px`.
- **H2** (centered): same style as Services H2 — "Selected work".
- **Grid**: `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap: 22px`.
- **Card**: `border-radius: 18px`, `overflow: hidden`, border `1px solid rgba(94,230,255,0.16)`, background `rgba(255,255,255,0.03)`, `backdrop-filter: blur(6px)`.
  - Image area: `height: 170px`, `background: radial-gradient(circle at 50% 40%, rgba(94,230,255,0.28), rgba(11,43,71,0.6))`, with a centered `56px` ringed circle (`border: 1px solid rgba(255,255,255,0.4)`, glow `box-shadow: 0 0 30px rgba(94,230,255,0.5)`). A mono caption sits bottom-left (`11px`, `#bfe9f5`). **These are placeholders — replace with real project imagery.**
  - Body padding `24px`: tag (JetBrains Mono `11px`, `#5ee6ff`, `letter-spacing: 1px`), title (Space Grotesk 600, `20px`, `#eaf2ff`), body (`14.5px`, `line-height: 1.6`, `#9fb0c8`).
- **Three projects** (see Content below).

#### 5. CTA + footer
- **CTA**: padding `100px 56px`, `text-align: center`, background `#04090f`, `overflow: hidden`. Two concentric decorative ring outlines centered behind the content (`600px` `rgba(94,230,255,0.15)`, `400px` `rgba(94,230,255,0.12)`).
  - H2: Space Grotesk 700, `44px`, `letter-spacing: -1px`, color `#f3f8ff` — "Send us a signal."
  - Paragraph: `18px`, color `#b7c4d8` — "Every deep problem starts with a faint signal. We'll help you find it and build on it."
  - Button "Work with us": same primary style, padding `16px 36px`, glow `box-shadow: 0 0 44px rgba(94,230,255,0.6)`.
- **Footer**: background `#04070d`, padding `28px 56px`, `border-top: 1px solid rgba(255,255,255,0.06)`, JetBrains Mono `13px`, color `#5b6b85`, centered — "© 2026 DeepSee AI & Robotics — Sharjah, UAE".

## Interactions & Behavior
- **Nav links / buttons**: standard navigation + anchor targets. Add hover states per the codebase (suggested: primary button brightens / lifts; secondary button border → `rgba(94,230,255,0.4)`; inactive nav link color → `#eaf2ff`).
- **Orbit animation**: continuous. Outer wrapper `spin` 42s linear infinite; each badge `spinrev` 42s linear infinite (equal & opposite → upright labels). The whole cluster also `floatB` bobs ±14px over 6s. Center rings `ping` scale-and-fade (3.4s, staggered 1.7s).
- **Particles**: `rise` — translateY(0)→-120px with scale 1→1.3 and fade in/out; randomized per-particle duration (7–16s) and negative start delay.
- **Service cards**: `glow` — box-shadow pulses cyan over 5s (subtle "breathing").
- **Reduced motion**: wrap all decorative animations (orbit, particles, glow, ping, float) in `@media (prefers-reduced-motion: reduce)` and disable them — the layout must be fully legible static.

## State Management
This is a static marketing page — **no application state required**. The only dynamic pieces are:
- `services` array (5 items) → rendered into the services row.
- `projects` array (3 items) → rendered into the work grid.
- Particle list → generated at load (or precomputed) for the hero ambiance.
In the reference these are simple JS arrays mapped to markup; in the target codebase, drive them from a CMS/content file or local constants as appropriate.

## Design Tokens

### Colors
- `#04070d` — near-black base / footer
- `#04090f` — section background (services, CTA)
- `#071726`, `#0b2b47` — deep-ocean gradient stops
- `#0a192a` (`rgba(10,25,42,…)`) — glass tile fill base
- `#5ee6ff` — **primary cyan accent** (bioluminescent), buttons, icons, eyebrows
- `#8bf0ff` — bright particle cyan
- `#f3f8ff` — headline white
- `#eaf2ff` — high-emphasis text / titles
- `#dfe7f2` — body base text
- `#d7e7f6` — orbit badge labels
- `#c3cee0` — nav inactive links
- `#b7c4d8` — sub-paragraph text
- `#9fb0c8` — card body text
- `#5b6b85` — footer / muted mono
- `#bfe9f5` — project image caption
- Accent alphas: borders `rgba(94,230,255,0.16–0.34)`, glows `rgba(94,230,255,0.18–0.6)`

### Typography
- **Display / headings**: `Space Grotesk` (600, 700). H1 64px, H2 38–44px, card titles 20–22px.
- **Body / UI**: `Instrument Sans` (400–600). Body 14.5–19px, line-height 1.6–1.65.
- **Mono / labels / data**: `JetBrains Mono` (400, 500). 10.5–14px, letter-spacing 0.3–3px, often uppercase.
- Google Fonts import: `Space+Grotesk:wght@400;500;600;700`, `Instrument+Sans:wght@400;500;600`, `JetBrains+Mono:wght@400;500`.

### Spacing
- Section vertical padding: `90–100px`; horizontal `56px`.
- Card padding: `24–34px`. Card gaps: `22px`. Button gaps: `16px`.
- Content max-width: `1280px`.

### Border radius
- Pills / buttons: `999px`
- Cards: `18px`
- Number chips / small tiles: `12–16px`

### Shadows / effects
- Glass tile: `0 10px 34px rgba(0,0,0,0.45), 0 0 26px rgba(94,230,255,0.18)`
- Primary button glow: `0 0 40–44px rgba(94,230,255,0.55–0.6)`
- Logo glow: `drop-shadow(0 0 14–34px rgba(94,230,255,0.7–0.85))`
- Glass blur: `backdrop-filter: blur(6–8px)`

### Keyframes (see reference for exact definitions)
`rise` (particles), `ping` (sonar rings), `glow` (card breathing), `floatB` (bob), `spin` / `spinrev` (orbit + counter-rotate).

## Responsive Behavior
Reference is designed at 1280px. Suggested adaptation:
- **≤ ~900px**: services cards go 1-up (already reflow via `flex: 1 1 460px`); projects grid → 1–2 columns; reduce H1 to ~40–44px; nav collapses to a menu button.
- **Orbit system**: scale the `520px` box down (e.g. `transform: scale()` or a smaller radius) on narrow screens, or switch to a static 2×2 badge grid under the logo if the orbit is too large for mobile.
- Reduce section padding (`90px` → ~`56px`) on mobile.

## Assets
- `assets/deepsee-mark.png` — the Deep See logo mark (bioluminescent swirl), transparent background, ~873×832px. **Provided by the client**; cropped from their supplied logo file. Used in nav (36px) and hero center (104px). Ship an SVG version if the client can provide one.
- **Icons** (AI nodes, robotics chip, `</>`, research target) are inline SVG in the reference — reuse or swap for the codebase's icon library.
- **Project images are placeholders** (gradient + ring). Replace with real project photography/screenshots.
- Fonts loaded from Google Fonts (self-host if the codebase requires it).

## Files
- `1b_bioluminescent_home.html` — the self-contained high-fidelity design reference (open in any browser). All layout, styling, animation, and content live here.
- `assets/deepsee-mark.png` — logo mark used by the reference.

### Content (exact copy)

**Services (5):**
1. `01` **AI Applications** — "Production ML and LLM systems for automation, forecasting, and decision support — shipped, monitored, and owned end to end."
2. `02` **Robotics & Autonomy** — "Perception, control, and navigation stacks for machines that operate without a human in the loop."
3. `03` **Web & Product Engineering** — "Scalable platforms and internal tools built on clean architecture and real observability."
4. `04` **Applied Research** — "Deep-sea-inspired autonomy: adaptive learning, sensor fusion, and intelligence at the edge."
5. `05` **Digital Marketing** — "Social media, content, and campaign strategy that grows local businesses and digital brands."

**Projects (3):**
1. `COMPUTER VISION` — **AI Vision System** — "Real-time detection and tracking deployed at the edge for industrial inspection."
2. `ROBOTICS` — **Autonomous Unit** — "A self-navigating robotic platform for precision tasks in unstructured environments."
3. `RESEARCH` — **DeepSee Neural Engine** — "An adaptive inference engine modeled on deep-sea sensory systems."

> Note: the hero's four orbiting badges intentionally show only the **four core capabilities** (AI Applications, Robotics & Autonomy, Web & Product Eng., Applied Research). Digital Marketing appears as the 5th services card but not in the orbit.
