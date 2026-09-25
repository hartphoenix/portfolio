## Portfolio Site

Hart's professional portfolio site. Vite + React + TypeScript.

### Purpose

Sells Hart's consulting practice (consulting-first as of 2026-09-24;
employer-facing copy is out). The site should tell a coherent story that
matches LinkedIn, the GitHub profile, and the resume — the same narrative
in different formats.

### Thread & resources

All positioning work, strategy, and career-starter exercise artifacts
live in the roger repo's portfolio thread:

- **Thread home:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/_thread.md`
  — status, decisions, open questions, next actions, opportunity
  landscape. Read this first.
- **Elevator pitches:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/elevator-pitches.md`
  — four versions (5s, 30s, 60s, 5min). Source of truth for copy and
  narrative structure.
- **Journaling:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/journaling.md`
  — career-starter Part 1 responses. Deep self-assessment across six
  dimensions. Source material for all content.
- **Throughline synthesis:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/what-do-you-do-synthesis.md`
  — the integration operation across all domains. Core narrative logic.
- **Metaphor exploration:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/pitch-metaphor-exploration.md`
  — selected metaphor: mycorrhizal network. Rationale for selection.
- **Brainstorm:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/portfolio-brainstorm.md`
  — Visakan Verasamy's marketing interview, audience signal, site architecture
  (three-movement scroll — still a candidate, not confirmed),
  aesthetic direction. (2026-03-16)
- **Career-starter audit:** `/Users/rhhart/Documents/GitHub/roger/threads/portfolio/2026-03-23-career-starter-audit.md`
  — gap analysis with Hart's inline answers to open questions.
- **Company research:** `/Users/rhhart/Documents/GitHub/roger/areas/career/companies.md`
  and `/Users/rhhart/Documents/GitHub/roger/areas/career/company-deep-dives.md`

### Key narrative decisions

Decided 2026-09-24 in
`/Users/rhhart/Documents/GitHub/roger/threads/portfolio/2026-09-24-site-copy-proposals.md`
(the Tether comment threads hold Hart's reasoning).

- **Lead line:** "I teach teams to teach themselves — starting with AI."
  The career thesis is teaching people to teach themselves; integration
  is the method, not the headline.
- **Audience:** businesses that aren't already strong on tech. What Hart
  teaches includes how to teach yourself AI skills. Tether is the natural
  conversation starter.
- **Emphasize training, not building:** the focus is on who gets built.
- **Voice:** human-to-human. Avoid consulting and industry jargon
  ("stopped compounding," "restore the loop").
- **Evidence:** Tether, Weft, and the merged Honcho contribution. Leave
  Homing off. Don't cite the Stage11 client work (ended badly, under NDA).
- **Superseded:** the mycorrhizal metaphor and the original three-project
  set (Triple-Tac-Toe, Schelling Points, Weft).

### Keep surfaces in sync

Any change to positioning copy on the site (Home, About, Contact, project
framing) also needs a matching revision of the GitHub profile bio/README
and the LinkedIn headline and About section. Remind Hart and draft the
revised copy in the same session.

### Open design questions

- Site architecture: three-movement narrative scroll (brainstorm) vs.
  simpler single-page approach. Not yet decided.
- Weft publicity: how much of the system to show publicly.
- Aesthetic direction: warm but not soft, crafted but not slick, alive
  and connected. See brainstorm §10.
- The site itself is a portfolio piece — it demonstrates product and
  React/TS craft to prospective clients.

### Conventions

- React + TypeScript (Vite scaffold)
- Agents: run the site with `npm run dev:agent` (port 5188; stop with
  `curl localhost:5188/__agent_stop`).
