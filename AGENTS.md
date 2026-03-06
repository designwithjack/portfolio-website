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
- `lucide-vue-next` for icons — always use this, never suggest an alternative
- `@nuxt/content` for case study pages (markdown + frontmatter)
- Motion for Vue (`motion-v`) for all animations and transitions
- No UI component library

## Package manager

This project uses **pnpm exclusively**. Never generate `npm install` or
`yarn add` commands. Always use:

- `pnpm add <package>` for dependencies
- `pnpm add -D <package>` for dev dependencies
- `pnpm remove <package>` to uninstall

Do not install new dependencies without asking first.

## Site structure

- `/` — Work history landing page. Roles listed chronologically, truncated
  after the most recent entries. Remaining roles revealed via an animated
  'View more' interaction using Motion for Vue. Not a printable CV.
- `/work` — List of professional projects. Supports dynamic case study
  drill-down at `/work/[slug]` — build the list page with this in mind.
  Case study content lives in `content/work/[slug].md`, queried via
  `@nuxt/content`.
- `/play` — Personal/experimental projects. All links open in a new tab
  with `target="_blank"` and `rel="noopener noreferrer"`.
- `/about` — Personal bio and context.

## File structure

- `pages/` for routes
- `layouts/` for shared structure — use `layouts/default.vue` for nav/footer.
  Do not use `app.vue` directly for layout.
- `components/` for reusable UI — PascalCase filenames
- `composables/` for shared logic — camelCase, prefixed with `use`
- `content/work/` for case study markdown files
- `assets/` for fonts and static images

## Content approach

- Case study content lives in `content/work/` as markdown with frontmatter:
  `title`, `year`, `tags`, `coverImage`, `summary`
- The `/work` list page is populated by querying this content — never hardcoded
- Do not hardcode content that belongs in a content file

## Motion and animation

- Use Motion for Vue (`motion-v`) for all animation — never CSS keyframes,
  CSS transitions, or any other animation library
- Always use the shared `usePrefersReducedMotion` composable to gate animations.
  Never write the `prefers-reduced-motion` conditional inline
- Micro-interactions should feel considered and purposeful — default to subtle
  unless the design calls for something expressive
- Use `<AnimatePresence>` for any element that conditionally mounts/unmounts
- Define animation variants as named consts outside the template, not inline
- Refer to `motion.mdc` for implementation patterns

## Accessibility

- All animated elements must respect `prefers-reduced-motion` via the shared
  `usePrefersReducedMotion` composable
- All interactive elements must be keyboard accessible
- Use semantic HTML — never use a `div` where `button`, `nav`, `main`,
  `article`, or `section` is appropriate

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
