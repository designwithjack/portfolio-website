<template>
  <div
    v-motion="scrollMotionConfig"
    class="project-item-wrapper"
  >
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    class="project-item border-border flex flex-col gap-6 border-b py-9 sm:grid sm:grid-cols-2 sm:gap-16 sm:py-12 md:gap-20"
    :class="{ 'cursor-pointer text-foreground no-underline transition-opacity hover:opacity-90': safeHref }"
  >
    <div
      class="project-item__thumbnail order-2 sm:min-h-0 aspect-16/10 rounded-lg overflow-hidden bg-muted/20"
      :class="thumbnailPosition === 'right' ? 'sm:order-2' : 'sm:order-1'"
    >
      <img
        v-if="safeThumbnail"
        :src="safeThumbnail"
        :alt="thumbnailAlt"
        width="800"
        height="500"
        loading="lazy"
        decoding="async"
        class="h-48 w-full rounded-lg object-cover sm:aspect-16/10 sm:h-auto"
      />
      <slot name="thumbnail" v-else />
    </div>
    <div
      class="project-item__text order-1 flex flex-col gap-2 sm:min-h-0"
      :class="thumbnailPosition === 'right' ? 'sm:order-1' : 'sm:order-2'"
    >
      <p class="text-base text-pretty text-foreground">
        {{ description }}
      </p>
      <p
        v-if="metadataDisplay"
        class="text-muted text-sm"
      >
        {{ metadataDisplay }}
      </p>
    </div>
  </component>
  </div>
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from "@vueuse/core";

const ALLOWED_URL_SCHEMES = ["https:", "http:"];

function isAllowedUrl(url: string | undefined): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url, "https://x");
    return ALLOWED_URL_SCHEMES.includes(parsed.protocol);
  } catch {
    return false;
  }
}

interface ProjectItemProps {
  thumbnail?: string;
  thumbnailAlt?: string;
  description: string;
  metadata?: string | string[];
  thumbnailPosition?: "left" | "right";
  href?: string;
  external?: boolean;
}

const props = withDefaults(defineProps<ProjectItemProps>(), {
  thumbnailPosition: "left",
  external: false,
});

const safeHref = computed(() =>
  isAllowedUrl(props.href) ? props.href : undefined
);

const safeThumbnail = computed(() =>
  isAllowedUrl(props.thumbnail) ? props.thumbnail : undefined
);

const rootTag = computed<"div" | "a" | "NuxtLink">(() => {
  if (!safeHref.value) return "div";
  if (props.external) return "a";
  return "NuxtLink";
});

const rootAttrs = computed(() => {
  if (!safeHref.value) return {};
  if (props.external) {
    return {
      href: safeHref.value,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }
  return { to: safeHref.value };
});

const metadataDisplay = computed(() => {
  if (!props.metadata) return "";
  return Array.isArray(props.metadata) ? props.metadata.join(" · ") : props.metadata;
});

const prefersReducedMotion = usePreferredReducedMotion();
const scrollMotionConfig = computed(() => {
  const reduced = prefersReducedMotion.value === "reduce";
  const visibleState = { opacity: 1, filter: "blur(0px)" };
  const transition = reduced
    ? { duration: 0 }
    : { duration: 250, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] };
  return {
    initial: reduced
      ? visibleState
      : { opacity: 0.7, filter: "blur(6px)" },
    visibleOnce: {
      ...visibleState,
      transition,
    },
    ...(reduced ? {} : { viewport: { once: true, amount: 0.25 } }),
  };
});
</script>
