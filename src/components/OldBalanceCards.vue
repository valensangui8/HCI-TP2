<template>
  <div class="balance-cards">
    <!-- Tarjetas de Balance y Gastos -->
    <div class="card">
      <h3>Tu Balance</h3>
      <div class="balance-amount">
        <p v-if="showBalance">{{ formattedBalance }}</p>
        <p v-else>****</p>
        <img
          :src="showBalance ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar saldo"
          class="toggle-eye"
          @click="toggleBalance"
        />
      </div>
    </div>

    <div class="card">
      <h3>Tus Gastos</h3>
      <p class="expense-amount">{{ formattedExpenses }}</p>
    </div>

    <!-- Operaciones: Ingresar, Cobrar, Enviar -->
    <div class="operations">
      <router-link to="/ingresar" class="operation-link">
        <div class="operation">
          <img src="@/assets/ingresar-icon.png" alt="Ingresar" class="operation-icon">
          <p>Ingresar</p>
        </div>
      </router-link>

      <router-link to="/cobrar" class="operation-link">
        <div class="operation">
          <img src="@/assets/cobrar-icon.png" alt="Cobrar" class="operation-icon">
          <p>Cobrar</p>
        </div>
      </router-link>

      <router-link to="/enviar" class="operation-link">
        <div class="operation">
          <img src="@/assets/enviar-icon.png" alt="Enviar" class="operation-icon">
          <p>Enviar</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import eyeIcon from '@/assets/eye-icon.png';
import closedEyeIcon from '@/assets/closed-eye-icon.png';
import { useUserDataStore } from '@/stores/DataStore';

const userDataStore = useUserDataStore();

const showBalance = ref(true);
const toggleBalance = () => {
  showBalance.value = !showBalance.value;
};

// Datos reactivos desde el store
const formattedBalance = computed(() => `$${userDataStore.currentBalance.toLocaleString()}`);
const formattedExpenses = computed(() => `$${userDataStore.currentExpenses.toLocaleString()}`);
</script>

<style scoped>
.balance-cards {
  display: flex;
  justify-content: space-between;
}

.card {
  background-color: #0a1a1a;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  position: relative;
}

.balance-amount {
  display: flex;
  align-items: center;
}

.balance-amount p {
  font-size: 2rem;
  margin-right: 10px;
  flex-grow: 1;
}

.expense-amount {
  font-size: 2rem;
}

.toggle-eye {
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.toggle-eye:hover {
  transform: scale(1.2);
}

.operations {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
}

.operation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a3a3a;
  padding: 20px;
  border-radius: 10px;
  width: 90px;
  height: 90px;
}

.operation p {
  color: white;
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
}

.operation-icon {
  width: 30px;
  height: 30px;
}

.operation-link {
  text-decoration: none;
  color: inherit;
}

.operation-link:hover {
  text-decoration: none;
}
</style>
