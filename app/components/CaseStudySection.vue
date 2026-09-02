<template>
  <ScrollReveal class="flex justify-start md:justify-end my-14 xs:my-18">
    <div class="w-0" v-if="showChapter">
      <h4
        class="text-xs xs:text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted rotate-90 origin-bottom-left whitespace-nowrap absolute left-3 -top-1.25 xs:-top-1.25"
      >
        {{ chapter }}
      </h4>
    </div>
    <div
      class="flex flex-col gap-6 xs:gap-8 max-w-135 md:w-[60vw] ml-14 xs:ml-16 pr-3 md:pr-0"
    >
      <h2
        class="xs:text-4xl xs:leading-12 text-3xl leading-10 -tracking-[0.005em] font-light text-balance"
      >
        {{ heading }}
      </h2>
      <div
        class="text-base leading-6 xs:text-xl xs:leading-8 font-light tracking-[0.014em] text-pretty flex flex-col gap-6 xs:gap-8"
      >
        <slot />
      </div>
    </div>
  </ScrollReveal>
  <ScrollReveal v-if="showMedia">
    <div class="bg-[#1C1C1C] w-full h-auto mt-14 xs:mt-18 overflow-hidden">
      <motion.img :src="image" width="100%" height="100%" loading="lazy" />
    </div>
  </ScrollReveal>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

withDefaults(
  defineProps<{
    heading: string;
    chapter?: string;
    showMedia?: boolean;
    showChapter?: boolean;
    image?: string;
  }>(),
  {
    showMedia: true,
    showChapter: false,
  },
);
</script>
