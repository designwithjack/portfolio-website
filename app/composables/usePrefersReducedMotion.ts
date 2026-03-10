import type { Ref } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

/**
 * Prefers-reduced-motion preference. Named to avoid conflict with motion-v’s useReducedMotion.
 */
export function usePrefersReducedMotion(): { prefersReduced: Ref<boolean> } {
  const prefersReduced = ref(false);
  let mq: MediaQueryList | undefined;
  let handleChange: (e: MediaQueryListEvent) => void;

  onMounted(() => {
    mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReduced.value = mq.matches;
    handleChange = (e: MediaQueryListEvent) => {
      prefersReduced.value = e.matches;
    };
    mq.addEventListener("change", handleChange);
  });

  onUnmounted(() => {
    if (mq && handleChange) {
      mq.removeEventListener("change", handleChange);
    }
  });

  return { prefersReduced };
}
