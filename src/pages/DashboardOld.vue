
<template>
  <div class="dashboard-page d-flex flex-column bg-white">
    <Navbar />
    <div class="dashboard-content pa-5 d-flex flex-column justify-center">
      <BalanceCards />
      <div class="additional-content d-flex justify-space-between mt-5" style="height: 200px;">
        <CreditCard class="credit-card-container" />
        <InvestmentSummary class="investment-summary flex-grow-2" />
      </div>
      <TransactionHistory :transactions="transactions" />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useUserDataStore } from '@/stores/userData';
import { useTransactionStore } from '@/stores/transactions';
import Navbar from '@/components/Navbar.vue';
import BalanceCards from '@/components/BalanceCards.vue';
import CreditCard from '@/components/CreditCard.vue';
import InvestmentSummary from '@/components/InvestmentSummary.vue';
import TransactionHistory from '@/components/TransactionHistory.vue';


// Acceso a las stores
const authStore = useAuthStore();
const userDataStore = useUserDataStore();
const transactionStore = useTransactionStore();

// Datos de transacciones
const transactions = transactionStore.transactions;


</script>
