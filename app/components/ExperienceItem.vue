<template>
  <ScrollReveal
    class="border-border flex flex-col gap-4 border-b py-9 sm:flex-row sm:gap-0"
  >
    <div class="flex min-w-40 sm:min-w-[180px] md:min-w-[288px] flex-col pr-9">
      <h4 class="text-base leading-6 font-medium tracking:[0.0075em]">
        {{ company }}
      </h4>
      <p
        class="text-sm leading-5 tracking-[0.01em] font-light text-muted pt-[3px]"
      >
        {{ role }}
      </p>
      <p class="text-sm leading-5 tracking-[0.01em] font-light text-muted pt-1">
        {{ dates }}
      </p>
    </div>
    <div
      class="max-w-[540px] text-base font-light leading-6 tracking:[0.0075em] text-pretty"
    >
      <slot />
    </div>
  </ScrollReveal>
</template>

<script setup lang="ts">
defineProps<{
  company: string;
  role: string;
  dates: string;
}>();
</script>
