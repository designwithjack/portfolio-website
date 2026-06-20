<template>
  <header
    class="app-header fixed inset-x-0 top-0 z-50 bg-background pt-[clamp(40px,calc(10vw*0.8),96px)]"
  >
    <div class="page-container flex h-10 items-center justify-between">
      <NuxtLink to="/" class="flex gap-[clamp(20px,5vw,32px)] items-center">
        <img
          src="/images/logo-white.svg"
          alt="Logo"
          class="h-10 w-10 object-cover"
        />
        <span class="hidden xs:block text-lg md:text-xl font-light leading-none"
          >Jack Hughes</span
        >
      </NuxtLink>
      <nav class="flex items-center gap-1.5">
        <div
          class="flex items-center gap-1.5"
          v-for="(link, index) in navLinks"
          :key="link.href"
        >
          <div v-if="index > 0" class="w-4 h-px bg-white opacity-40" />
          <NavLink :to="link.href" :label="link.label" />
        </div>
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
