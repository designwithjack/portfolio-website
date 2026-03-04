import { usePreferredReducedMotion } from "@vueuse/core";

const STAGGER_MS = 80;
const DURATION_MS = 250;
const EASE = [0.2, 0.8, 0.2, 1] as [number, number, number, number];

export function useStaggerMotion() {
  const prefersReducedMotion = usePreferredReducedMotion();

  function staggerConfig(index: number) {
    const reduced = prefersReducedMotion.value === "reduce";
    const visibleState = { opacity: 1, y: 0 };
    const transition = reduced
      ? { duration: 0, delay: 0 }
      : { duration: DURATION_MS, ease: EASE, delay: index * STAGGER_MS };
    return {
      initial: reduced
        ? visibleState
        : { opacity: 0, y: 12 },
      visibleOnce: {
        ...visibleState,
        transition,
      },
    };
  }

  return { staggerConfig };
}
