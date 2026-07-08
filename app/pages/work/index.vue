<template>
  <div class="page-content">
    <div
      class="page-container pt-[clamp(108px,50vw,288px)] pb-[clamp(0px,calc(10vw-72px),72px)]"
    >
      <section class="text-pretty">
        <ScrollReveal>
          <h1 class="pb-9 heading-2xl">Work</h1>
          <p
            class="text-2xl leading-9 tracking-[0.005em] max-w-[720px] font-light"
          >
            Solving complex problems in technical domains is where I'm most at
            home, which makes B2B SaaS a natural fit. I care a lot about craft,
            though never at the expense of what users actually need or what the
            business is trying to achieve. If something feels considered, it
            probably was. The work here is from projects where I was the sole or
            lead designer.
          </p>
        </ScrollReveal>
      </section>

      <section class="pt-[clamp(72px,10vw,108px)] flex flex-col">
        <ScrollReveal
          as="h2"
          class="mt-1.5 mb-1 sm:mt-2.5 sm:mb-2 text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted pb-11"
        >
          Latest case study
        </ScrollReveal>
        <ScrollReveal>
          <ProjectCard
            image="/images/projects/speckle.jpg"
            title="Saved Views"
            description="Save, organise and share viewer states of your 3D models"
            alt="Screenshot of the Speckle web app"
            :image-left="true"
            href="https://www.figma.com/deck/zxodmwTLKd4I1e7eZg9uJw/Case-Study---Saved-Views?node-id=1-275&t=np2ZG5juzeD4AalW-1"
            open-in-new-tab
          >
            <div class="pt-2">
              <p
                class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
              >
                Company
              </p>
              <p>Speckle</p>
            </div>
          </ProjectCard>
        </ScrollReveal>
      </section>
      <hr class="border-border border-b mt-[clamp(44px,5vw,72px)]" />
      <section class="pt-[clamp(44px,5vw,72px)]">
        <ScrollReveal
          as="h2"
          class="mt-1.5 mb-1 sm:mt-2.5 sm:mb-2 text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted pb-11"
        >
          Selected projects
        </ScrollReveal>
        <div class="flex flex-col gap-[clamp(72px,10vw,144px)]">
          <ScrollReveal>
            <ProjectCard
              image="/images/projects/ghsmart.jpg"
              title="Leadership Development Platform"
              description="Define and assess the success of key hires and leaders"
              alt="Screenshot of the ghSmart platform"
              :image-left="true"
            >
              <div class="pt-2">
                <p
                  class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                >
                  Company
                </p>
                <p>ghSmart</p>
              </div>
            </ProjectCard>
          </ScrollReveal>
          <ScrollReveal>
            <ProjectCard
              image="/images/projects/msa.jpg"
              title="Marketing Spend Advisor"
              description="Analysing industry insights to optimise marketing budgets"
              alt="Screenshot of the Marketing Spend Advisor dashboard"
              :image-left="false"
            >
              <div class="flex flex-col xs:flex-row gap-4 xs:gap-0">
                <div class="w-54 pt-2">
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Company
                  </p>
                  <p>McKinsey & Company</p>
                </div>
                <div>
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Team
                  </p>
                  <p>Growth, Marketing & Sales</p>
                </div>
              </div>
            </ProjectCard>
          </ScrollReveal>
          <ScrollReveal>
            <ProjectCard
              image="/images/projects/cxa.jpg"
              title="Customer Experience Accelerator"
              description="Improving customer journeys that create the most value"
              alt="Screenshot from the Customer Experience Accelerator reports"
              :image-left="true"
            >
              <div class="flex flex-col xs:flex-row gap-4 xs:gap-0">
                <div class="w-54 pt-2">
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Company
                  </p>
                  <p>McKinsey & Company</p>
                </div>
                <div>
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Team
                  </p>
                  <p>Customer Experience</p>
                </div>
              </div>
            </ProjectCard>
          </ScrollReveal>
          <ScrollReveal>
            <ProjectCard
              image="/images/projects/prizm.jpg"
              title="Prizm Design System"
              description="Harmonising design across global teams and enterprise tools"
              alt="Screenshot from the design system documentation"
              :image-left="false"
            >
              <div class="flex flex-col xs:flex-row gap-4 xs:gap-0">
                <div class="w-54 pt-2">
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Company
                  </p>
                  <p>McKinsey & Company</p>
                </div>
                <div>
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Team
                  </p>
                  <p>Periscope</p>
                </div>
              </div>
            </ProjectCard>
          </ScrollReveal>
          <ScrollReveal>
            <ProjectCard
              image="/images/projects/promo.jpg"
              title="Promotion Advisor"
              description="Collaborative plans and forecasts for retailer promotions"
              alt="Screenshot from Promotion Advisor"
              :image-left="true"
            >
              <div class="flex flex-col xs:flex-row gap-4 xs:gap-0">
                <div class="w-54 pt-2">
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Company
                  </p>
                  <p>McKinsey & Company</p>
                </div>
                <div>
                  <p
                    class="text-xs font-medium tracking-[0.15em] uppercase text-muted pt-1 lg:pb-1"
                  >
                    Team
                  </p>
                  <p>Periscope</p>
                </div>
              </div>
            </ProjectCard>
          </ScrollReveal>
          <ScrollReveal class="flex justify-center my-6">
            <Button
              variant="primary"
              size="xl"
              href="mailto:hello@designwithjack.com?subject=Chat%20with%20Jack"
            >
              Request access
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Jack Hughes — Work",
  description:
    "Selected work from complex, technical domains in B2B SaaS, with a focus on thoughtful, business-aligned design craft.",
  ogTitle: "Jack Hughes — Work",
  ogDescription:
    "Selected work from complex, technical domains in B2B SaaS, with a focus on thoughtful, business-aligned design craft.",
  ogImage: "/images/og-default.png",
  twitterCard: "summary_large_image",
});
</script>
