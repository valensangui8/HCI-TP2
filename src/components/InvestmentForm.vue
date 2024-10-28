<template>
    <div class="actions-section">
      <h2>Realizar Inversión</h2>
      <input type="number" v-model="investmentAmount" placeholder="Monto a invertir" />
      <button @click="investFunds">Invertir</button>
  
      <h2>Rescatar Inversión</h2>
      <input type="number" v-model="withdrawalAmount" placeholder="Monto a retirar" />
      <button @click="withdrawFunds">Retirar</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/authStore';
  
  const authStore = useAuthStore();
  const investmentAmount = ref(0);
  const withdrawalAmount = ref(0);
  
  const investFunds = () => {
  if (investmentAmount.value > 0 && investmentAmount.value <= authStore.currentUser.balance) {
    authStore.investBalance(investmentAmount.value);
    investmentAmount.value = 0; // Restablecer el monto
    
  } else {
    alert('Monto no válido o insuficiente.');
  }
};

  
  const withdrawFunds = () => {
    if (withdrawalAmount.value > 0 && withdrawalAmount.value <= authStore.currentUser.investedBalance) {
      authStore.withdrawInvestment(withdrawalAmount.value);
      withdrawalAmount.value = 0;
      alert('Retiro de inversión realizado con éxito.');
    } else {
      alert('Monto no válido o insuficiente.');
    }
  };
  </script>
  
  <style scoped>
  .actions-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    margin-top: 5px;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  