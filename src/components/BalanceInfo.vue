<template>
    <div class="balance-section">
      <p>Saldo disponible: ${{ availableBalance }}</p>
      <p>Saldo invertido: ${{ investedBalance }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    availableBalance: Number,
    investedBalance: Number
  });
  </script>
  
  <style scoped>
  .balance-section {
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  </style>
  