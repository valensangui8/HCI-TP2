<template>
  <div class="overlay" v-if="visible" @click.self="closeModal">
    <div class="down-sheet">
      <h2 style="color: black;">Ingresar Dinero</h2>
      <div class="creditcard-container">
        <CreditCard />
      </div>
      <label>Por favor, ingrese la cantidad a ingresar</label>
      <input v-model="amount" type="number" placeholder="0,00$" />
      <button @click="submitDeposit">Enviar</button>
      <button class="close-button" @click="$emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreditCard from '@/components/CreditCard.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);
const amount = ref(0);

const submitDeposit = () => {
  alert(`Deposit submitted: $${amount.value}`);
  amount.value = 0; 
};

const closeModal = () => {
  emit('close'); 
};
</script>

<template>
  <div v-if="props.visible">
    <CreditCard />
    <input v-model="amount" type="number" placeholder="Enter amount" />
    <button @click="submitDeposit">Submit Deposit</button>
    <button @click="closeModal">Close</button>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
}
.down-sheet {
  width: 100%;
  max-width: 700px;
  background-color: white;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 10px 10px 0 0;
  animation: slide-up 0.3s ease-out;
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
@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
