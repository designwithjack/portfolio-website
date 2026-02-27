<template>
  <button
    :type="type"
    class="inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="variantClasses"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface Props {
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "secondary",
  type: "button",
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-slate-100 text-slate-900 hover:bg-slate-200";
    case "outline":
      return "border border-slate-600 text-slate-100 bg-transparent hover:bg-slate-900/40";
    case "ghost":
      return "text-slate-100 bg-transparent hover:bg-slate-900/40";
    case "secondary":
    default:
      return "text-white bg-neutral-700/70 hover:bg-neutral-700";
  }
});
</script>
