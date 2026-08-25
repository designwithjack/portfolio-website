<template>
  <ScrollReveal v-if="showMedia">
    <div
      class="aspect-video bg-[#1C1C1C] w-full mt-14 xs:mt-18 overflow-hidden rounded-[clamp(9px,1.25vw,18px)]"
    ></div>
  </ScrollReveal>
  <ScrollReveal class="flex justify-start md:justify-end my-14 xs:my-18">
    <div class="w-0" v-if="showChapter">
      <h4
        class="text-xs xs:text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted rotate-90 origin-bottom-left whitespace-nowrap absolute left-3 -top-1.25 xs:-top-1.25"
      >
        {{ chapter }}
      </h4>
    </div>
    <div
      class="flex flex-col gap-6 xs:gap-8 max-w-135 md:w-[60vw] pl-14 xs:pl-16"
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
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    heading: string;
    chapter?: string;
    showMedia?: boolean;
    showChapter?: boolean;
  }>(),
  {
    showMedia: true,
    showChapter: false,
  },
);
</script>
