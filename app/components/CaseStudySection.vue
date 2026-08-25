<template>
  <ScrollReveal v-if="showMedia">
    <div
      class="aspect-video bg-[#1C1C1C] w-full mt-18 overflow-hidden rounded-[clamp(9px,1.25vw,18px)]"
    ></div>
  </ScrollReveal>
  <ScrollReveal class="flex justify-start md:justify-end my-18">
    <div class="flex flex-col gap-8 max-w-135 md:w-[60vw]">
      <h2
        class="xs:text-4xl xs:leading-12 text-3xl leading-11 -tracking-[0.005em] font-light text-balance"
      >
        {{ heading }}
      </h2>
      <div
        class="text-base leading-6 xs:text-xl xs:leading-8 font-light tracking-[0.014em] text-pretty flex flex-col gap-8"
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
    showMedia?: boolean;
  }>(),
  {
    showMedia: true,
  },
);
</script>
