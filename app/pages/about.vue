<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <header class="max-w-2xl">
        <h1
          v-motion="staggerConfig(0)"
          class="xs:text-4xl xs:leading-11 text-3xl leading-9 font-light text-balance"
        >
          About
        </h1>
        <p
          v-motion="staggerConfig(1)"
          class="text-muted mt-4 text-base text-pretty"
        >
          Hello, I'm Jack — a product designer who loves transforming complex
          problems into simple, user-friendly experiences. Naturally curious and
          with a keen eye for detail, I work with teams to craft thoughtful and
          refined interfaces.
        </p>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About — Jack Hughes",
});
const { staggerConfig } = useStaggerMotion();
</script>
