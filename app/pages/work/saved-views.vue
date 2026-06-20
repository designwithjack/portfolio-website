<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <section
        class="xs:text-4xl xs:leading-11 text-xl leading-5 font-light text-balance"
      >
        <ScrollReveal>
          <h1 class="text-3xl pb-10">Saved Views</h1>
          <h2
            class="text-lg leading-16 xs:text-xl md:text-lg lg:text-6xl font-light text-foreground pb-24 max-w-2xl"
          >
            Save, organise and share viewer states of your 3D models
          </h2>
          <div class="flex flex-col lg:flex-row lg:w-full gap-7">
            <div class="flex flex-col gap-7 lg:w-1/2">
              <div class="flex xs:flex-row flex-col gap-2 xs:gap-6 text-base">
                <h4
                  class="w-20 shrink-0 text-xs font-medium tracking-[0.105em] uppercase text-muted leading-6 pt-px"
                >
                  Company
                </h4>

                <p>Speckle</p>
              </div>
              <div class="flex xs:flex-row flex-col gap-2 xs:gap-6 text-base">
                <h4
                  class="w-20 shrink-0 text-xs font-medium tracking-[0.105em] uppercase text-muted leading-6 pt-px"
                >
                  Team
                </h4>
                <div class="flex flex-col gap-2">
                  <p>Benjamin Ottensten — Product Lead</p>
                  <p>Fabiāns Geikins — Full-stack Developer</p>
                </div>
              </div>
            </div>
            <div
              class="flex xs:flex-row flex-col gap-3 xs:gap-6 text-base lg:w-1/2"
            >
              <h4
                class="w-[70px] shrink-0 text-xs font-medium tracking-[0.105em] uppercase text-muted leading-6 pt-px"
              >
                Skills
              </h4>
              <div
                class="flex flex-wrap gap-x-1.5 xs:gap-x-1 gap-y-2 xs:gap-y-1.5 h-fit -ml-1.5 xs:ml-0"
              >
                <tag label="User Research" />
                <tag label="Prototyping" />
                <tag label="Journey Mapping" />
                <tag label="Interface Design" />
                <tag label="Frontend Development" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Play — Jack Hughes",
  description: "Personal and experimental projects.",
  ogTitle: "Play — Jack Hughes",
  ogDescription: "Personal and experimental projects.",
  ogImage: "/images/og-default.png",
  twitterCard: "summary_large_image",
});
</script>
