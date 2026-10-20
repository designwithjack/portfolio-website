<template>
  <div
    class="text-base rounded-full leading-none h-6 flex items-center w-fit gap-3"
  >
    {{ label }}
    <div v-if="showDot" class="bg-neutral-600 rounded-full size-1.5"></div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    showDot?: boolean;
  }>(),
  { showDot: true },
);
</script>
