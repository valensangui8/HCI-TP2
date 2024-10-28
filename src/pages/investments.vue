<template>
  <div class="investments-page">
    <Navbar />

    <div class="content">
      <h1>Inversiones</h1>
      <BalanceInfo :availableBalance="availableBalance" :investedBalance="investedBalance" />

      <div class="main-content">
        <InvestmentForm />
        <InvestmentSummary :netGains="netGains" :investedData="investedData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import Navbar from '@/components/Navbar.vue';
import BalanceInfo from '@/components/BalanceInfo.vue';
import InvestmentForm from '@/components/InvestmentForm.vue';
import InvestmentSummary from '@/components/InvestmentSummary.vue';

const authStore = useAuthStore();

const availableBalance = computed(() => authStore.currentUser?.balance || 0);
const investedBalance = computed(() => authStore.currentUser?.investedBalance || 0);
const netGains = computed(() => authStore.netGains); // Lee el valor reactivo directamente de authStore
const investedData = computed(() => authStore.currentUser?.investmentData || []);

</script>

<style scoped>
.investments-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.main-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
