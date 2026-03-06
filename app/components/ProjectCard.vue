<template>
  <motion.div while-hover="hover" while-press="press" :variants="cardVariants">
    <component
      :is="rootTag"
      v-bind="rootAttrs"
      class="flex flex-col md:flex-row bg-background gap-6 md:gap-10 xl:gap-16"
    >
      <div
        class="bg-neutral-800 overflow-hidden rounded-lg w-full md:w-1/2 aspect-video min-w-0"
        :class="imageLeft ? 'md:order-1' : 'md:order-2'"
      >
        <motion.img
          :src="image"
          :alt="alt"
          class="w-full object-cover"
          width="640"
          height="360"
          loading="lazy"
          :variants="imageVariants"
        />
      </div>
      <div
        class="w-full md:w-1/2 flex flex-col gap-2"
        :class="imageLeft ? 'md:order-2' : 'md:order-1'"
      >
        <h2 class="text-4xl font-light text-foreground">{{ description }}</h2>
        <slot />
      </div>
    </component>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

const props = withDefaults(
  defineProps<{
    image: string;
    description: string;
    href?: string;
    imageLeft?: boolean;
    alt?: string;
    openInNewTab?: boolean;
  }>(),
  { imageLeft: true, alt: "", openInNewTab: false },
);

const { prefersReduced } = usePrefersReducedMotion();

const NuxtLinkComponent = resolveComponent("NuxtLink");
const rootTag = computed(() => (props.href ? NuxtLinkComponent : "article"));
const rootAttrs = computed(() => {
  if (!props.href) return {};
  return {
    to: props.href,
    ...(props.openInNewTab && { target: "_blank" }),
  };
});

// Parent triggers gesture; variants flow down so only the image animates.
const cardVariants = {
  hover: {},
  press: {},
};

const imageVariants = computed(() => ({
  initial: { scale: 1 },
  hover: {
    scale: props.href && !prefersReduced.value ? 1.02 : 1,
  },
  press: {
    scale: props.href && !prefersReduced.value ? 0.98 : 1,
  },
}));
</script>
