<template>
  <component :is="rootTag" v-bind="rootAttrs" class="bg-background">
    <motion.div
      class="contents"
      :variants="passThroughVariants"
      initial="initial"
      while-hover="hover"
      while-press="press"
    >
      <div
        class="bg-neutral-800 overflow-hidden rounded-[clamp(9px,1.25vw,18px)] aspect-video min-w-0 max-h-fit"
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
        class="w-full flex flex-col justify-center min-h-full gap-4 xs:gap-7 pt-9 xs:pt-11"
        :variants="passThroughVariants"
      >
        <p class="fluid-heading text-balance text-foreground">
          {{ description }}
        </p>
        <motion.div
          class="flex min-h-10 items-center flex-row gap-4"
          :variants="passThroughVariants"
        >
          <h2
            class="text-xl xs:text-2xl leading-8 xs:leading-9 tracking-[0.014em] xs:tracking-[0.005em] font-light text-foreground"
          >
            {{ title }}
          </h2>

          <motion.div :variants="iconVariants">
            <arrow-right
              :size="24"
              :stroke-width="1.5"
              absolute-stroke-width
              class="text-foreground"
            />
          </motion.div>
        </motion.div>

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
    ...(props.openInNewTab && {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  };
});

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

const iconVariants = computed(() => ({
  initial: {
    opacity: props.href && !prefersReduced.value ? 0 : props.href ? 1 : 0,
    x: props.href && !prefersReduced.value ? -8 : 0,
  },
  hover: {
    opacity: props.href ? 1 : 0,
    x: 0,
    transition: { type: "spring", stiffness: 400, damping: 25 } as const,
  },
  press: {
    opacity: props.href ? 1 : 0,
    x: 0,
  },
}));
</script>
