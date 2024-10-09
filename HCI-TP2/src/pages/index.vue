<template>
  <div>
    <Header />
    <HeroSection />
    <MiddleLanding />
    <InfoSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import MiddleLanding from '@/components/MiddleLanding.vue';
import InfoSection from '@/components/InfoSection.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    MiddleLanding,
    InfoSection,
    Header,
  },
};
</script>
