# Project list component (revised)

## Goals

- One **card component** used on both Play and Work pages. Each page uses a simple **v-for** over its data (no separate list component).
- **Scroll reveal** per item via existing `<ScrollReveal>`; **hover** = subtle scale only (1.01–1.04), gated by `useReducedMotion`.
- **Content**: 16:9 thumbnail, description, and a **slot** for optional metadata (role, year, client, etc.).
- **Layout**: 1 column (thumbnail above text) below `md`; from `md` up, 2 columns with **zigzag** (image-left, image-right, image-left, … in strict list order).
- **Keys**: Always use a **stable id** (`slug` or `id`) from the data for `:key` — never use array index for keys.

---

## Zigzag

- Zigzag is **purely by list order**: first item image-left, second image-right, third image-left, etc. Visual flow is what matters, not coupling to project id.
- Use the **loop index** only for layout (e.g. `index % 2 === 0` → thumbnail left). The `:key` on the card remains `item.slug` or `item.id`.

---

## Data and content (per AGENTS.md)

**Work (from AGENTS.md):**

- Case study content lives in **`content/work/`** as markdown files with frontmatter: `title`, `year`, `tags`, `coverImage`, `summary`.
- The `/work` list page is populated by **querying this content via `@nuxt/content`** — never hardcoded.
- Do not hardcode content that belongs in a content file.

**Play:**

- AGENTS.md specifies that Play items link to external live experiments but does not define a content source. **Preferred approach**: mirror Work for consistency — use **`content/play/`** with one markdown file per project (or a single listing file) and frontmatter / structured data (e.g. `title`, `description`, `thumbnail`, `url`, optional `year` / meta). Query via `@nuxt/content` so both pages use the same content layer. If the team prefers a single `content/play.json` or similar, that’s an alternative; the card component only needs a normalized array.

---

## Links: when to use `<a>` vs `<NuxtLink>`

- **External links (Play)**: Use a plain **`<a>`** with `target="_blank"` and `rel="noopener noreferrer"`. NuxtLink is for in-app navigation; for external URLs, `<a>` is correct and avoids unnecessary client-side router behaviour.
- **Internal links (Work, when added later)**: Use **`<NuxtLink>`** for routes like `/work/[slug]` so navigation stays in the SPA and benefits from prefetch and Nuxt’s routing.

So the card component should branch on whether `href` is internal or external (e.g. same-origin or path starting with `/`) and render either `<NuxtLink>`, `<a>`, or a non-link wrapper accordingly.

---

## Component design (single component)

- **One component** only: e.g. `ProjectCard.vue` (or `ProjectListCard.vue`). No separate list component; each page does its own `v-for` and layout.
- **Root element**: If `href` is external → `<a href="..." target="_blank" rel="noopener noreferrer">`. If `href` is internal → `<NuxtLink :to="href">`. If no `href` → `<article>` or `<div>`.
- **Inner structure**: Thumbnail (NuxtImage, 16:9), then text block (title, description, default slot for meta). Wrap root in motion for hover (scale); wrap entire card in `<ScrollReveal>` in the page.
- **Layout**: Page-level grid. Below `md`: single column (thumbnail above text). From `md`: 2 columns; each row alternates thumbnail left/right using **index in the list** (e.g. `thumbnailOnLeft = index % 2 === 0`). Pass a prop like `thumbnailOnLeft` from the page’s v-for so the card can set order or grid column.

---

## Files to add or touch

| Area | Action |
|------|--------|
| **Component** | New: `app/components/ProjectCard.vue` — single card: optional link (a vs NuxtLink vs none), 16:9 thumbnail, title, description, default slot, motion hover, keyed by slug/id. |
| **Work page** | `app/pages/work.vue`: Query `@nuxt/content` for work collection, map to list shape, `v-for` with `:key="item.slug"`, pass `thumbnailOnLeft(i)`, wrap each in `ScrollReveal`. |
| **Play page** | `app/pages/play.vue`: Load play items from content (e.g. `content/play/`), map to list shape with external `href`, same v-for + ScrollReveal + zigzag pattern. |
| **Content** | Work: ensure `content/work/[slug].md` frontmatter shape. Play: add `content/play/` (or single file) with id/slug, title, description, thumbnail, url, optional meta. |
| **Types** | Minimal item type (slug/id, title, description, image, href?, internal?) in composable or types — only if needed. |

---

## Sanity checks

1. **Keys**: `:key="item.slug"` or `:key="item.id"` — never `:key="index"`.
2. **Reduced motion**: Hover scale disabled when `useReducedMotion().prefersReduced` is true.
3. **Links**: External → `<a target="_blank" rel="noopener noreferrer">`; internal → `<NuxtLink>`; no link → semantic non-link element.
4. **Single component**: One card component; list is v-for on the page only (used twice: work and play).
5. **Images**: `<NuxtImage>` for thumbnails; 16:9 aspect.
6. **Zigzag**: By list order (index) for layout only; stable id for key.
