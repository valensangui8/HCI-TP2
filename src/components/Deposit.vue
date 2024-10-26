<template>
  <div class="deposit-modal">
    <button class="close-button" @click="$emit('close')">X Cerrar</button>
    <h2>Ingresar Dinero</h2>
    <div class="payment-method-section">
      <h3>Método de Pago</h3>
      <div class="card">
        <span>Banco Royale</span>
        <span class="card-number">0000 0000 0000 0000</span>
        <span>James Bond</span>
        <span>03/30</span>
      </div>
    </div>
    <div class="amount-input">
      <label>Por favor, ingrese la cantidad a ingresar</label>
      <input type="number" v-model.number="amount" placeholder="0,00$" />
    </div>
    <button @click="submitAmount" class="submit-button">Enviar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserDataStore } from '@/stores/userData';

const amount = ref(0);
const userDataStore = useUserDataStore();

function submitAmount() {
  if (amount.value > 0) {
    userDataStore.updateBalance(amount.value);
    amount.value = 0; // Reset amount after submission
  } else {
    alert("Please enter a valid amount.");
  }
}
</script>

<style scoped>
.deposit-modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.2em;
  color: #888;
  cursor: pointer;
  align-self: flex-end;
}

h2 {
  margin-bottom: 10px;
}

.payment-method-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.card {
  background: #4a4a4a;
  color: white;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  text-align: center;
}

.card-number {
  font-size: 1.2em;
  margin: 10px 0;
}

.amount-input {
  margin: 20px 0;
}

.amount-input label {
  display: block;
  margin-bottom: 5px;
}

input[type="number"] {
  width: 100%;
  padding: 10px;
  font-size: 1.2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.submit-button {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
