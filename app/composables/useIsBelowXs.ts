import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Tracks whether the viewport width is below the Tailwind xs breakpoint.
 * Tailwind v4 default xs breakpoint is 475px.
 */
export function useIsBelowXs() {
  const isBelowXs = ref(false);

  const query = "(max-width: 475px)";
  let mediaQuery: MediaQueryList | null = null;

  const updateMatch = () => {
    if (!mediaQuery) return;
    isBelowXs.value = mediaQuery.matches;
  };

  onMounted(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    mediaQuery = window.matchMedia(query);
    updateMatch();

    mediaQuery.addEventListener("change", updateMatch);
  });

  onBeforeUnmount(() => {
    if (!mediaQuery) return;
    mediaQuery.removeEventListener("change", updateMatch);
  });

  return { isBelowXs };
}

