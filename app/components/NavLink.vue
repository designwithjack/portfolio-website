<template>
  <NuxtLink
    :to="to"
    :class="[
      'text-base transition-colors leading-10 px-3',
      isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
    ]"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { useLink } from "vue-router";
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
  to: RouteLocationRaw;
  label: string;
}>();

// useLink mirrors RouterLink's internal matching logic.
// isActive: true on exact match AND child routes (e.g. /work active on /work/slug).
// Use isExactActive instead if you need only exact matches (e.g. sidebar items).
const { isActive } = useLink({
  to: computed(() => props.to),
});
</script>
