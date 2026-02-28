<template>
  <!-- page-content: full-width card with rounded-b corners + footer clearance -->
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <section
        class="xs:text-4xl xs:leading-11 max-w-2xl text-3xl leading-9 font-light text-balance"
      >
        <p class="text-muted pb-3">Hello, I'm Jack</p>
        <p>
          A product designer who loves transforming complex problems into
          simple, user-friendly experiences. Naturally curious and with a keen
          eye for detail, I work with teams to craft thoughtful and refined
          interfaces.
        </p>
      </section>
      <section class="pt-[7.5vw]">
        <h2
          class="mt-5 mb-2.5 text-sm font-medium tracking-[0.105em] uppercase opacity-70"
        >
          Experience
        </h2>

        <div id="experience-content" class="relative">
          <ExperienceItem
            company="Speckle"
            role="Product Designer"
            dates="May 2025 — Present"
          >
            <p>
              Speckle is a Series A startup building software used by thousands
              of professionals in architecture, engineering, and construction.
              Wearing many hats, I worked end-to-end from design through to
              frontend implementation on features that ship to production. I
              used AI to synthesise insights from customer research and Cursor
              to accelerate development. I paired closely with product experts
              and engineering teams to collaborate on the design system, web
              app, and marketing website.
            </p>
          </ExperienceItem>
          <ExperienceItem
            company="McKinsey & Company"
            role="Staff Product Designer"
            dates="Jul 2021 — Apr 2025"
          >
            <p>
              Leading design across multiple B2B SaaS products as part of a
              cross-functional team, I also took ownership of the internal
              design system — including spearheading a refresh of styles and
              tokens to improve legibility and accessibility. Alongside my core
              work, I mentored designers and contributed to growing the team
              through candidate interviews.
            </p>
          </ExperienceItem>
          <ExperienceItem
            company="ghSmart"
            role="Fractional Principal Product Designer"
            dates="Jul 2023 — May 2024"
          >
            <p>
              Teamed up with a former colleague in their new role as Head of
              Product, working from the ground up to design an app used as part
              of executive hiring. Improved the efficiency of in-house
              consultants by productising existing workflows, while remaining
              focused on the potential to unlock additional revenue by making
              the platform accessible to clients.
            </p>
          </ExperienceItem>
          <ExperienceItem
            company="Sennep"
            role="Senior Product Designer"
            dates="Sep 2015 — Jul 2021"
          >
            <p>
              Applying user-centred design principles to complex data analysis
              tools, I validated end-to-end solutions with clients and
              stakeholders — from wireframes through to high-fidelity prototypes
              and developer-ready specs. I co-facilitated design sprint
              workshops with client teams across Europe and North America,
              helping procure funding for further product development. A keen
              contributor to team culture, I hosted regular lunch & learn
              sessions on topics such as groupthink, permaculture and
              philosophy.
            </p>
          </ExperienceItem>
          <Transition
            enter-active-class="transition duration-600 ease-out"
            enter-from-class="opacity-0 "
            enter-to-class="opacity-100 "
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 "
            leave-to-class="opacity-0 "
          >
            <div v-show="showAllExperience">
              <ExperienceItem
                company="Elsewhen"
                role="Senior Visual Designer"
                dates="Mar 2015 — Jul 2015"
              >
                <p>
                  Working with an early-stage startup building a video biography
                  and family history app, I led product discovery through
                  founder workshops following Lean practices to evolve their
                  vision, with the support of user testing and research. I also
                  contributed to brand exploration, UI design, and prototyping
                  for A/B testing.
                </p>
              </ExperienceItem>
              <ExperienceItem
                company="Imagination"
                role="Digital Art Director"
                dates="Dec 2013 — Jul 2014"
              >
                <p>
                  Designing physical experiences for the launch of a series of
                  fun, interactive exhibits that explored the future of energy,
                  I also mentored and line managed junior designers while
                  providing creative direction to freelancers working across AV,
                  interactive, and VR experiences.
                </p>
              </ExperienceItem>
              <ExperienceItem
                company="AKQA"
                role="Senior Digital Designer"
                dates="Oct 2013 — Nov 2013"
              >
                <p>
                  Working within the wealth management and private banking
                  space, I contributed to a conceptual design phase exploring
                  premium customer support features for a high-net-worth client
                  service, and supported a website redesign for a private bank
                  centred on modern simplicity.
                </p>
              </ExperienceItem>
              <ExperienceItem
                company="University of the Arts London"
                role="Senior Digital Designer"
                dates="Oct 2013 — Nov 2013"
              >
                <p>
                  Collaborating in a small team of designers and developers, I
                  helped express the distinctive character of six art colleges
                  while consolidating their content into a modern, responsive
                  website redesign. This involved stakeholder management to
                  align each college on a unified design direction, and
                  partnering with Pentagram to adapt UAL brand guidelines for a
                  digital context.
                </p>
              </ExperienceItem>
              <div
                class="flex flex-col gap-3 py-9 sm:flex-row sm:gap-16 md:gap-20"
              >
                <div class="min-w-40 md:min-w-60">
                  <h4 class="text-base leading-5 sm:pt-0.5">
                    Other previous experience
                  </h4>
                </div>
                <div class="max-w-md text-base text-pretty">
                  <p>LBi, JWT, Suburb, DLKW</p>
                </div>
              </div>
            </div>
          </Transition>

          <div
            v-if="!showAllExperience"
            class="pointer-events-none absolute inset-x-0 bottom-0 h-22 bg-linear-to-t from-black to-transparent"
          ></div>
        </div>

        <div class="mb-8 border-border border-b">
          <Button
            variant="secondary"
            type="button"
            :aria-expanded="showAllExperience"
            aria-controls="experience-content"
            @click="showAllExperience = !showAllExperience"
            class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {{ showAllExperience ? "Show less" : "Show more" }}
          </Button>
        </div>
      </section>
      <section class="pt-[7.5vw]">
        <h2
          class="mt-5 mb-2.5 text-sm font-medium tracking-[0.105em] uppercase opacity-70"
        >
          Education
        </h2>
        <div class="flex flex-col gap-3 pt-9 sm:flex-row sm:gap-16 md:gap-20">
          <div class="flex min-w-40 md:min-w-60">
            <h4 class="text-lg leading-6 sm:pt-0.5">Bournemouth University</h4>
          </div>
          <div class="max-w-md text-base text-pretty">
            <p>BA (Hons) Interactive Media Production</p>
          </div>
        </div>
        <div class="flex flex-col gap-3 py-9 sm:flex-row sm:gap-16 md:gap-20">
          <div class="flex min-w-40 md:min-w-60">
            <h4 class="text-lg leading-6 sm:pt-0.5">
              Colchester School of Art
            </h4>
          </div>
          <div class="max-w-md text-base text-pretty">
            <p>(BTech) Foundation Studies in Art & Design</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showAllExperience = ref(false);
</script>
