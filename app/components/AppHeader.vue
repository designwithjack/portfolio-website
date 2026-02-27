<template>
  <div class="fixed top-0 right-0 left-0 z-50">
    <header class="bg-background pt-10">
      <div class="page-container flex h-12 items-center justify-between">
        <NuxtLink to="/" class="text-lg"> Jack Hughes </NuxtLink>
        <nav class="flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-muted hover:text-foreground text-base transition-colors"
            active-class="text-foreground"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>
    <!-- Gradient fade: absolutely positioned so it overlays (not pushes) content below -->
    <div
      aria-hidden="true"
      class="from-background pointer-events-none absolute inset-x-0 top-full h-44 bg-linear-to-b to-transparent"
    />
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Play', href: '/play' },
  { label: 'About', href: '/about' },
]
</script>
