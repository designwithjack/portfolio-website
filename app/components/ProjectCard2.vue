<template>
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    class="grid grid-cols-1 md:grid-cols-10 bg-background gap-6 md:gap-12 lg:gap-14 xl:gap-24"
  >
    <!-- initial="initial" seeds the variant name for the whole tree.
         while-hover/while-press then switch that name, and all child
         motion elements with matching variant keys respond automatically. -->
    <motion.div
      class="contents"
      :variants="passThroughVariants"
      initial="initial"
      while-hover="hover"
      while-press="press"
    >
      <div
        class="bg-neutral-800 overflow-hidden rounded-[10px] md:col-span-6 aspect-video min-w-0 max-h-fit"
        :class="imageLeft ? 'md:order-1 ' : 'md:order-2 '"
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
      <motion.div
        class="w-full md:col-span-4 flex flex-col justify-center min-h-full gap-1 lg:gap-2"
        :class="imageLeft ? 'md:order-2 ' : 'md:order-1 '"
        :variants="passThroughVariants"
      >
        <motion.div
          class="flex h-10 items-center flex-row gap-4"
          :variants="passThroughVariants"
        >
          <h2
            class="text-lg xs:text-xl md:text-lg lg:text-xl font-light text-foreground"
          >
            {{ title }}
          </h2>
          <!-- No local initial= override here — let the parent's variant
               propagation control state. Setting initial directly would
               isolate this node from the parent hover signal. -->
          <motion.div :variants="iconVariants">
            <arrow-right
              :size="24"
              :stroke-width="1.5"
              absolute-stroke-width
              class="text-foreground"
            />
          </motion.div>
        </motion.div>
        <p
          class="text-2xl xs:text-3xl md:text-[28px] lg:text-4xl xs:leading-10 md:leading-9 lg:leading-11 text-balance font-light text-foreground pb-2 lg:pb-4 xl:pb-5"
        >
          {{ description }}
        </p>
        <slot />
      </motion.div>
    </motion.div>
  </component>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { motion } from "motion-v";

const props = withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    href?: string;
    imageLeft?: boolean;
    alt?: string;
    openInNewTab?: boolean;
  }>(),
  { imageLeft: true, alt: "", openInNewTab: false },
);

const { prefersReduced } = usePrefersReducedMotion();

// Passthrough variants allow hover/press state to propagate down the tree.
// The "initial" key must be present here too — if an intermediate motion node
// is missing a variant key, it breaks the propagation chain to its children.
const passThroughVariants = { initial: {}, hover: {}, press: {} };

const NuxtLinkComponent = resolveComponent("NuxtLink");
const rootTag = computed(() => (props.href ? NuxtLinkComponent : "article"));
const rootAttrs = computed(() => {
  if (!props.href) return {};
  return {
    to: props.href,
    ...(props.openInNewTab && { target: "_blank" }),
  };
});

// Image scales up on hover, down on press
// The "stiffness" value for spring transitions in Motion for Vue (same as framer-motion) typically ranges from ~50 (very soft, pronounced bounce) to ~1000 (very stiff, almost no bounce).
// A low stiffness (50–150) with moderate damping produces a very subtle, gentle bounce.
// Here, for a subtle feel, we use stiffness: 90 and damping: 20.
const imageVariants = computed(() => ({
  initial: { scale: 1.02 },
  hover: {
    scale: props.href && !prefersReduced.value ? 1.04 : 1.02,
    transition: { type: "spring", stiffness: 350, damping: 20 } as const,
  },
  press: {
    scale: props.href && !prefersReduced.value ? 1 : 1.02,
    transition: { type: "spring", stiffness: 350, damping: 20 } as const,
  },
}));

// Icon visibility and animation depends on three cases:
//   1. No href     → always hidden (opacity 0), no animation
//   2. href + motion enabled → hidden at rest, slides in on hover
//   3. href + reduced motion → always visible, no positional offset
const iconVariants = computed(() => ({
  initial: {
    // Case 2: start hidden and offset left, ready to animate in
    // Case 3: start visible, no offset (will not animate)
    // Case 1: start hidden, stays hidden
    opacity: props.href && !prefersReduced.value ? 0 : props.href ? 1 : 0,
    x: props.href && !prefersReduced.value ? -8 : 0,
  },
  hover: {
    // Reveal the icon only if there's a link — otherwise keep it invisible
    opacity: props.href ? 1 : 0,
    x: 0,
    transition: { type: "spring", stiffness: 400, damping: 25 } as const,
  },
  press: {
    // Hold the revealed state during press (same as hover)
    opacity: props.href ? 1 : 0,
    x: 0,
  },
}));
</script>
