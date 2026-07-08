<template>
  <component
    :is="rootTag"
    :type="rootTag === 'button' ? type : undefined"
    :href="rootTag === 'a' ? href : undefined"
    class="inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="[variantClasses, sizeClasses]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "md" | "lg" | "xl";

interface Props {
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "secondary",
  type: "button",
  size: "md",
});

const rootTag = computed(() => (props.href ? "a" : "button"));

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-white text-black hover:bg-neutral-200";
    case "outline":
      return "border border-slate-600 text-slate-100 bg-transparent hover:bg-slate-900/40";
    case "ghost":
      return "text-slate-100 bg-transparent hover:bg-slate-900/40";
    case "secondary":
    default:
      return "text-white bg-neutral-800 hover:bg-neutral-700";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "xl":
      return "px-6 h-12 text-base leading-none";
    case "lg":
      return "px-4 h-10 text-base leading-none";
    case "md":
    default:
      return "px-4 py-2 text-sm";
  }
});
</script>
