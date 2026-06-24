import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useWindowScroll, useWindowSize } from "@vueuse/core";
import { usePrefersReducedMotion } from "~/composables/usePrefersReducedMotion";

/** Target scale at full scroll threshold (40% of initial padding-top). */
export const HEADER_COLLAPSED_SCALE = 0.4;

/** Scroll-linked header updates — smoothness comes from scroll interpolation, not easing. */
export const HEADER_SCROLL_TRANSITION = {
  duration: 0,
  ease: "linear" as const,
};

const COLLAPSE_RANGE = 1 - HEADER_COLLAPSED_SCALE;

function measurePaddingTopMax(): number {
  const probe = document.createElement("div");
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.paddingTop = "var(--header-padding-top-max)";

  document.body.appendChild(probe);
  const px = parseFloat(getComputedStyle(probe).paddingTop);
  document.body.removeChild(probe);

  return Number.isFinite(px) ? px : 0;
}

export function useHeaderScroll() {
  const route = useRoute();
  const { y: scrollY } = useWindowScroll();
  const { width } = useWindowSize();
  const { prefersReduced } = usePrefersReducedMotion();

  const isMeasured = ref(false);
  const maxPaddingTop = ref(0);
  const skipMotion = ref(false);

  function measureHeaderDimensions() {
    if (typeof document === "undefined") return;

    maxPaddingTop.value = measurePaddingTopMax();
    isMeasured.value = true;
  }

  onMounted(() => {
    measureHeaderDimensions();
  });

  watch(width, () => {
    measureHeaderDimensions();
  });

  watch(
    () => route.path,
    () => {
      skipMotion.value = true;
      nextTick(() => {
        skipMotion.value = false;
      });
    },
  );

  const scrollProgress = computed(() => {
    const threshold = maxPaddingTop.value;
    if (threshold <= 0) return 0;
    return Math.min(Math.max(scrollY.value / threshold, 0), 1);
  });

  const paddingTop = computed(() => {
    if (!isMeasured.value || maxPaddingTop.value <= 0) return null;
    return maxPaddingTop.value * (1 - scrollProgress.value * COLLAPSE_RANGE);
  });

  const headerTransition = computed(() => {
    if (skipMotion.value || prefersReduced.value) {
      return { duration: 0, ease: "linear" as const };
    }
    return HEADER_SCROLL_TRANSITION;
  });

  return {
    paddingTop,
    headerTransition,
  };
}
