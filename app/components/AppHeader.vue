<template>
  <header
    class="app-header fixed inset-x-0 top-0 z-50 bg-background pt-9 lg:pt-11"
  >
    <div class="page-container flex h-12 items-center justify-between">
      <NuxtLink to="/" class="text-lg"> Jack Hughes </NuxtLink>
      <nav v-if="navLinks.length" class="flex items-center gap-8">
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
</template>

<script setup lang="ts">
// Restore when /work, /play, /about pages exist
const navLinks: { label: string; href: string }[] = [];
</script>
