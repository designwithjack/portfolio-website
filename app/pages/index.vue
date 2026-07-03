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
              Speckle is a Series A startup building B2B SaaS for architecture,
              engineering, and construction. I shipped design-to-production
              features end-to-end, using Cursor and Claude to close the handoff
              gap and keep a small engineering team moving fast. I extended and
              unified the design system through a full website migration,
              aligning tokens and components with the web app, and led brand and
              identity work that sharpened consistency across touchpoints
              without a full rebrand. I also partnered with growth and GTM teams
              to design collaboration features requested by enterprise clients,
              shaping the sales materials behind new account wins.
            </p>
          </ExperienceItem>
          <ExperienceItem
            company="McKinsey & Company"
            role="Staff Product Designer"
            dates="Jul 2021 — Apr 2025"
          >
            <p>
              I held staff-level oversight across multiple products on the
              Periscope platform, alongside bespoke design work for standalone
              SaaS initiatives outside it. I owned the design system, merging
              components from a legacy UI library and establishing a governance
              model for contribution and maintenance with front end. As the team
              doubled in size, I acted as player-coach, mentoring designers and
              taking an active role in hiring, while partnering with external
              vendors on shared initiatives.
            </p>
          </ExperienceItem>
          <ExperienceItem
            company="ghSmart"
            role="Fractional Staff Product Designer"
            dates="Jun 2023 — May 2024"
          >
            <p>
              I joined a former colleague newly appointed Head of Product for
              0-to-1 discovery and design of an enterprise app used in
              high-value executive hiring. My findings shaped the product from a
              broad employee-lifecycle tool into one focused squarely on the
              hiring workflow. I replaced manual, fragmented consultant
              workflows with AI-enabled tooling, removing interviewing friction
              and cutting scorecard creation time in half, and designed the
              self-serve admin area that made a client-facing revenue model
              viable.
            </p></ExperienceItem
          >
          <ExperienceItem
            company="Sennep"
            role="Senior Product Designer"
            dates="Sep 2015 — Jul 2021"
          >
            <p>
              I took complex data analysis tools from wireframe through to
              developer handoff, validating each stage directly with clients and
              stakeholders. I was forward deployed to on-site design sprints
              across Europe and North America that helped secure funding for
              further product development, and ran regular lunch & learns,
              including a remote yoga session during lockdown.
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
                  I led the product design discovery phase for a video biography
                  and family history startup. Using founder workshops with a
                  Lean methodology, I helped the team discover their vision and
                  define the opportunity, backing it up with evidence from
                  research and user testing, and covered brand and identity, UI
                  design, and prototyping for A/B PMF testing.
                </p>
              </ExperienceItem>
              <ExperienceItem
                company="Imagination"
                role="Digital Art Director"
                dates="Dec 2013 — Jul 2014"
              >
                <p>
                  I directed a B2C youth education engagement piece, launching
                  playful, interactive installations that blended digital media
                  with physical interactivity as part of an exhibition exploring
                  the future of energy. I was direct line manager and mentor for
                  junior designers on the team, and directed external
                  freelancers creating audio visual, interactive, and VR
                  experiences.
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
