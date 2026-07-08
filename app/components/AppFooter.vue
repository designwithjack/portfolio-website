<template>
  <footer
    class="-z-1 surface-light bg-background fixed inset-x-0 bottom-0 flex h-2/3 flex-col justify-end pb-10"
  >
    <div
      class="page-container text-foreground items-center flex text-base tracking-[0.005em] gap-0 h-10"
    >
      <div
        class="size-10 sm:size-9 shrink-0 overflow-hidden rounded-full sm:my-0.5 mr-4 sm:mr-8"
      >
        <img
          src="/images/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="flex flex-1 bg-black opacity-[0.16] h-px mr-2 sm:mr-7"></div>
      <div class="flex gap-2 sm:gap-5 md:gap-7 flex-row items-center">
        <template v-for="(link, index) in footerLinks" :key="link.href">
          <motion.a
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex size-10 shrink-0 items-center justify-center sm:size-auto sm:justify-start sm:gap-3.5 sm:py-2"
            :while-hover="footerLinkWhileHover"
          >
            <img
              :src="link.icon"
              :alt="link.label"
              class="h-5 w-5 object-cover"
            />
            <span class="hidden sm:inline">{{ link.label }}</span>
          </motion.a>
          <div
            v-if="index < footerLinks.length - 1"
            class="w-6 sm:w-8 md:w-11 bg-black opacity-[0.16] h-px"
          ></div>
        </template>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

const FOOTER_LINK_HOVER_DURATION = 0.15;
const FOOTER_LINK_HOVER_OPACITY = 0.55;

const { prefersReduced } = usePrefersReducedMotion();

const footerLinks = [
  {
    href: "https://www.linkedin.com/in/jack-os",
    label: "LinkedIn",
    icon: "/images/linkedin.svg",
  },
  {
    href: "https://github.com/designwithjack",
    label: "GitHub",
    icon: "/images/github.svg",
  },
  {
    href: "mailto:hello@designwithjack.com?subject=Chat%20with%20Jack",
    label: "Email",
    icon: "/images/email.svg",
  },
] as const;

const footerLinkWhileHover = computed(() => ({
  opacity: FOOTER_LINK_HOVER_OPACITY,
  transition: {
    duration: prefersReduced.value ? 0.15 : FOOTER_LINK_HOVER_DURATION,
    ease: "easeOut",
  } as const,
}));
</script>
