<template>
  <div class="deposit-modal">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">Cerrar</button>
      <h2>Ingresar Dinero</h2>
      <div class="payment-method">
        <p>Método de Pago</p>
        <CreditCard />
      </div>
      <label>Por favor, ingrese la cantidad a ingresar</label>
      <input v-model="amount" type="number" placeholder="0,00$" />
      <button @click="submitDeposit">Enviar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreditCard from '@/components/CreditCard.vue';

const amount = ref(0);

const submitDeposit = () => {
  alert(`Deposit submitted: $${amount.value}`);
  amount.value = 0; // Reset amount after submission
};
</script>

<style scoped>
.deposit-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
