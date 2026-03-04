<template>
  <header
    class="app-header fixed inset-x-0 top-0 z-50 bg-background pt-9 lg:pt-11"
  >
    <div class="page-container flex h-12 items-center justify-between">
      <NuxtLink to="/" class="text-lg"> Jack Hughes </NuxtLink>

      <!-- Desktop nav: visible from sm up -->
      <nav class="hidden items-center gap-8 sm:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="nav-link text-muted hover:text-foreground relative text-base transition-colors"
          exact-active-class="text-foreground nav-link-exact-active"
        >
          <span class="nav-slash" aria-hidden="true">/</span>
          <span class="nav-label">{{ link.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Mobile: hamburger button -->
      <button
        ref="hamburgerRef"
        type="button"
        class="sm:hidden inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-foreground"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        :aria-controls="overlayId"
        @click="menuOpen = !menuOpen"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile overlay: full-screen blur -->
    <Teleport to="body">
      <div
        :id="overlayId"
        class="nav-overlay fixed inset-0 z-60 sm:hidden"
        :class="{ 'nav-overlay-visible': menuOpen }"
        :aria-hidden="!menuOpen"
      >
        <div
          class="nav-overlay-backdrop absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-200"
          :class="menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
          @click="menuOpen = false"
        />
        <nav
          class="nav-overlay-content relative flex flex-col items-center justify-center gap-8 px-6 py-24 text-center"
          :class="menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="nav-link nav-overlay-link text-foreground text-2xl transition-colors hover:opacity-80"
            exact-active-class="nav-link-exact-active"
            @click="menuOpen = false"
          >
            <span class="nav-slash" aria-hidden="true">/</span>
            <span class="nav-label">{{ link.label }}</span>
          </NuxtLink>
        </nav>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const { navLinks } = useSiteLinks();
const overlayId = useId();

const menuOpen = ref(false);
const hamburgerRef = ref<HTMLButtonElement | null>(null);

function closeOnEscape(e: KeyboardEvent) {
  if (e.key === "Escape") menuOpen.value = false;
}

watch(menuOpen, (open) => {
  if (typeof document === "undefined") return;
  document.body.style.overflow = open ? "hidden" : "";
  if (open) document.addEventListener("keydown", closeOnEscape);
  else document.removeEventListener("keydown", closeOnEscape);
  if (!open) nextTick(() => {
    if (!menuOpen.value) hamburgerRef.value?.focus();
  });
});

onBeforeUnmount(() => {
  document.removeEventListener?.("keydown", closeOnEscape);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.nav-link {
  display: inline-flex;
  align-items: baseline;
}
.nav-slash {
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity var(--motion-duration) var(--motion-ease),
    margin var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
  margin-right: 0;
}
.nav-link-exact-active .nav-slash {
  opacity: 1;
  position: relative;
  margin-right: 12px;
  transform: translateX(0);
}
.nav-link-exact-active .nav-label {
  transition: margin var(--motion-duration) var(--motion-ease);
}
@media (prefers-reduced-motion: reduce) {
  .nav-slash,
  .nav-link-exact-active .nav-label {
    transition-duration: 0s;
  }
}

.nav-overlay {
  pointer-events: none;
}
.nav-overlay-visible {
  pointer-events: auto;
}

.nav-overlay-link {
  display: inline-flex;
  align-items: baseline;
}
</style>
