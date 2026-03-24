# Portfolio Site — First Draft Build Plan

## Context

Hart needs a professional portfolio site as one surface in his career search. The career-starter exercise requires: identity, contact, links to other surfaces, core story on homepage, projects page with write-ups + live/code links, and no ghost-town vibes. The site should demonstrate React/TS proficiency to target companies while telling the throughline story: same integration operation across theater → software → AI.

Aesthetic direction: **dark minimalism with biomimicry** — mycelium networks, bioluminescence, organic branching. Warm but not soft. Alive and connected.

---

## Architecture

React Router with 6 routes. Persistent nav + layout shell.

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Landing — brief intro, mission statement, CTAs |
| `/about` | About | Fuller bio, photo placeholder, throughline |
| `/projects` | Coding Projects | 3 project cards linking offsite (new tabs) |
| `/creative` | Creative | Cards for coaching, courses, writing, music, theater — linking out |
| `/social` | Social | Profile links (GitHub, LinkedIn, others) |
| `/contact` | Contact | Mailto link, "what I'm looking for" paragraph |

---

## Dependencies

Add one:
```
npm install react-router-dom
```

No CSS framework, no animation library, no icon pack. CSS Modules (built into Vite) for scoped styles. Hand-authored SVG for visuals.

---

## File Structure

```
src/
  main.tsx              # Entry — BrowserRouter wraps App
  App.tsx               # Layout shell: nav + <Outlet /> + MyceliumBg
  App.module.css
  theme.css             # CSS custom properties, reset, base typography

  Home.tsx              # Route: /
  Home.module.css
  About.tsx             # Route: /about
  About.module.css
  Projects.tsx          # Route: /projects
  Projects.module.css
  Creative.tsx          # Route: /creative
  Creative.module.css
  Social.tsx            # Route: /social
  Social.module.css
  Contact.tsx           # Route: /contact
  Contact.module.css

  ProjectCard.tsx       # Shared card — projects + creative
  ProjectCard.module.css
  LinkCard.tsx          # Simpler card — social/external links
  LinkCard.module.css
  MyceliumBg.tsx        # SVG background decoration
  MyceliumBg.module.css

  data.ts               # All content: projects, creative items, social links
```

Delete all existing scaffold files: `App.css`, `index.css`, `assets/*`, `public/icons.svg`.

---

## Theme & Visual System

### Color palette
- **Backgrounds:** `#0a0b0f` (deep), `#111218` (primary), `#1a1b24` (cards)
- **Text:** `#e8e4ef` (headings), `#9ca3af` (body), `#5a5e6b` (muted)
- **Accent:** `#c9a84c` (warm gold — bioluminescent glow)
- **Secondary accent:** `#7cb87a` (soft green — organic/living)
- **Borders:** `#2a2b35` with gold glow on hover

### Biomimicry techniques (all CSS/SVG, no JS libraries)
1. **Mycelium background** — Fixed SVG with ~15-20 branching paths at low opacity. CSS `stroke-dashoffset` animation creates slow growth/pulse effect. Multiple strands with staggered `animation-delay`.
2. **Card border glow** — Hover state: border shifts to accent color + soft box-shadow suggesting bioluminescence. Per-project accent colors via CSS variable.
3. **Radial glow** — Diffuse radial gradient behind hero text on Home. Pure CSS, no image.
4. **Connection lines** — Optional thin SVG dividers between sections with branching endpoints.

### Typography
- System font stack, no custom fonts for first draft
- `clamp()` for responsive heading sizes
- `18px/1.6` base

### Responsive breakpoints (mobile-first)
- Default: single column
- `640px`: 2-column card grids
- `1024px`: nav horizontal, wider spacing

Mobile nav: hamburger menu (CSS checkbox trick or minimal React state).

---

## Component Design

### App.tsx (layout shell)
- `<MyceliumBg />` fixed behind everything
- `<nav>` with `<NavLink>` for each route (active state styling)
- `<main>` with `<Outlet />`
- Max-width container centered, generous padding

### Home.tsx
- Hero: name, 5-second pitch, 2-3 sentence expansion from 30-second pitch
- Two CTAs: "See my work" → `/projects`, "Get in touch" → `/contact`
- Radial glow behind hero text

### About.tsx
- Styled initials placeholder for photo (not a broken `<img>`)
- Bio from 60-second pitch material
- Throughline: theater → software → AI, same operation

### Projects.tsx
- Maps `projects` array from `data.ts` into `<ProjectCard>` grid
- Each card: title, tagline, description, tech tags, live link + code link (both open new tab)
- Three projects: Triple-Tac-Toe, Schelling Points, Weft

### Creative.tsx
- Maps `creativeItems` from `data.ts` into cards
- Five domains: coaching, courses, writing, music, theater
- Each: title, description, external link (when available)

### Social.tsx
- Maps `socialLinks` into `<LinkCard>` grid
- GitHub, LinkedIn, and others Hart provides

### Contact.tsx
- "What I'm looking for" paragraph (from 5-min pitch closing)
- `mailto:` link styled as button

### ProjectCard.tsx
- Props: `title, tagline, description, tags, liveUrl?, codeUrl?, accentColor?`
- Hover glow using per-card accent color
- Missing URLs: button simply doesn't render (no "coming soon")

### LinkCard.tsx
- Props: `title, description, url, icon?`
- Simpler card for social/creative links

### MyceliumBg.tsx
- Inline SVG with hand-drawn branching paths
- `position: fixed`, full viewport, `pointer-events: none`, `z-index: -1`
- CSS keyframe animation on stroke-dashoffset

---

## Data Model (`data.ts`)

```ts
type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  liveUrl?: string
  codeUrl?: string
  accentColor?: string
}

type CreativeItem = {
  title: string
  domain: string
  description: string
  url?: string
}

type SocialLink = {
  platform: string
  url: string
  handle?: string
}
```

Content sourced from elevator pitches and brainstorm materials. URLs to be provided by Hart.

---

## Content Sources

| Page | Source | Status |
|---|---|---|
| Home hero | 5s + 30s elevator pitches | Ready |
| About bio | 60s pitch + brainstorm bio | Ready |
| Projects | Brainstorm §8 project descriptions | Ready (URLs needed) |
| Creative | Brainstorm Q2, Q4, Q7 | Needs light copywriting |
| Social | Hart to provide handles/URLs | Waiting |
| Contact | 5-min pitch closing paragraph | Ready |

---

## Build Sequence

0. **Save plan** — Copy this plan to `/Users/rhhart/Documents/GitHub/portfolio/.claude/plans/portfolio-first-draft.md` so it lives with the repo.

1. **Routing scaffold** — Install react-router-dom, rewrite `main.tsx` + `App.tsx` with routes and stub pages. Delete old scaffold files. Verify: dev server runs, all routes work, build passes.

2. **Theme + layout** — Write `theme.css`, style nav with NavLink active states, max-width container. Verify: dark background, gold accent, nav functional.

3. **Data layer** — Create `data.ts` with all content arrays. Fill from elevator pitches and brainstorm. Placeholder URLs where needed.

4. **Card components** — Build `ProjectCard` and `LinkCard` with hover glow effects.

5. **Home page** — Hero, pitch text, CTAs, radial glow.

6. **Projects page** — Map project data into card grid. Responsive layout.

7. **Creative + Social + Contact** — Remaining pages with real content.

8. **About page** — Bio, initials placeholder, throughline.

9. **Mycelium background** — SVG with animated branching paths.

10. **Mobile nav** — Hamburger menu for small screens.

11. **Polish + audit** — Lint, build, check every career-starter requirement, update `<title>` in index.html.

---

## Items Needed From Hart

These can come during the build — nothing blocks the first few steps. Items are grouped by when they're needed.

### Needed for data layer (step 3)

**Coding Projects — URLs:**
- Triple-Tac-Toe: live URL + GitHub repo URL
- Schelling Points: live URL + GitHub repo URL
- Weft: GitHub repo URL (+ live URL if applicable)

**Creative — external links:**
- Coaching profile URL (if exists)
- Course/teaching page URL (if exists)
- DesignIntelligence articles or writing portfolio URL
- Music links (SoundCloud, Bandcamp, YouTube, etc.)
- Immersive theater documentation (video, photos, writeup URL)

**Social — profile URLs:**
- GitHub username/URL
- LinkedIn URL
- Any other profiles: Bluesky, X/Twitter, personal blog, etc.

**Contact:**
- Email address for the mailto link

### Needed for About page (step 8)

- Headshot photo (or confirm using styled initials placeholder for now)

### Can refine anytime

- Copy review: once pages are built with draft content from the elevator pitches, you can revise any text
- Creative section: which of the five domains (coaching, courses, writing, music, theater) to include vs. defer — or add others
- Project descriptions: confirm or rewrite the taglines/descriptions I pull from brainstorm materials

---

## Verification

- `npm run dev` — all 6 routes render with content
- `npm run build` — clean build, no TS errors
- `npm run lint` — no warnings
- Mobile test at 375px width — nav works, content readable
- Career-starter checklist:
  - [ ] Identity → Home + About
  - [ ] Contact → Contact page
  - [ ] Links to other surfaces → Social page + nav
  - [ ] Core story on homepage → Home hero
  - [ ] Projects with write-ups, live links, code links → Projects page
  - [ ] Not a construction site → all pages have real content
