import { computed } from "vue";
import { usePrefersReducedMotion } from "~/composables/usePrefersReducedMotion";
import { useIsBelowXs } from "~/composables/useIsBelowXs";

/**
 * Shared scroll-reveal config for motion-v whileInView (opacity + blur).
 * Use with :initial, :while-in-view, :in-view-options, :transition on a motion component.
 */
export function useScrollReveal() {
  const { prefersReduced } = usePrefersReducedMotion();
  const { isBelowXs } = useIsBelowXs();

  const scrollReveal = computed(() => ({
    initial: { opacity: 0, filter: "blur(9px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" },
    inViewOptions: {
      once: true,
      amount: isBelowXs.value ? 0.16 : 0.2,
    },
    transition: {
      duration: prefersReduced.value ? 0.15 : 0.66,
      ease: "easeOut" as const,
    },
  }));

  return { scrollReveal };
}
