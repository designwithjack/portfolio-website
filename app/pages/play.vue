<template>
  <div class="page-content">
    <div class="page-container pt-40 lg:pt-54 pb-24">
      <header class="max-w-2xl">
        <h1
          v-motion="staggerConfig(0)"
          class="xs:text-4xl xs:leading-11 text-3xl leading-9 font-light text-balance"
        >
          Play
        </h1>
        <p
          v-motion="staggerConfig(1)"
          class="text-muted mt-4 text-base text-pretty"
        >
          Side projects and experiments — things I build for fun or to explore an
          idea.
        </p>
      </header>

      <section class="pt-[7.5vw]">
        <ul class="list-none p-0">
          <li
            v-for="(project, index) in playProjects"
            :key="project.href ?? index"
          >
            <ProjectItem
              :thumbnail="project.thumbnail"
              :thumbnail-alt="project.thumbnailAlt"
              :description="project.description"
              :metadata="project.metadata"
              :thumbnail-position="index % 2 === 0 ? 'left' : 'right'"
              :href="project.href"
              :external="true"
            />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Play — Jack Hughes",
});
const { staggerConfig } = useStaggerMotion();

interface PlayProject {
  thumbnail?: string;
  thumbnailAlt?: string;
  description: string;
  metadata?: string | string[];
  href?: string;
}

const playProjects: PlayProject[] = [
  {
    thumbnail: "https://picsum.photos/800/500?random=1",
    thumbnailAlt: "Project one",
    description:
      "A small tool or experiment that does X. Built to learn more about Y and try out Z.",
    metadata: ["2024", "Side project"],
    href: "https://example.com",
  },
  {
    thumbnail: "https://picsum.photos/800/500?random=2",
    thumbnailAlt: "Project two",
    description:
      "Another playful project exploring a different idea. This one focuses on design and prototyping.",
    metadata: ["2024"],
    href: "https://example.com",
  },
  {
    thumbnail: "https://picsum.photos/800/500?random=3",
    thumbnailAlt: "Project three",
    description:
      "A third project to show the zig-zag layout. You can replace these with real play projects and thumbnails.",
    metadata: ["2023", "Design", "Code"],
    href: "https://example.com",
  },
];
</script>
