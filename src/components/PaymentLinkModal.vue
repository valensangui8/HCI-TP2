<template>
  <div class="overlay" v-if="isVisible" @click.self="closeModal">
    <div class="down-sheet">
      <h2>Generar Enlace de Pago</h2>
      <div class="components-container">
        
        <!-- Amount Input Field -->
        <label for="amount">Por favor, ingrese el monto a cobrar</label>
        <div class="form-fields">
          <v-text-field
            v-model="amount"
            type="text"
            label="Monto ($)"
            placeholder="Ingrese el monto"
            prepend-icon="mdi-cash"
            :rules="[value => !!value || 'El monto es obligatorio']"
            required
            class="input"
            @input="formatAmount"
          />
        </div>

        <!-- Action Buttons -->
        <div v-if="!paymentLink" class="action-buttons">
          <v-btn @click="generateLink" :disabled="amount <= 0" class="custom-btn">Generar Enlace</v-btn>
        </div>
        
        <!-- Display Payment Link and Sharing Options -->
        <div v-if="paymentLink">
          <p>Enlace de Pago:</p>
          <div class="payment-link">{{ paymentLink }}</div>
          <div class="action-buttons">
            <v-btn @click="closeModal" class="cancel-button">Cerrar</v-btn>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: Boolean,
});
const emit = defineEmits(['close']);
const router = useRouter();

const amount = ref('');
const paymentLink = ref(null);

const formatAmount = () => {
  amount.value = amount.value.replace(/[^0-9]/g, '');
};

const generateLink = () => {
  if (amount.value) {
    paymentLink.value = `https://linkpagopoty-${Math.floor(Math.random() * 1000)}.com`;
  }
};



const closeModal = () => {
  amount.value = '';
  paymentLink.value = null;
  emit('close');
};

const cancel = () => {
  closeModal();
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.components-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.form-fields {
  width: 100%;
  max-width: 500px; /* Same width as other elements */
}

.input .v-text-field__slot {
  width: 100%;
}

.payment-link {
  padding: 10px;
  background-color: #f0f0f5;
  border-radius: 5px;
  word-break: break-all;
  margin: 10px 0;
  color: #333;
}

.custom-btn {
  background-color: #001E18;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-btn:hover {
  background-color: #218838;
}

.cancel-button {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: #c0392b;
}

.share-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.share-button:hover {
  background-color: #0056b3;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
  gap: 15px;
}
</style>
