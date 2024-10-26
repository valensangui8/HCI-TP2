// src/stores/transactions.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from './auth';

export const useTransactionStore = defineStore('transactions', () => {
  const authStore = useAuthStore();

  const transactions = computed(() => authStore.currentUser?.transactions || []);


  function addTransaction(transaction) {
    transactions.value.push({ id: Date.now(), ...transaction });
  }

  return {
    transactions,
    addTransaction,
  };
});
