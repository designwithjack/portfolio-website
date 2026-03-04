# Implementation Plan: Subtle Motion & Micro-Interactions

**Source:** [2026-03-04-subtle-motion-brainstorm.md](../brainstorms/2026-03-04-subtle-motion-brainstorm.md)

## Overview

Implement hybrid motion: **CSS** for buttons and nav; **@vueuse/motion** for scroll-in (ProjectItem) and page-load stagger. Honor `prefers-reduced-motion` everywhere. Use consistent timing (e.g. 250ms, ease-out) and “clearly there but quiet” intensity.

---

## 1. Add @vueuse/motion and reduced-motion wiring

- **Install:** `@vueuse/motion` (and optionally `@vueuse/core` if not already present for `usePreferredReducedMotion`).
- **Nuxt:** Add module `@vueuse/motion/nuxt` in `nuxt.config.ts`.
- **Config:** In `nuxt.config.ts` or app plugin, configure motion so animations are disabled or minimal when `prefers-reduced-motion: reduce`. Options:
  - Use VueUse’s `usePreferredReducedMotion()` and pass a reduced-motion flag into a motion plugin that sets default `initial`/`visible` to no-op or instant when reduced; or
  - Use CSS `@media (prefers-reduced-motion: reduce)` to override animation duration to 0 where possible (motion lib may still need a runtime check for in-view/scroll-driven behavior).
- **Shared tokens:** Define in one place (e.g. app config or CSS vars): duration ~250ms, easing ease-out (e.g. `cubic-bezier(0.2, 0.8, 0.2, 1)`), stagger delay ~80–100ms. Use these for both CSS and motion presets.

**Files:** `package.json`, `nuxt.config.ts`, optionally `app/plugins/motion.client.ts` or similar.

---

## 2. ProjectItem — scroll-in fade + unblur

- **Behavior:** When the component is ~20–30% in view (or crossing into lower half of viewport), animate from slightly transparent + blurred to opaque + sharp.
- **Implementation:** Use @vueuse/motion’s in-view directive/preset (e.g. `v-motion` with `:initial` / `:visible` and an intersection threshold ~0.2–0.3). Initial: `opacity: 0.6–0.8`, `filter: blur(4–6px)`. Visible: `opacity: 1`, `filter: blur(0)`. Duration/easing from shared tokens. Disable or skip animation when `prefers-reduced-motion` is set.
- **Scope:** No change to props or slots; keep component usable as-is on Play and future Work list.

**Files:** `app/components/ProjectItem.vue`.

---

## 3. Buttons — press feedback (opacity + scale)

- **Behavior:** On press (active state), slight opacity dip and scale to ~0.98. Release returns to normal. CSS-only.
- **Implementation:** Add `active:opacity-90 active:scale-[0.98]` (or equivalent) and `transition` for `transform` and `opacity` with shared duration. Use `@media (prefers-reduced-motion: reduce)` to set `transition-duration: 0s` and avoid scale/opacity change on active so there’s no perceived motion.
- **Scope:** Apply in `Button.vue` so all variants get the same feedback. Ensure focus styles remain visible and are not replaced by active state.

**Files:** `app/components/Button.vue`, possibly a shared utility class or CSS variable for transition if used elsewhere.

---

## 4. Nav slash — enter and exit motion

- **Behavior:** The active slash (/) should animate in when the link becomes active and animate out when navigating away (explicit enter and exit).
- **Current state:** `AppHeader.vue` uses `.nav-slash` with opacity and margin transition; `.nav-link-exact-active .nav-slash` shows the slash. The slash is toggled by Vue Router’s `exact-active-class`, so enter/exit are already triggered by class change; ensure both transitions are visible and use the same duration/easing.
- **Implementation:** Keep the slash; ensure transition applies when the class is removed (exit) as well as when added (enter). Use shared duration (e.g. 250ms) and ease-out. If the slash is currently only opacity/margin, consider a minimal transform (e.g. translateX or scale) for a clearer “enter/exit” feel, or keep opacity + margin and tune so exit is smooth. Add `@media (prefers-reduced-motion: reduce)` to disable or shorten the transition.
- **Scope:** Desktop and mobile overlay nav in `AppHeader.vue` (both use `.nav-slash`).

**Files:** `app/components/AppHeader.vue`.

---

## 5. Stagger fade-in on hero / first-load

- **Behavior:** Staggered fade-in for above-the-fold or key content on Home, Play, and About. “Clearly there but quiet” with consistent stagger delay (e.g. 80–100ms).
- **Pages and targets:**
  - **Home (`index.vue`):** Intro block (e.g. “Hello, I'm Jack” + paragraph) and first-load experience section (e.g. “Experience” heading + first 2–3 `ExperienceItem`s). Wrap in a container with `v-motion` and stagger children, or apply motion to each element with staggered delay.
  - **Play (`play.vue`):** Header (h1 + description) and optionally the first 1–2 project items (if desired; otherwise only header stagger to avoid overlap with scroll-in).
  - **About (`about.vue`):** Header block (h1 + intro paragraph).
- **Implementation:** Use @vueuse/motion stagger (e.g. `v-motion` with `:delay` based on index, or a preset that supports stagger). Initial: opacity 0 (and optionally a small translateY). Visible: opacity 1. Respect reduced-motion (no stagger or instant show).
- **Note:** Index already has a `<Transition>` for the “Show more” experience block; leave that as-is and add stagger only to the initial view (first section + first few items).

**Files:** `app/pages/index.vue`, `app/pages/play.vue`, `app/pages/about.vue`.

---

## 6. Verification and polish

- **Reduced motion:** Test with “Reduce motion” enabled in OS/browser; confirm no or minimal animation (instant or no transition).
- **Consistency:** Confirm durations and easing match across ProjectItem, buttons, nav, and stagger.
- **Performance:** Ensure only `transform` and `opacity` (and `filter` for blur) are animated where possible; avoid layout thrashing.

---

## Order of implementation

- [x] 1. Add @vueuse/motion, Nuxt module, and reduced-motion handling + shared tokens.
- [x] 2. Button press (CSS) and nav slash enter/exit (CSS) — no dependency on motion lib.
- [x] 3. ProjectItem scroll-in (motion lib).
- [x] 4. Stagger on Home, then Play, then About.
- [x] 5. Cross-check reduced-motion and timing everywhere (run after `npm install` + build).

---

## Summary of file changes

| File | Change |
|------|--------|
| `package.json` | Add `@vueuse/motion` (and `@vueuse/core` if needed) |
| `nuxt.config.ts` | Add motion module; optional motion/reduced-motion config |
| `app/plugins/*.ts` (optional) | Reduced-motion detection and default presets |
| `app/components/Button.vue` | Active state opacity + scale; reduced-motion override |
| `app/components/AppHeader.vue` | Nav slash enter/exit transition; reduced-motion override |
| `app/components/ProjectItem.vue` | In-view fade + unblur via @vueuse/motion; respect reduced-motion |
| `app/pages/index.vue` | Stagger fade-in for intro + experience section |
| `app/pages/play.vue` | Stagger fade-in for header (and optionally first items) |
| `app/pages/about.vue` | Stagger fade-in for header block |
