<template>
  <div class="page-content">
    <div class="page-container pt-[clamp(180px,20vw,244px)] pb-24">
      <section class="text-base leading-6 tracking-[0.0075em] font-light">
        <ScrollReveal>
          <div class="pl-1 flex items-center gap-3 h-7 mb-10">
            <div class="size-2 bg-muted rounded-full"></div>
            <p
              class="mt-0.5 text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted"
            >
              Case Study — Saved Views
            </p>
          </div>
          <h1 class="fluid-display">
            Save, organise and share viewer states of your 3D models
          </h1>
        </ScrollReveal>
      </section>
      <section class="pt-[clamp(44px,5vw,72px)]">
        <ScrollReveal>
          <div
            class="rounded-[clamp(2px,0.5vw,6.4px)] overflow-hidden my-3 sm:my-6 md:my-8"
          >
            <img
              loading="lazy"
              src="/images/projects/speckle/speckle-header.jpg"
              alt="Saved Views Screenshot"
              class="w-full h-auto"
            />
          </div>
        </ScrollReveal>
      </section>
      <section
        class="text-base leading-6 tracking-[0.0075em] font-light pt-[clamp(44px,5vw,64px)]"
      >
        <ScrollReveal>
          <div class="grid sm:grid-cols-32 grid-cols-1">
            <div class="sm:col-span-15 col-span-1 pb-7 sm:pb-0">
              <h2 class="font-light text-2xl leading-9 tracking-[0.005em] pb-6">
                Info
              </h2>
              <div
                class="flex flex-col xs:flex-row sm:flex-col lg:flex-row gap-2 xs:gap-6 sm:gap-2 lg:gap-6 pb-6"
              >
                <h4
                  class="w-30 lg:w-21 xl:w-30 shrink-0 text-xs font-medium tracking-[0.11em] uppercase text-muted leading-6"
                >
                  Company
                </h4>

                <p>Speckle</p>
              </div>
              <div
                class="flex flex-col xs:flex-row sm:flex-col lg:flex-row gap-2 xs:gap-6 sm:gap-2 lg:gap-6 pb-6"
              >
                <h4
                  class="w-30 lg:w-21 xl:w-30 shrink-0 text-xs font-medium tracking-[0.11em] uppercase text-muted leading-6"
                >
                  Team
                </h4>
                <div class="flex flex-col gap-2">
                  <p>Benjamin Ottensten — Product Lead</p>
                  <p>Fabiāns Geikins — Full-stack Developer</p>
                </div>
              </div>
              <div
                class="flex flex-col xs:flex-row sm:flex-col lg:flex-row gap-2 xs:gap-6 sm:gap-2 lg:gap-6 pb-6"
              >
                <h4
                  class="w-30 lg:w-21 xl:w-30 shrink-0 text-xs font-medium tracking-[0.11em] uppercase text-muted leading-6"
                >
                  Skills
                </h4>
                <div class="flex flex-wrap gap-x-3 gap-y-2 xs:gap-y-1.5 h-fit">
                  <tag label="User Research" />
                  <tag label="Journey Mapping" />
                  <tag label="Prototyping" />

                  <tag label="Interface Design" />
                  <tag label="Frontend Development" :show-dot="false" />
                </div>
              </div>
            </div>
            <div class="sm:col-start-18 sm:col-span-15 col-span-1">
              <h2 class="font-light text-2xl leading-9 tracking-[0.005em] pb-6">
                Overview
              </h2>
              <p>
                Working end to end, leading the design, then building alongside
                the engineer to make sure the shipped product matched the
                intended experience.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Jack Hughes — Case Study — Saved Views",
  description: "Save, organise and share viewer states of your 3D models",
  ogTitle: "Jack Hughes — Case Study — Saved Views",
  ogDescription: "Save, organise and share viewer states of your 3D models",
  ogImage: "/images/og-default.png",
  twitterCard: "summary_large_image",
});
</script>
