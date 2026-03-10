<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <section
        class="xs:text-4xl xs:leading-11 max-w-2xl text-3xl leading-9 font-light text-balance"
      >
        <ScrollReveal>
          <h1 class="text-muted pb-8">Work</h1>
          <p class="text-2xl max-w-[50ch] pr-3 mb-8">
            Solving complex problems in technical domains is where I'm most at
            home, which makes B2B SaaS a natural fit. I care a lot about craft,
            though never at the expense of what users actually need or what the
            business is trying to achieve. If something feels considered, it
            probably was. The work here is from projects where I was the sole or
            lead designer.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="mailto:hello@designwithjack.com?subject=Chat%20with%20Jack"
          >
            Request case studies
          </Button>
        </ScrollReveal>
      </section>

      <section class="pt-[7vw] flex flex-col gap-20 md:gap-32">
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/ghsmart.png"
            title="Leadership Development Platform"
            description="Define and assess the success of key hires and leaders"
            alt="Blurred screenshot of the ghSmart platform"
            :image-left="true"
          >
            <div>
              <p
                class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
              >
                Client
              </p>
              <p>ghSmart</p>
            </div>
          </ProjectCard2>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/msa.png"
            title="Marketing Spend Advisor"
            description="Analysing industry insights to optimise marketing budgets"
            alt="Blurred screenshot of the Marketing Spend Advisor dashboard"
            :image-left="false"
          >
            <div>
              <p
                class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
              >
                Function
              </p>
              <p>Growth, Marketing & Sales</p>
            </div>
          </ProjectCard2>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/cxa.png"
            title="Customer Experience Accelerator"
            description="Improving customer journeys that create the most value"
            alt="Blurred screenshot from the Customer Experience Accelerator reports"
            :image-left="true"
          >
            <div>
              <p
                class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
              >
                Function
              </p>
              <p>Customer Experience</p>
            </div>
          </ProjectCard2>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/prizm.png"
            title="Prizm Design System"
            description="Harmonising design across global teams and enterprise tools"
            alt="Blurred screenshot from the design system documentation"
            :image-left="false"
          >
            <div>
              <p
                class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
              >
                Function
              </p>
              <p>Periscope</p>
            </div>
          </ProjectCard2>
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard2
            image="/images/projects/promo.png"
            title="Promotion Advisor"
            description="Collaborative plans and forecasts for retailer promotions"
            alt="Blurred screenshot from Promotion Advisor"
            :image-left="true"
          >
            <div>
              <p
                class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
              >
                Function
              </p>
              <p>Periscope</p>
            </div>
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
