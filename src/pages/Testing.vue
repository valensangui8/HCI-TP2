<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <Balance />
      <Expenses />
      <deposit/>
      <Payment/>
      <Send/>
    </div>
  </template>
  
  <script setup>
  import Balance from '@/components/Balance.vue';
  import Expenses from '@/components/Expenses.vue' 
  import Deposit from '@/components/Deposit.vue' 
  import Payment from '@/components/Payment.vue'
  </script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: #f0f0f0;
}
</style>