<template>
  <div
    class="border-border flex flex-col gap-3 border-b py-9 sm:flex-row sm:gap-16 md:gap-20"
  >
    <div class="flex min-w-40 md:min-w-60 flex-col">
      <h4 class="text-lg leading-6 sm:pt-0.5">
        {{ company }}
      </h4>
      <p class="text-sm pt-1">
        {{ role }}
      </p>
      <p class="text-muted text-sm pt-1">
        {{ dates }}
      </p>
    </div>
    <div class="max-w-md text-base text-pretty">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  company: string;
  role: string;
  dates: string;
}>();
</script>
