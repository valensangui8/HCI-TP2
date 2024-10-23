<template>
  <div class="dashboard-page">
    <Navbar />
    <div class="dashboard-content">
      <BalanceCards />
      <div class="additional-content">
        <CreditCard />
        <InvestmentSummary />
      </div>
      <TransactionHistory />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import BalanceCards from '@/components/BalanceCards.vue';
import CreditCard from '@/components/CreditCard.vue';
import InvestmentSummary from '@/components/InvestmentSummary.vue';
import TransactionHistory from '@/components/TransactionHistory.vue';

</script>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.dashboard-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.additional-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 200px;
}

.additional-content > * {
  flex: 1;
  margin: 0 10px;
}

.credit-card-container {
  min-height: 200px; /* Disminuir la altura de la tarjeta de crédito */
}

.investment-summary {
  flex-grow: 2; /* Hacer más ancho el Resumen de Inversiones */
}
</style>
