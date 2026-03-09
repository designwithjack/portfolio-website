<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <section
        class="xs:text-4xl xs:leading-11 max-w-2xl text-3xl leading-9 font-light text-balance"
      >
        <ScrollReveal>
          <h1 class="text-muted pb-3">Work</h1>
          <p>Professional projects and case studies.</p>
        </ScrollReveal>
      </section>

      <section class="mt-16 md:mt-20 flex flex-col gap-10 md:gap-14">
        <ScrollReveal>
          <ProjectCard
            image="/images/avatar.png"
            title="Example project"
            description="Example project"
            alt="Example work project"
            :image-left="true"
          >
            <p class="text-muted text-sm text-pretty">
              Professional project description. Add more ProjectCards with any
              structure you like in the slot.
            </p>
            <span class="text-muted mt-1 block text-xs">2025</span>
          </ProjectCard>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard
            image="/images/avatar.png"
            title="Another case study"
            description="Another case study"
            alt="Another case study"
            :image-left="false"
          >
            <p class="text-muted text-sm text-pretty">
              Slot content is fully flexible — no array shape to follow.
            </p>
          </ProjectCard>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Work — Jack Hughes",
  description: "Professional projects and case studies.",
});
</script>
