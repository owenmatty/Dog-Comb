<template>
  <article
    class="rounded-3xl p-6 shadow-soft transition duration-300 hover:-translate-y-1"
    :class="cardTone"
  >
    <div class="mb-3 text-3xl" aria-hidden="true">{{ icon }}</div>
    <h3 class="text-xl font-semibold text-ink">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink/80">{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '🐶',
  },
  cardTone: {
    type: String,
    default: 'bg-primary/60',
  },
});
</script>
