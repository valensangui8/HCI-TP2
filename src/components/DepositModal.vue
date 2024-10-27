<template>
  <div class="overlay" v-if="visible" @click.self="closeModal">
    <div class="down-sheet">
      <h2>Ingresar Dinero</h2>
      <div class="components container">
        <div class="creditcard-container">
          <CreditCard />
        </div>
        <label>Por favor, ingrese el monto a ingresar</label>
        <div class="form-fields">
          <v-text-field
            v-model.number="amount"
            type="number"
            label="Monto ($)"
            placeholder="Ingrese el monto"
            prepend-icon="mdi-cash"
            :rules="[value => !!value || 'El monto es obligatorio']"
            required
            class="input"
          />
        </div>
        <v-btn @click="submitDeposit" :disabled="amount <= 0" class="custom-btn">Ingresar</v-btn>
      </div>
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
  amount.value = 0; 
  closeModal();
};

const closeModal = () => {
  emit('close'); 
};
</script>



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
  border-radius: 10px;
  animation: slide-up 0.3s ease-out;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  
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
.components-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  
  gap: 15px;
  
}
.creditcard-container {
  margin-bottom: 20px; 
  
}
.custom-btn{
    background-color: #001E18;
    color:white;
    border-radius: 10px;
    padding:5px;
    margin-left:80px;
}
.h2{
  color: black;
}
</style>
