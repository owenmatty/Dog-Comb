<template>
  <header class="sticky top-0 z-20 border-b border-ink/10 bg-canvas/95 backdrop-blur">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main Navigation">
      <a href="#home" class="text-xl font-bold tracking-tight text-ink">Dog&amp;Comb</a>

      <ul class="hidden items-center gap-6 text-sm font-medium text-ink/80 md:flex">
        <li><a href="#home" class="transition hover:text-ink">Home</a></li>
        <li><a href="#services" class="transition hover:text-ink">Services</a></li>
        <li><a href="#about" class="transition hover:text-ink">About</a></li>
        <li><a href="#contact" class="transition hover:text-ink">Contact</a></li>
      </ul>

      <a
        href="#contact"
        class="rounded-2xl bg-ink px-4 py-2 text-sm font-semibold text-canvas shadow-soft transition hover:-translate-y-0.5 hover:opacity-95"
      >
        Book Appointment
      </a>
    </nav>
  </header>
</template>
