<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal">
      <h2>Agregar Nueva Tarjeta</h2>
      <!-- Previsualización de la tarjeta -->
      <div class="card-preview" :style="{ backgroundColor: newCard.color }">
        <div class="card-content">
          <div class="card-bank">{{ newCard.bank || 'Banco' }}</div>
          <div class="card-number">{{ newCard.number || '0000 0000 0000 0000' }}</div>
          <div class="card-holder">{{ newCard.holder || 'Nombre Titular' }}</div>
          <div class="card-footer">
            <span>{{ newCard.expiry || 'MM/YY' }}</span>
            <span class="card-cvv">{{ newCard.cvv || '*CVV' }}</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="submitForm">
        <!-- Form fields -->
        <div class="form-field">
          <label for="number">Número de Tarjeta</label>
          <input
            v-model="newCard.number"
            id="number"
            maxlength="19"
            placeholder="0000 0000 0000 0000"
            @input="formatCardNumber"
          />
          <span v-if="errors.number" class="error-message">{{ errors.number }}</span>
        </div>

        <div class="form-field">
          <label for="holder">Titular</label>
          <input
            v-model="newCard.holder"
            id="holder"
            placeholder="Nombre del titular"
            required
          />
          <span v-if="errors.holder" class="error-message">{{ errors.holder }}</span>
        </div>

        <div class="form-field">
          <label for="expiry">Fecha de Expiración</label>
          <input
            v-model="newCard.expiry"
            id="expiry"
            placeholder="MM/YY"
            maxlength="5"
            @input="formatExpiryDate"
          />
          <span v-if="errors.expiry" class="error-message">{{ errors.expiry }}</span>
        </div>

        <div class="form-field">
          <label for="cvv">CVV</label>
          <input
            v-model="newCard.cvv"
            id="cvv"
            maxlength="3"
            placeholder="CVV"
            @input="formatCVV"
          />
          <span v-if="errors.cvv" class="error-message">{{ errors.cvv }}</span>
        </div>

        <div class="form-field">
          <label for="color">Color</label>
          <input v-model="newCard.color" id="color" type="color" />
        </div>

        <button type="submit" class="submit-button">Agregar Tarjeta</button>
        <button type="button" @click="closeModal" class="cancel-button">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserCardsStore } from '@/stores/CardsStore';

const props = defineProps({
  isVisible: Boolean,
});
const emit = defineEmits(['close']);

const userCardsStore = useUserCardsStore();
const newCard = ref({
  number: '',
  holder: '',
  expiry: '',
  cvv: '',
  color: '#3498db',
});
const errors = ref({});

const formatCardNumber = (e) => {
  newCard.value.number = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ')
    .trim();
};

const formatExpiryDate = (e) => {
  newCard.value.expiry = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{1,2})?/, '$1/$2')
    .substring(0, 5);
};

const formatCVV = (e) => {
  newCard.value.cvv = e.target.value.replace(/\D/g, '').substring(0, 3);
};

const validateForm = () => {
  errors.value = {};
  if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(newCard.value.number))
    errors.value.number = 'Número de tarjeta inválido. Usa el formato: 0000 0000 0000 0000';
  if (!newCard.value.holder) errors.value.holder = 'Por favor ingresa el nombre del titular.';
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(newCard.value.expiry))
    errors.value.expiry = 'Fecha de expiración inválida. Usa el formato: MM/YY';
  if (!/^\d{3}$/.test(newCard.value.cvv))
    errors.value.cvv = 'CVV inválido. Debe contener 3 dígitos.';

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    userCardsStore.addCard({ ...newCard.value, id: Date.now() });
    resetForm();
    emit('close');
  }
};

const closeModal = () => {
  resetForm();
  emit('close');
};

const resetForm = () => {
  newCard.value = { number: '', holder: '', expiry: '', cvv: '', color: '#3498db' };
  errors.value = {};
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  color: black;
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card-preview {
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 320px;
  margin: 20px auto;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: left;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-number {
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin: 10px 0;
}

.card-holder {
  font-size: 1rem;
  margin-top: 8px;
}

.card-footer {
  display: flex;
  justify-content: flex-start;
  font-size: 0.9rem;
}

.card-cvv {
  margin-left: auto;
  bottom: 10px;
  right: 15px;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: black;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  color: black;
  font-size: 1rem;
}

input::placeholder {
  color: gray;
}

.error-message {
  color: #ff4d4f;
  font-size: 0.8rem;
}

.submit-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
}

.submit-button:hover {
  background-color: #218838;
}

.cancel-button {
  background-color: #e74c3c;
  color: white;
  padding: 12px 20px;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.cancel-button:hover {
  background-color: #c0392b;
}
</style>
