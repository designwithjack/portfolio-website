<template>
  <button
    :type="type"
    class="btn-press inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="variantClasses"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
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
      return "bg-background border border-border text-foreground hover:opacity-90";
    case "outline":
      return "border border-border text-foreground bg-transparent hover:bg-muted/20";
    case "ghost":
      return "text-foreground bg-transparent hover:bg-muted/20";
    case "secondary":
    default:
      return "bg-foreground text-background hover:opacity-90";
  }
});
</script>

<style scoped>
.btn-press {
  transition:
    opacity var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}
.btn-press:active {
  opacity: 0.9;
  transform: scale(0.98);
}
@media (prefers-reduced-motion: reduce) {
  .btn-press {
    transition-duration: 0s;
  }
  .btn-press:active {
    opacity: unset;
    transform: none;
  }
}
</style>
