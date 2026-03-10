<template>
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    class="flex flex-col md:flex-row bg-background"
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
        class="bg-neutral-800 overflow-hidden rounded-[10px] w-full md:w-1/2 aspect-video min-w-0 max-h-fit"
        :class="
          imageLeft
            ? 'md:order-1 md:mr-10 xl:mr-16'
            : 'md:order-2 md:ml-10 xl:ml-16'
        "
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
        class="w-full md:w-1/2 flex flex-col justify-center min-h-full gap-1 lg:gap-2 pt-8 md:pt-0"
        :class="
          imageLeft
            ? 'md:order-2 md:pl-2 lg:pl-6 xl:pl-8'
            : 'md:order-1 md:pr-2 lg:pr-6 xl:pr-8'
        "
        :variants="passThroughVariants"
      >
        <motion.div
          class="flex h-10 items-center flex-row gap-4"
          :variants="passThroughVariants"
        >
          <h2 class="text-lg xs:text-xl font-light text-foreground">
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
          class="text-2xl xs:text-3xl lg:text-4xl leading-10 lg:leading-11 text-balance font-light text-foreground pb-2 lg:pb-4 xl:pb-5"
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
const imageVariants = computed(() => ({
  initial: { scale: 1.02 },
  hover: {
    scale: props.href && !prefersReduced.value ? 1.04 : 1.02,
  },
  press: {
    scale: props.href && !prefersReduced.value ? 1 : 1.02,
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
