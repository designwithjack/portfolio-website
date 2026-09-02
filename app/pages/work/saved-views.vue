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
            <div class="sm:col-span-12 md:col-span-15 col-span-1 pb-7 sm:pb-0">
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
            <div
              class="sm:col-start-15 sm:col-span-18 md:col-start-18 md:col-span-15 col-span-1"
            >
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

      <CaseStudySection
        heading="Value for the whole team"
        chapter="01 — Problem"
        show-chapter
        image="/images/case-study/saved-views-value.jpg"
      >
        <p>
          We were given the goal to convert more free workspace members to paid
          seats. Through our research, Saved Views started to feel like a solid
          bet to achieve this.
        </p>
        <p>
          The app was powerful but skewed toward technical users, and giving
          anyone on a project a way to save and share exactly what they're
          looking at felt like a meaningful step toward closing that gap.
        </p>
      </CaseStudySection>
      <CaseStudySection
        heading="Listening to users"
        chapter="02 — Research"
        show-chapter
        image="/images/case-study/saved-views-community.jpg"
      >
        <p>
          The community forum provided direct access to how users were thinking
          about features, and made it easy to reach out and learn more through
          interview calls.
        </p>
        <p>
          Enthusiasm from one particular advocate at a large global design firm
          was a strong signal, as adoption from them would be an impactful
          revenue lever.
        </p>
      </CaseStudySection>
      <CaseStudySection
        heading="The unusual workaround"
        image="/images/case-study/saved-views-workaround.jpg"
      >
        <p>
          We discovered that some users had been exploiting the fact that
          comments capture camera state, using the Discussions feature as a
          makeshift saved-views system.
        </p>
        <p>
          One user had even built it into their website, using a series of
          comments as navigation points.
        </p>
        <p>It was clear that the feature had real user value.</p>
      </CaseStudySection>
      <CaseStudySection
        heading="Competitive landscape"
        image="/images/case-study/saved-views-competition.jpg"
      >
        <p>
          I reviewed how other tools in the space tackled the problem. Trimble
          Connect came up repeatedly in forum discussions, providing a useful
          reference point for user expectations.
        </p>
        <p>
          Traditional AEC software sets a low bar for usability, so we were
          always looking for opportunities to deliver something that felt more
          modern and considered.
        </p>
      </CaseStudySection>
      <CaseStudySection
        heading="Piecing it together"
        chapter="03 — Challenges"
        show-chapter
      >
        <p>
          The design of Saved Views was running parallel to a redesign of the
          broader viewer UI, with larger surfaces shifting around it.
        </p>
        <p>
          This meant staying aligned with the other designer, but also offered
          an opportunity to inject my taste for clean, minimal simplicity into a
          part of the product that would reach a much wider audience.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Iterating through complexity">
        <p>
          It's surprising when a proven UX pattern ends up being entirely
          unsuitable.
        </p>
        <p>
          Saved Views had to account for users with different roles and
          permissions, and views that could be organised into groups.
        </p>
        <p>
          The exploration led to two clear decisions: views are shared by
          default, and groups are limited to a single level.
        </p>
      </CaseStudySection>
      <CaseStudySection
        heading="Removing friction"
        image="/images/case-study/saved-views-friction.jpg"
      >
        <p>
          Internal feedback made it clear that creating a view needed to feel
          effortless. It would have been technically simpler to use a modal
          upfront, but that felt too disruptive to broader workflows.
        </p>
        <p>
          The solution was to remove that friction entirely. Views are created
          instantly with a default name, with an edit modal available afterwards
          for keeping things organised.
        </p>
      </CaseStudySection>
      <CaseStudySection
        heading="Closing the gap"
        chapter="04 — Collaboration"
        show-chapter
        image="/images/case-study/saved-views-coding.jpg"
      >
        <p>
          Once the core functionality was in place, I worked directly in the
          codebase to make it feel the way it was designed to.
        </p>
        <p>
          This included enriching the disclosure UI component to support a new
          variant, without breaking the existing instances.
        </p>
        <p>
          It was also the moment we switched to Lucide, an icon library I had
          been pushing for.
        </p>
      </CaseStudySection>
      <CaseStudySection
        heading="A detail that mattered"
        chapter="05 — Outcomes"
        show-chapter
      >
        <p>
          Embedding interactive 3D models into Miro boards was already a
          favourite feature for teams.
        </p>
        <p>
          With Saved Views in place, embedded models could now open to a
          specific, curated perspective rather than the default state.
        </p>
        <p>
          A little enhancement that made a popular use case a lot more useful.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="Setting up foundations">
        <p>Saved Views became the building block for future features.</p>
        <p>
          Presentations let teams compile a collection of views into an easily
          shareable narrative, viewable by anyone, no membership required.
        </p>
        <p>
          Then came Markups, allowing users to draw directly on top of a view
          for quick async feedback from project directors.
        </p>
      </CaseStudySection>
      <CaseStudySection heading="A payoff that wasn’t instant">
        <p>
          Forum feedback was positive, and we tracked adoption via Mixpanel.
        </p>
        <p>
          What we found was that the feature alone didn't move the needle on
          paid seat conversion in the way we'd hoped.
        </p>
        <p>
          It may be that Saved Views needs more time as part of the broader
          collaborative design review initiative to reach its potential.
        </p>
      </CaseStudySection>
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
