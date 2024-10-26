<template>
  <div class="dashboard-page">
    <Sidebar />
    <div class="dashboard-content">
      <div class="dashboard-header">
        <h1>Vista General</h1>
        <div class="greeting">
          <h2 class="hello">Bienvenido, </h2>
          <h2 class="name">{{username}}!</h2>
        </div>  
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <div class="Urna">
            <div class="urna-header">
              <h1 class="section-header">Tu Urna</h1>
              <p class="urna-description">¿Qué es mi Urna?</p>
            </div>
            <v-row>
              <v-col cols="6">
                <BalanceCard :balance="balance" :showBalance="showBalance" @update:showBalance="showBalance = $event" />
              </v-col>
              <v-col cols="6">
                <ExpenseCard :expenses="expenses" />
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="8" md="6">
          <div class="operations">
            <h1 class="section-header">Operaciones</h1>
            <v-row>
              <v-col cols="4">
                <div class="operation">
                  <Ingresar />
                  <h2 class="operation-title">Ingresar</h2>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="operation">
                  <Cobrar />
                  <h2 class="operation-title">Cobrar</h2>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="operation">
                  <Enviar />
                  <h2 class="operation-title">Enviar</h2>
                </div>
              </v-col>
            </v-row>
            <div class="op-leyend">
              <p>Cualquier transacción de dinero en Poty es resguardada y asegurada a través de nuestra Urna.</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <div class="credit-card-container">
            <h1 class="section-header">Tus Tarjetas</h1>
            <CreditCard />
          </div>
        </v-col>
        <v-col cols="9">
          <div class="investment-summary-container">
            <h1 class="section-header">Resumen Inversiones</h1>
            <InvestmentSummary />
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="movements-container">
            <h1 class="section-header">Historial de Movimientos</h1>
            <TransactionHistory />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'; // Importing ref for reactive data
import Sidebar from '@/components/Sidebar.vue';
import BalanceCard from '@/components/Balance.vue';
import ExpenseCard from '@/components/Expense.vue';
import Cobrar from '@/components/Cobrar.vue';
import Enviar from '@/components/Enviar.vue';
import Ingresar from '@/components/Ingresar.vue';
import CreditCard from '@/components/CreditCard.vue';
import InvestmentSummary from '@/components/InvestmentSummary.vue';
import TransactionHistory from '@/components/TransactionHistory.vue';

export default {
  name: 'Urna',
  components: {
    Sidebar,
    BalanceCard,
    ExpenseCard,
    Cobrar,
    Enviar,
    Ingresar,
    CreditCard,
    InvestmentSummary,
    TransactionHistory,
  },
  setup() {
    const balance = ref('$12,750.60');
    const showBalance = ref(true);
    const expenses = ref('$5,300.00');
    const username = 'James Bond';
    return {
      balance,
      showBalance,
      expenses,
      username,
    };
  },
};
</script>

<style scoped>
/* Basic page layout styling */
.dashboard-page {
  display: flex;
  background-color: #FFFFFF; /* Set background to white */
  height: 100%;
  color: #001E18; /* Change text color to dark for contrast */
}

/* Main content area */
.dashboard-content {
  flex: 1;
  padding: 30px;
}

/* Styling for each row */
.card-title, .op-item-title {
  text-align: center;
  margin-top: 10px;
}

.op-leyend {
  margin-top: 10px;
  font-size: 12px;
  color: #333;
}

.urna-header {
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos */
  justify-content: flex-start; /* Alinea los elementos al inicio sin espacio extra */
}

.urna-description {
  font-size: 1.0rem;
  color: #666; 
  margin-top: 10px;
  margin-left: 10px;
}

.operations {
  display: flex;
  flex-direction: column; 
  align-items: left; 
}

.operation {
  display: flex;
  flex-direction: column; 
  align-items: left; 
  border-radius: 10px; 
  padding-left: 10px; 
  padding-right: 0px;
  width: 100%; 
}

.operation-title {
  padding-left: px; /* Check if you want to add padding */
}

.dashboard-header {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 30px;
  margin-top: 5px;
}

.section-header {
  display: flex;
  align-items: left;
}
.greeting {
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos */
  justify-content: flex-start; /* Alinea los elementos al inicio sin espacio extra */
}
.hello {
  font-weight:normal
}
</style>
