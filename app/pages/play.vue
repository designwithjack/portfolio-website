<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <section
        class="xs:text-4xl xs:leading-11 max-w-2xl text-3xl leading-9 font-light text-balance"
      >
        <ScrollReveal>
          <h1 class="text-muted pb-3">Play</h1>
          <p>Personal and experimental projects.</p>
        </ScrollReveal>
      </section>

      <section class="mt-16 md:mt-20 flex flex-col gap-10 md:gap-14">
        <ScrollReveal>
          <ProjectCard
            image="/images/projects/test-img.png"
            description="Example project"
            href="http://www.thecolourclock.com"
            alt="Example project screenshot"
            :image-left="true"
            open-in-new-tab
          >
            <p class="text-muted text-sm text-pretty">
              Personal or experimental project. Add more ProjectCards with any
              structure you like in the slot.
            </p>
            <span class="text-muted mt-1 block text-xs">2025</span>
          </ProjectCard>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard
            image="/images/avatar.png"
            description="Another project"
            alt="Second project"
            :image-left="false"
          >
            <p class="text-muted text-sm text-pretty">
              No link on this one — use the default slot for any content.
            </p>
          </ProjectCard>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Play — Jack Hughes",
  description: "Personal and experimental projects.",
});
</script>
