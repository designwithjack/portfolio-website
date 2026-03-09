<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <section
        class="xs:text-4xl xs:leading-11 max-w-2xl text-3xl leading-9 font-light text-balance"
      >
        <ScrollReveal>
          <h1 class="text-muted pb-8">Play</h1>
          <p class="text-2xl max-w-[50ch] pr-3 mb-5">
            If you’re wondering what makes me tick, you’ll find some experiments
            with clocks and a budding appetite for the botanical. Expressing my
            creative spark by coding playful side projects that feed my
            curiosity for developing new skills and discovering new things.
          </p>
        </ScrollReveal>
      </section>

      <section class="pt-[6vw] flex flex-col gap-20 md:gap-32">
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/the-colour-clock.png"
            title="The Colour Clock"
            description="Experimental clock that transforms time into the hexadecimal colour system"
            href="http://www.thecolourclock.com"
            alt="Screenshot of The Colour Clock"
            :image-left="true"
            open-in-new-tab
          >
          </ProjectCard2>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/rototime.png"
            title="R O T O T I M E"
            description="Mixing digital display with analogue motion in homage to the Nixon Rotolog"
            href="https://rototime.designwithjack.com/"
            alt="Screenshot of R O T O T I M E"
            :image-left="false"
            open-in-new-tab
          >
          </ProjectCard2>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/edible-flower-alphabet.png"
            title="Edible A–Z of Flowers"
            description="Recipes and growing tips to showcase a beautifully illustrated alphabet of edible flowers"
            alt="Screenshot of Edible A–Z of Flowers"
            :image-left="true"
            href="https://www.edibleflowersalphabet.com/"
            open-in-new-tab
          >
          </ProjectCard2>
        </ScrollReveal>

        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/length-of-a-minute.png"
            title="Length of a minute"
            description="For when you feel like time is dragging on, watch the minutes get longer by the second"
            href="https://lengthofaminute.superhi.hosting/"
            alt="Screenshots from Length of a minute"
            :image-left="false"
            open-in-new-tab
          >
          </ProjectCard2>
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
