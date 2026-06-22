<template>
  <!-- page-content: full-width card with rounded-b corners + footer clearance -->
  <div class="page-content">
    <div
      class="page-container pt-[clamp(128px,50vw,288px)] pb-[clamp(0px,calc(10vw-72px),72px)]"
    >
      <section
        class="xs:text-4xl xs:leading-12 max-w-180 text-3xl leading-11 -tracking-[0.005em] font-light text-balance"
      >
        <ScrollReveal>
          <p class="text-muted pb-3 xs:pb-4">Hello, I'm Jack</p>
          <p>
            A product designer who turns complex technical problems into
            high-fidelity, shippable solutions. I've worked across scrappy
            startups and global enterprise, partnering with teams from early
            strategy through to production code.
          </p>
        </ScrollReveal>
      </section>
      <section class="pt-[clamp(72px,10vw,144px)]">
        <ScrollReveal
          as="h2"
          class="mt-1.5 mb-1 sm:mt-2.5 sm:mb-2 text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted"
        >
          Experience
        </ScrollReveal>

        <div id="experience-content" class="relative">
          <ExperienceItem
            company="Speckle"
            role="Product Designer"
            dates="May 2025 — Apr 2026"
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
          <AnimatePresence>
            <motion.div
              v-if="showAllExperience"
              key="experience-expandable"
              :initial="expandVariants.initial"
              :animate="expandVariants.animate"
              :exit="expandVariants.exit"
            >
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
              <ScrollReveal
                class="flex sm:items-center flex-col gap-4 py-9 sm:flex-row sm:gap-0"
              >
                <div class="min-w-40 sm:min-w-[180px] md:min-w-[288px] pr-9">
                  <h4
                    class="sm:w-[180px] md:w-[288px] text-base leading-6 font-medium tracking:[0.0075em]"
                  >
                    Other previous experience
                  </h4>
                </div>

                <p
                  class="w-full text-base font-light leading-6 tracking:[0.0075em]"
                >
                  LBi, JWT, Suburb, DLKW
                </p>
              </ScrollReveal>
            </motion.div>
          </AnimatePresence>

          <div
            v-if="!showAllExperience"
            class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent"
          ></div>
        </div>

        <div class="mb-4 border-border border-b">
          <Button
            variant="secondary"
            type="button"
            class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            :aria-expanded="showAllExperience"
            aria-controls="experience-content"
            @click="showAllExperience = !showAllExperience"
          >
            {{ showAllExperience ? "Show less" : "Show more" }}
          </Button>
        </div>
      </section>
      <section class="pt-[clamp(44px,5vw,72px)] border-border sm:border-b">
        <ScrollReveal
          as="h2"
          class="mt-1.5 mb-1 sm:mt-2.5 sm:mb-2 text-sm leading-none font-medium tracking-[0.11em] uppercase text-muted"
        >
          Education
        </ScrollReveal>
        <ScrollReveal>
          <div
            class="flex sm:items-center flex-col gap-2 pt-9 sm:flex-row sm:gap-0"
          >
            <div class="min-w-40 sm:min-w-[180px] md:min-w-[288px] pr-9">
              <h4
                class="sm:max-w-[180px] md:max-w-[288px] text-base leading-6 font-medium tracking:[0.0075em]"
              >
                Bournemouth University
              </h4>
            </div>
            <div
              class="w-full text-base font-light leading-6 tracking:[0.0075em]"
            >
              <p>BA (Hons) Interactive Media Production</p>
            </div>
          </div>
          <div
            class="flex sm:items-center flex-col gap-2 py-9 sm:flex-row sm:gap-0"
          >
            <div class="min-w-40 sm:min-w-[180px] md:min-w-[288px] pr-9">
              <h4
                class="sm:max-w-[180px] md:max-w-[288px] text-base leading-6 font-medium tracking:[0.0075em] text-balance"
              >
                Colchester School of Art
              </h4>
            </div>
            <div
              class="w-full text-base font-light leading-6 tracking:[0.0075em]"
            >
              <p>(BTech) Foundation Studies in Art & Design</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { motion, AnimatePresence } from "motion-v";
import { usePrefersReducedMotion } from "~/composables/usePrefersReducedMotion";

useSeoMeta({
  title: "Jack Hughes — Senior Product Designer",
  description:
    "Jack Hughes is a craft-obsessed Product Designer specialising in simplifying user experiences for complex, technical SaaS tools.",
  ogTitle: "Jack Hughes — Senior Product Designer",
  ogDescription:
    "Jack Hughes is a craft-obsessed Product Designer specialising in simplifying user experiences for complex, technical SaaS tools.",
  ogImage: "/images/og-default.png",
  twitterCard: "summary_large_image",
});

const showAllExperience = ref(false);
const { prefersReduced } = usePrefersReducedMotion();

const expandVariants = computed(() => {
  const short = prefersReduced.value ? 0.15 : 0.3;
  const long = prefersReduced.value ? 0.15 : 0.6;
  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: long, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: short, ease: "easeIn" as const },
    },
  };
});
</script>
