# Portfolio — Agent Instructions

## Project overview

Personal portfolio site for a Product Designer/Design Engineer. The site must
demonstrate strong design craft, attention to detail, and design engineering
competence — including intentional motion design and micro-interactions. Code
quality and structure are part of what is being showcased, so maintainability
and clarity matter as much as correctness.

## Stack

- Nuxt 3 (latest stable) with file-based routing
- Vue 3 Composition API — always `<script setup>`, never Options API
- Tailwind CSS v4 — configuration is defined in CSS using `@theme` directives,
  not `tailwind.config.js`. Do not generate or reference a `tailwind.config.js` file.
- `lucide-vue-next` is installed for icons — always use this for any icon needs,
  never suggest an alternative icon library
- `@nuxt/content` for case study pages (markdown + frontmatter)
- Motion for Vue (`motion/vue`) for all animations and transitions
- No UI component library

## Package manager

This project uses **pnpm exclusively**. Never generate `npm install` or
`yarn add` commands. Always use:

- `pnpm add <package>` for dependencies
- `pnpm add -D <package>` for dev dependencies
- `pnpm remove <package>` to uninstall

Do not install new dependencies without asking first.

## Site structure

Pages and their intended behaviour:

- `/` — Work history landing page. Roles listed chronologically, truncated
  after the most recent entries. Remaining roles revealed via an animated
  'View more' interaction using Motion for Vue. Not a printable CV — a
  separate PDF exists independently.
- `/work` — List of professional projects. Will evolve to support dynamic
  case study drill-down at `/work/[slug]` — build the list page with this
  routing in mind from the start. Case study content lives in
  `content/work/[slug].md` with frontmatter, queried via `@nuxt/content`.
- `/play` — Personal/experimental projects. Each item links to an external
  live experiment. All links open in a new tab using `target="_blank"` and
  `rel="noopener noreferrer"`.
- `/about` — Personal bio and context.

## File structure

Follow Nuxt 3 conventions strictly:

- `pages/` for routes
- `layouts/` for shared page structure — use `layouts/default.vue` for the
  consistent nav/footer wrapper. Do not use `app.vue` directly for layout.
- `components/` for reusable UI — PascalCase filenames
- `composables/` for shared logic — camelCase, prefixed with `use`
- `content/work/` for case study markdown files
- `assets/` for fonts and static images

## Metadata

Every page must include metadata using Nuxt's built-in composables.
Use `useSeoMeta` for title and description, and `useHead` for anything
more specific. Never hardcode `<title>` or `<meta>` tags manually.

Example pattern for each page:

```ts
useSeoMeta({
  title: 'Work — Jack [Surname]',
  description: 'A short description of this page.'
})
```

## Content approach

- Case study content lives in `content/work/` as markdown files with
  frontmatter: `title`, `year`, `tags`, `coverImage`, `summary`
- The `/work` list page is populated by querying this content — never
  hardcoded
- Do not hardcode content that belongs in a content file

## Motion and animation

- Use Motion for Vue for all animation — import from `motion/vue`
- Do not use CSS keyframes, CSS transitions, or any other animation library
- Always use the shared `useReducedMotion` composable to gate animations.
  Never write the `prefers-reduced-motion` conditional inline
- Micro-interactions should feel considered and purposeful — not decorative.
  Default to subtle unless the design calls for something expressive
- Page transitions and element-level enter/exit animations are in scope
- Use `<AnimatePresence>` for any element that conditionally mounts/unmounts
- Define animation variants as named consts outside the template, not inline

## Accessibility

- All animated elements must respect `prefers-reduced-motion` via the shared
  `useReducedMotion` composable
- All interactive elements must be keyboard accessible
- Use semantic HTML — never use a `div` where `button`, `nav`, `main`,
  `article`, or `section` is appropriate

## Vue and Nuxt conventions

- Use `useState` only for SSR-safe shared state that needs to survive
  hydration. For local component state, use `ref` or `reactive` directly.
- Do not mix layout approaches — always use `layouts/default.vue`,
  never inline layout structure in `app.vue`
- Nuxt auto-imports composables and components — do not manually import
  them unless there is a specific reason

## Code behaviour rules

- Do not refactor, rename, or restructure code outside the scope of the
  current request
- Do not install new dependencies without asking first
- Do not generate placeholder content or TODO comments — flag incomplete
  work explicitly instead
- Preserve existing component and file structure unless asked to change it
- When a request is ambiguous, ask one clarifying question before proceeding
- Use descriptive variable and function names — avoid abbreviations
- No magic numbers: timing values, breakpoints, and spacing constants must
  be named or referenced from a shared config
