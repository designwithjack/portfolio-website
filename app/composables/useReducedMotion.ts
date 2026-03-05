import { ref, onMounted, onUnmounted } from "vue";

export function useReducedMotion() {
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
