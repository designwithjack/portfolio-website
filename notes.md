# Project Notes — designwithjack

A running log of decisions, rationale, and things worth remembering.
Reference this file with `@notes.md` at the start of complex Cursor tasks.

---

## Purpose and intent

This is a professional portfolio — not just a website. It needs to work as
a résumé, a showcase of past work, and a demonstration of design engineering
capability in its own right. The code quality, motion design, and attention
to detail are themselves part of what's on display. Someone senior reviewing
the source should come away impressed.

One of the personal goals of building this is developing stronger design
engineering skills — motion design, micro-interactions, and the fluency to
implement considered UI behaviour from scratch rather than reaching for
component libraries.

---

## Stack decisions

### Nuxt 3 + Vue 3
The natural choice given existing expertise. File-based routing keeps things
simple for a site of this scale. Composition API with `<script setup>` only —
Options API is not used anywhere in this project.

### Tailwind CSS v4
Already installed at v4.1.18. Important difference from v3: there is no
`tailwind.config.js`. All configuration — custom colours, fonts, spacing
tokens — lives in the main CSS file using `@theme` directives. Set up custom
design tokens early so Cursor can reference them by name throughout.

### Motion for Vue
Chosen over Anime.js despite Anime.js being more lightweight. The reasoning:
bundle size is not a meaningful constraint for a portfolio. Motion for Vue
signals current industry familiarity, has better Cursor/AI code generation
support, and its declarative API — variants, AnimatePresence, gesture
animations — makes the intent of animations readable in the code itself.

Motion+ (the paid tier with MCP server and 330+ examples) was considered but
not purchased at £289. The free library is fully capable. The gap is tooling:
the paid tier gives Cursor direct access to Motion's example vault via MCP.
The workaround is `.cursor/rules/motion.mdc` (manual rules file) plus the
Motion docs bookmarked for `@Web` queries in Cursor when needed.

Motion docs references:
- https://motion.dev/docs/vue
- https://motion.dev/docs/gestures
- https://motion.dev/docs/scroll
- https://motion.dev/docs/animate-presence

### @nuxt/content for case studies
Considered hardcoding case study content in components. Chose `@nuxt/content`
instead because case studies will eventually be rich — process documentation,
image sequences, outcomes — and mixing long-form content into template markup
gets messy quickly. The setup cost was ~15 minutes. Markdown files with
frontmatter live in `content/work/[slug].md`. The `/work` list page queries
this content; the `/work/[slug]` dynamic route is the target end state even
if the list starts simple.

Frontmatter shape: `title`, `year`, `tags`, `coverImage`, `summary`

### No UI component library
Every component is built from scratch. This is deliberate — full aesthetic
control, no overriding third-party styles, and it forces considered decisions
about every UI element. Lucide (`lucide-vue-next`) is installed for icons and
is the only external UI dependency.

### pnpm
npm had auth token issues on this machine. Switched to pnpm (v10.30.3).
`.npmrc` includes `shamefully-hoist=true` to prevent Nuxt/pnpm peer
resolution edge cases with vue-router and generated types.
`"packageManager": "pnpm@10.30.3"` is set in `package.json`.

---

## Site structure decisions

### Landing page `/` — work history, not a splash
The root is a chronological list of roles, not a hero/splash page. Roles
truncate after the most recent few and expand via an animated 'View more'
interaction — a good candidate for a considered Motion for Vue animation.
A separate PDF CV exists independently; this page is not print-formatted.

### `/work` — built for future drill-down from day one
Starts as a project list but the file structure and routing assumes
`/work/[slug]` case study pages from the start. Building the list page
without this in mind would require retrofitting later.

### `/play` — external links only
All items open in a new tab (`target="_blank"` + `rel="noopener noreferrer"`).
These link to live experiments hosted elsewhere. A single card component
handles all items — there are no variant types needed.

---

## Cursor and AI workflow decisions

### Compound Engineer — removed
Started with the Compound Engineer plugin. Removed it: the subagent
architecture adds overhead and tracking complexity without meaningful benefit
for a solo, single-stack project. May revisit for larger work projects.

### AGENTS.md over .cursor/rules/ for project context
Project intent and conventions live in `AGENTS.md` at the root. This is
simpler than managing multiple `.mdc` files, is version-controlled naturally,
and is readable without Cursor tooling. The one exception is `motion.mdc`
in `.cursor/rules/` which is kept separate because it contains detailed
implementation patterns best maintained independently of project intent.

### Scope discipline
The main source of AI friction is over-scoped requests. The working pattern
is: one thing at a time, tight scope, review the diff before accepting.
Cursor's tendency to "helpfully" refactor adjacent code is suppressed by
an explicit rule in AGENTS.md.

### layouts/default.vue established early
The layout pattern is set before any pages are generated. This prevents
Cursor from drifting between using `app.vue` directly and `layouts/` — a
common inconsistency when layout isn't established upfront.

---

## Things to do before building pages

- [ ] Create `composables/useReducedMotion.ts` — referenced everywhere in
      motion rules, needs to exist before any animation code is written
- [ ] Set up `layouts/default.vue` with nav and footer structure
- [ ] Define design tokens in the main CSS file using Tailwind v4 `@theme`
- [ ] Add `packageManager` field to `package.json` if not already present
- [ ] Confirm `devtools: { enabled: true }` is in `nuxt.config.ts`
- [ ] Install `@nuxt/content` and `motion` when ready to start building
