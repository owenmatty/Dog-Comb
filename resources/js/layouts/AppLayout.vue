<template>
  <div class="min-h-screen bg-canvas">
    <Navbar />

    <main>
      <HeroSection id="home" />

      <section id="services" class="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <header class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-ink">Our Grooming Services</h2>
          <p class="mx-auto mt-3 max-w-2xl text-base text-ink/80">
            Thoughtfully tailored care for every coat type and personality.
          </p>
        </header>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Full Grooming"
            description="A complete head-to-tail pampering session including wash, trim, blow-dry, and style."
            icon="✂️"
            card-tone="bg-primary/70"
          />
          <ServiceCard
            title="Bath & Brush"
            description="A soothing bath, coat conditioning, and gentle brushing for a fresh, clean finish."
            icon="🛁"
            card-tone="bg-secondary/80"
          />
          <ServiceCard
            title="Nail Trim & Spa"
            description="Careful nail clipping and paw spa treatment to keep your dog comfortable and happy."
            icon="🐾"
            card-tone="bg-accent/70"
          />
        </div>
      </section>

      <AboutSection id="about" />
      <ContactCta id="contact" />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import AboutSection from '@/pages/AboutSection.vue';
import ContactCta from '@/pages/ContactCta.vue';
import HeroSection from '@/pages/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import { useSeoMeta } from '@/composables/useSeoMeta';

useSeoMeta('Dog&Comb | Gentle Grooming for Happy Dogs');
</script>
