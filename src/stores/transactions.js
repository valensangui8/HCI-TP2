// stores/transactions.js
import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    transactions: [
      { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' },
      { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' }
    ],
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
    clearTransactions() {
      this.transactions = [];
    }
  }
});
