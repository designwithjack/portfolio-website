import { onBeforeUnmount, onMounted, ref } from "vue";

/** Matches @theme --breakpoint-xs (30rem / 480px) in main.css. */
const XS_MAX_WIDTH_QUERY = "(max-width: 479px)";

/**
 * Tracks whether the viewport width is below the Tailwind xs breakpoint.
 */
export function useIsBelowXs() {
  const isBelowXs = ref(false);

  const query = XS_MAX_WIDTH_QUERY;
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

