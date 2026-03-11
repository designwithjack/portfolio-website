<template>
  <header
    class="app-header fixed inset-x-0 top-0 z-50 bg-background pt-9 lg:pt-11"
  >
    <div class="page-container flex h-12 items-center justify-between">
      <NuxtLink to="/" class="text-lg leading-10"> Jack Hughes </NuxtLink>
      <nav v-if="navLinks.length" class="flex items-center gap-3">
        <NavLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          :label="link.label"
        />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navLinks: { label: string; href: string }[] = [
  { label: "Work", href: "/work" },
  { label: "Play", href: "/play" },
];
</script>
