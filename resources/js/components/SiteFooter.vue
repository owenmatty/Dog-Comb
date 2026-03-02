<template>
  <footer class="border-t border-ink/10 bg-canvas py-8">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-ink/80 md:flex-row md:items-center md:justify-between lg:px-8">
      <p class="font-semibold text-ink">Dog&amp;Comb</p>
      <p class="flex gap-3">
        <span aria-label="Instagram">Instagram</span>
        <span aria-label="Facebook">Facebook</span>
        <span aria-label="TikTok">TikTok</span>
      </p>
      <p>&copy; {{ currentYear }} Dog&amp;Comb. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
