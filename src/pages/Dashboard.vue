<template>
    <div class="dashboard-page">
      <Navbar />
      <div class="dashboard-content">
        <v-row>
          <v-col cols="12" md="6">
            <div class="Urna">
              <div class="urna-header">
                <h1 class="section-header"> Saldos </h1>
                <!-- <p class="urna-description">¿Qué es mi Urna?</p> -->
              </div>
              <v-row>
                <v-col cols="4">
                  <div class="balance-container">
                    <Balance/>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="balance-container">
                    <Expenses/>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="4" md="6">
            <div class="operations">
              <h1 class="section-header">Operaciones</h1>
              <div class="operations-container">
              <v-row>
                <v-col cols="1.3">
                  <div class="operation">
                    <Deposit />
                  </div>
                </v-col>
                <v-col cols="1.3">
                  <div class="operation">
                    <Payment />
                  </div>
                </v-col>
                <v-col cols="1.3">
                  <div class="operation">
                    <Send/>
                  </div>
                </v-col>
              </v-row>
            </div>
            </div>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="3">
            <h1 class="section-header">Tus Tarjetas</h1>
            <div class="credit-card-container">
              <CreditCard />
            </div>
          </v-col>
          <v-col cols="9">
            <div class="investment-summary-container">
              <h1 class="section-header">Resumen Inversiones</h1>
              <InvestmentSummary
                class="investment-summary flex-grow-2 text-white"
                :netGains="authStore.investBalance"
                :investedData="investmentData"
                />
            </div>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12">
            <div class="movements-container">
              <h1 class="section-header">Historial de Movimientos</h1>
              <TransactionHistory :transactions="transactions"/>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  
  
  <script setup>
    import { useAuthStore } from '@/stores/authStore';
    import { useUserDataStore } from '@/stores/DataStore';
    import { useTransactionStore } from '@/stores/transactions';
    import Navbar from '@/components/Navbar.vue';
    import CreditCard from '@/components/CreditCard.vue';
    import InvestmentSummary from '@/components/InvestmentSummary.vue';
    import TransactionHistory from '@/components/TransactionHistory.vue';

    const authStore = useAuthStore();
    const userDataStore = useUserDataStore();
    const transactionStore = useTransactionStore();

    const transactions = transactionStore.transactions;
  </script>
  
  <style scoped>
  .balance-container {
    margin-left: 2vw;
    margin-bottom: 2vw;

  }
  /* Styling for each row */
  .card-title, .op-item-title {
    text-align: center;
    margin-top: 1vw;
  }
  
  .op-leyend {
    margin-top: 3vw;
    margin-left:3vw;
    font-size: 1vw;
    color: #333;
  }
  
  .urna-header {
    display: flex;
    align-items: center; /* Alinea verticalmente los elementos */
    justify-content: flex-start; /* Alinea los elementos al inicio sin espacio extra */
  }
  
  .urna-description {
    font-size: 0.8vw;
    color: #666; 
    margin-top: 1vw;
    margin-left: 1vw;
  }
  .operations{  
    margin-left: 3vw;
    align-items: left; 

  }
  .operations-container {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    margin-bottom:1.8vw;
  }
  
  .operation {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    border-radius: 1vw; 
    margin-top: 1vw;
    width: 100%; 
  }
  
  .section-header {
    display: flex;
    align-items: left;
    font-size: 1.5vw;
    margin-top: 1vw;
    margin-left:2vw
  }
  .greeting {
    display: flex;
    align-items: center; 
    justify-content: flex-start;
  }
  .hello {
    font-weight:normal
  }
  .operation-title {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .credit-card-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 2vw;
  }
  .investment-summary-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left:3.8vw;
  }
  </style>
  
  