<template>
  <div>
    <Header :simple="false" />
    <HeroSection />
    <MiddleLanding />
    <InfoSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue';
import MiddleLanding from '@/components/MiddleLanding.vue';
import InfoSection from '@/components/InfoSection.vue';
import Header from '@/components/Header.vue';

</script>
