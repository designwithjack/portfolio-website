<template>
  <header
    class="app-header fixed inset-x-0 top-0 z-50 bg-background pt-9 lg:pt-24"
  >
    <div class="page-container flex h-12 items-center justify-between">
      <NuxtLink to="/" class="flex gap-6 items-center">
        <img
          src="/images/logo-white.svg"
          alt="Logo"
          class="h-10 w-10 object-cover"
        />
        <span
          class="hidden xs:block text-xl font-light leading-8 tracking-[0.005em]"
          >Jack Hughes</span
        >
      </NuxtLink>
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
