<template>
  <div class="page-content">
    <div
      class="page-container pt-[clamp(128px,50vw,288px)] pb-[clamp(0px,calc(10vw-72px),72px)]"
    >
      <section>
        <ScrollReveal>
          <h1 class="pb-9 heading-2xl">Play</h1>
          <p
            class="text-2xl leading-9 tracking-[0.005em] max-w-[720px] text-pretty font-light"
          >
            If you’re wondering what makes me tick, you’ll find some experiments
            with clocks and a budding appetite for the botanical. Expressing my
            creative spark by coding playful side projects that feed my
            curiosity for developing new skills and discovering new things.
          </p>
        </ScrollReveal>
      </section>

      <section class="pt-[clamp(72px,10vw,108px)] flex flex-col">
        <ScrollReveal>
          <ProjectCard
            image="/images/projects/the-colour-clock.png"
            title="The Colour Clock"
            description="Experimental clock that transforms time into the hexadecimal colour system"
            href="http://www.thecolourclock.com"
            alt="Screenshot of The Colour Clock"
            :image-left="true"
            open-in-new-tab
          >
          </ProjectCard>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard
            image="/images/projects/rototime.png"
            title="R O T O T I M E"
            description="Mixing digital display with analogue motion in homage to the Nixon Rotolog"
            href="https://rototime.superhi.hosting"
            alt="Screenshot of R O T O T I M E"
            :image-left="false"
            open-in-new-tab
          >
          </ProjectCard>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard
            image="/images/projects/edible-flower-alphabet.png"
            title="Edible A–Z of Flowers"
            description="Recipes and growing tips to showcase a beautifully illustrated alphabet of edible flowers"
            alt="Screenshot of Edible A–Z of Flowers"
            :image-left="true"
            href="https://www.edibleflowersalphabet.com/"
            open-in-new-tab
          >
          </ProjectCard>
        </ScrollReveal>

        <ScrollReveal>
          <ProjectCard
            image="/images/projects/length-of-a-minute.png"
            title="Length of a minute"
            description="For when you feel like time is dragging on, watch the minutes get longer by the second"
            href="https://lengthofaminute.superhi.hosting/"
            alt="Screenshots from Length of a minute"
            :image-left="false"
            open-in-new-tab
          >
          </ProjectCard>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Jack Hughes — Play",
  description: "Personal and experimental projects.",
  ogTitle: "Jack Hughes — Play",
  ogDescription: "Personal and experimental projects.",
  ogImage: "/images/og-default.png",
  twitterCard: "summary_large_image",
});
</script>
