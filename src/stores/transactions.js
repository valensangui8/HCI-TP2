// src/stores/transactions.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTransactionStore = defineStore('transactions', () => {
  const transactions = ref([
    { id: 1, amount: '$200.00', date: '2023-10-01', description: 'Compra en supermercado' },
    { id: 2, amount: '$50.00', date: '2023-10-02', description: 'Taxi' },
    { id: 3, amount: '$150.00', date: '2023-10-03', description: 'Pago de suscripción' },
    { id: 4, amount: '$100.00', date: '2023-10-04', description: 'Compra en línea' },
    {id: 5, amount: '$200.00', date: '2023-10-01', description: 'Transferencia' },
    {id: 6, amount: '$500.00', date: '2023-10-02', description: 'Uber' },
    {id: 7, amount: '$1500.00', date: '2023-10-03', description: 'ITBA' },
    {id: 8, amount: '$125.00', date: '2023-10-04', description: 'HCI' },
    // Agrega más transacciones de ejemplo si es necesario
  ]);

  function addTransaction(transaction) {
    transactions.value.push({ id: Date.now(), ...transaction });
  }

  return {
    transactions,
    addTransaction,
  };
});
