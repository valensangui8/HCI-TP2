<template>
    
      <!-- Navbar (asumiendo que tienes un componente Navbar.vue) -->
      <Navbar />
      <div class="movimientos-page">
      <div class="content">
        <h1>Historial de Movimientos</h1>
  
        <!-- Barra de búsqueda -->
        <div class="search-bar">
          <input 
            v-model="searchTerm" 
            placeholder="Buscar por descripción, fecha o monto..." 
            class="search-input"
          />
          <select v-model="searchBy" class="search-select">
            <option value="description">Descripción</option>
            <option value="date">Fecha</option>
            <option value="amount">Monto</option>
          </select>
        </div>
  
        <!-- Componente TransactionHistory que muestra los movimientos filtrados -->
        <TransactionHistory :transactions="filteredTransactions" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import TransactionHistory from '@/components/TransactionHistory.vue';
  import { useTransactionStore } from '@/stores/transactions';
  
  // Acceso a la store de transacciones
  const transactionStore = useTransactionStore();
  
  // Filtro de búsqueda
  const searchTerm = ref('');
  const searchBy = ref('description');
  
  // Filtrar transacciones según la búsqueda
  const filteredTransactions = computed(() => {
    if (!searchTerm.value) return transactionStore.transactions;
  
    return transactionStore.transactions.filter(transaction => {
      const value = transaction[searchBy.value]?.toString().toLowerCase();
      return value && value.includes(searchTerm.value.toLowerCase());
    });
  });
  </script>
  
  <style scoped>
  .movimientos-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f9;
    min-height: 100vh;
  }
  
  .content {
    max-width: 800px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .search-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 10px;
    color: black;
  }
  
  .search-input {
    width: 70%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
  }
  
  .search-select {
    width: 25%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
  }
  </style>
  