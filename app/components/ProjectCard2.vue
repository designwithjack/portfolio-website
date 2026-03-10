<template>
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    class="grid grid-cols-1 md:grid-cols-10 bg-background gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20"
  >
    <motion.div
      class="contents"
      :variants="passThroughVariants"
      initial="initial"
      while-hover="hover"
      while-press="press"
    >
      <div
        class="bg-neutral-800 overflow-hidden rounded-lg sm:rounded-xl md:col-span-6 aspect-video min-w-0 max-h-fit"
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
        class="w-full md:col-span-4 flex flex-col justify-center min-h-full gap-1 lg:gap-2 xl:gap-3"
        :class="imageLeft ? 'md:order-2 ' : 'md:order-1 '"
        :variants="passThroughVariants"
      >
        <motion.div
          class="flex min-h-10 items-center flex-row gap-4"
          :variants="passThroughVariants"
        >
          <h2
            class="text-lg leading-6 xs:text-xl md:text-lg lg:text-xl font-light text-foreground"
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
        <p
          class="text-3xl md:text-[28px] lg:text-4xl xl:text-[45px] leading-10 md:leading-9 lg:leading-11 xl:leading-[54px] xl:tracking-[-0.005em] text-balance text-foreground pb-2 lg:pb-5"
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
