<template>
  <div class="balance-cards">
    <!-- Balance Card -->
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

    <!-- Expenses Card with Toggle -->
    <div class="card">
      <h3>Tus Gastos</h3>
      <div class="balance-amount">
        <p v-if="showExpenses">{{ formattedExpenses }}</p>
        <p v-else>****</p>
        <img
          :src="showExpenses ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar gastos"
          class="toggle-eye"
          @click="toggleExpenses"
        />
      </div>
    </div>

     <!-- Operations Section -->
  <div class="operations">
    <!-- Botón para abrir el modal de "Ingresar" -->
      <!-- Botón para abrir el modal de "Ingresar" -->
      <div class="operation-link" @click="showDepositModal = true">
      <div class="operation">
        <img src="@/assets/ingresar-icon.png" alt="Ingresar" class="operation-icon">
        <p>Ingresar</p>
      </div>
    </div>

    <!-- Modal de Ingreso de Dinero -->
    <DepositModal :visible="showDepositModal" @close="showDepositModal = false" />
  

    <!-- Botón para abrir el modal de "Cobrar" -->
    <div @click="toggleModal" class="operation-link">
      <div class="operation">
        <img src="@/assets/cobrar-icon.png" alt="Cobrar" class="operation-icon">
        <p>Cobrar</p>
      </div>
    </div>

    <!-- Modal para el enlace de pago -->
    <PaymentLinkModal :isVisible="isModalVisible" @close="toggleModal" />

    <!-- Botón para abrir el modal de "Enviar" -->
    <div class="operation" @click="sendModalVisible = true">
      <img src="@/assets/enviar-icon.png" alt="Enviar" class="operation-icon">
      <p>Enviar</p>
    </div>
  </div>

  <!-- Modales -->
  <DepositModal v-if="showDepositModal" @close="showDepositModal = false" />
  <SendModal v-model:visible="sendModalVisible" />
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import eyeIcon from '@/assets/eye-icon.png';
import closedEyeIcon from '@/assets/closed-eye-icon.png';
import { useAuthStore } from '@/stores/authStore';
import SendModal from './SendModal.vue';
import PaymentLinkModal from '@/components/PaymentLinkModal.vue';

import DepositModal from '@/components/DepositModal.vue';


const showDepositModal = ref(false);
const isModalVisible = ref(false);

// Función para alternar la visibilidad del modal
const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
};



const authStore = useAuthStore();

// Balance visibility toggle
const showBalance = ref(true);
const toggleBalance = () => {
  showBalance.value = !showBalance.value;
};

// Expenses visibility toggle
const showExpenses = ref(true);
const toggleExpenses = () => {
  showExpenses.value = !showExpenses.value;
};

// Computed balance and expenses formatting
const formattedBalance = computed(() => {
  const balance = authStore.currentUser?.balance || 0;
  return `$${balance.toFixed(2)}`;
});

const formattedExpenses = computed(() => {
  const expenses = authStore.currentUser?.expenses || 0;
  return `$${expenses.toLocaleString()}`;
});

// Control SendModal visibility
const sendModalVisible = ref(false);
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
  cursor: pointer;
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

.operation:hover {
  transform: scale(1.05);
}
</style>
