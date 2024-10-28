<template>
  <div class="dashboard-page d-flex flex-column bg-background text-text">
    <Navbar />
    <div class="dashboard-content pa-5 d-flex flex-column justify-center bg-surface text-text">
      <BalanceCards />
      <div class="additional-content d-flex justify-space-between mt-5" style="height: 200px;">
        <CreditCard class="credit-card-container text-white" />
        <InvestmentSummary
          class="investment-summary flex-grow-2 text-white"
          :netGains="authStore.investBalance"
          :investedData="investmentData"
        />
      </div>
      <TransactionHistory :transactions="transactions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useUserDataStore } from '@/stores/DataStore';
import { useTransactionStore } from '@/stores/transactions';
import Navbar from '@/components/Navbar.vue';
import BalanceCards from '@/components/BalanceCards.vue';
import CreditCard from '@/components/CreditCard.vue';
import InvestmentSummary from '@/components/InvestmentSummary.vue';
import TransactionHistory from '@/components/TransactionHistory.vue';

const authStore = useAuthStore();
const userDataStore = useUserDataStore();
const transactionStore = useTransactionStore();

const transactions = transactionStore.transactions;


</script>
