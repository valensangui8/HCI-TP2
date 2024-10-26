<template>
    <v-container fluid>
      <v-row>
          <Sidebar /> 
        <v-col cols="10">
          <h1>Test</h1>
          <BalanceCard :balance="balance" :showBalance="showBalance" @update:showBalance="showBalance = $event" />
          <ExpenseCard :expenses="expenses" />
          <Cobrar/>
          <Ingresar/>
          <Enviar/>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import BalanceCard from '@/components/Balance.vue'; 
  import ExpenseCard from '@/components/Expense.vue';
  import Enviar from '@/components/Enviar.vue'; // Import the new component
  import Ingresar from '@/components/Ingresar.vue'; // Import the new component
  import Sidebar from '@/components/Sidebar.vue';
  import Cobrar from '@/components/Cobrar.vue'; // Import the new component
  export default {
    name: 'Test',
    components: {
      BalanceCard,
      ExpenseCard,
      Enviar, // Register the new component
      Ingresar,
      Cobrar,
      Sidebar,
        
    },
    data() {
      return {
        balance: '$12.750,60',
        showBalance: true,
        expenses: '$5.300,00', // Define your expenses here
      };
    },
  };
  </script>
  