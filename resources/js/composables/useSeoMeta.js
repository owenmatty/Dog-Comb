import { onMounted } from 'vue';

/**
 * Lightweight placeholder composable for future dynamic SEO updates.
 */
export function useSeoMeta(title) {
  onMounted(() => {
    if (title) {
      document.title = title;
    }
  });
}
