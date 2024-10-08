<template>
  <div>
    <HeroSection />
    <MiddleLanding />
    <InfoSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import MiddleLanding from '@/components/MiddleLanding.vue';
import InfoSection from '@/components/InfoSection.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    MiddleLanding,
    InfoSection,
  },
};
</script>
