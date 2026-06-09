<template>
  <div
    class="text-base bg-neutral-800 rounded-full pl-[11px] pr-3 leading-none h-6 flex items-center w-fit"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
