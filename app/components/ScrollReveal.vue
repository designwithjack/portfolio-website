<template>
  <Motion
    v-bind="$attrs"
    :as="props.as"
    :initial="scrollReveal.initial"
    :while-in-view="scrollReveal.whileInView"
    :in-view-options="scrollReveal.inViewOptions"
    :transition="scrollReveal.transition"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
import { useScrollReveal } from "~/composables/useScrollReveal";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{ as?: "div" | "h2" | "section" | "span" }>(),
  { as: "div" }
);

const { scrollReveal } = useScrollReveal();
</script>
