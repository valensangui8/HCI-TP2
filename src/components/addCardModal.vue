<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal">
        <h2>Agregar Nueva Tarjeta</h2>
  
        <!-- Previsualización de la tarjeta -->
        <div class="card-preview" :style="{ backgroundColor: newCard.color }">
          <div class="card-content">
            <div class="card-header">
              <img src="@/assets/LogoPotty.png" alt="Banco Logo" class="bank-logo" />
              <h4>{{ newCard.bank || 'Banco Ejemplo' }}</h4>
            </div>
            <div class="card-number">{{ newCard.number || '0000 0000 0000 0000' }}</div>
            <div class="card-footer">
              <span>{{ newCard.holder || 'Nombre Titular' }}</span>
              <span>{{ newCard.expiry || 'MM/YY' }}</span>
            </div>
          </div>
        </div>
  
        <form @submit.prevent="submitForm">
          <div class="form-field">
            <label for="bank">Banco</label>
            <input v-model="newCard.bank" id="bank" required />
            <span v-if="errors.bank" class="error-message">{{ errors.bank }}</span>
          </div>
  
          <div class="form-field">
            <label for="number">Número de Tarjeta</label>
            <input v-model="newCard.number" id="number" maxlength="19" placeholder="0000 0000 0000 0000" />
            <span v-if="errors.number" class="error-message">{{ errors.number }}</span>
          </div>
  
          <div class="form-field">
            <label for="holder">Titular</label>
            <input v-model="newCard.holder" id="holder" required />
            <span v-if="errors.holder" class="error-message">{{ errors.holder }}</span>
          </div>
  
          <div class="form-field">
            <label for="expiry">Fecha de Expiración</label>
            <input v-model="newCard.expiry" id="expiry" placeholder="MM/YY" />
            <span v-if="errors.expiry" class="error-message">{{ errors.expiry }}</span>
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
  import { useUserCardsStore } from '@/stores/userCards';
  
  const props = defineProps({
    isVisible: Boolean,
  });
  const emit = defineEmits(['close']);
  
  const userCardsStore = useUserCardsStore();
  const newCard = ref({
    bank: '',
    number: '',
    holder: '',
    expiry: '',
    color: '#3498db',
  });
  const errors = ref({});
  
  const validateForm = () => {
    errors.value = {};
  
    // Validación del banco
    if (!newCard.value.bank) {
      errors.value.bank = 'Por favor ingresa el nombre del banco.';
    }
  
    // Validación del número de tarjeta (16 dígitos)
    const numberPattern = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
    if (!newCard.value.number.match(numberPattern)) {
      errors.value.number = 'Número de tarjeta inválido. Usa el formato: 0000 0000 0000 0000';
    }
  
    // Validación del titular de la tarjeta
    if (!newCard.value.holder) {
      errors.value.holder = 'Por favor ingresa el nombre del titular.';
    }
  
    // Validación de la fecha de expiración (MM/YY)
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!newCard.value.expiry.match(expiryPattern)) {
      errors.value.expiry = 'Fecha de expiración inválida. Usa el formato: MM/YY';
    }
  
    return Object.keys(errors.value).length === 0;
  };
  
  const submitForm = () => {
    if (validateForm()) {
      userCardsStore.addCard({ ...newCard.value, id: Date.now() });
      resetForm();
      emit('close'); // Cerrar el modal después de la creación
    }
  };
  
  const closeModal = () => {
    resetForm();
    emit('close');
  };
  
  const resetForm = () => {
    newCard.value = { bank: '', number: '', holder: '', expiry: '', color: '#3498db' };
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
    background: rgba(0, 0, 0, 0.8); /* Fondo negro con opacidad */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: #1a1a1a; /* Fondo negro */
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 350px;
    max-width: 100%;
    text-align: center;
  }
  
  .card-preview {
    color: white;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
    margin: 15px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .bank-logo {
    width: 30px;
    height: auto;
  }
  
  .card-number {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin: 10px 0;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }
  
  .form-field {
    margin-bottom: 10px;
  }
  
  .form-field label {
    display: block;
    margin-bottom: 5px;
    color: white;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid white; /* Borde blanco */
    background-color: transparent; /* Fondo transparente */
    color: white;
  }
  
  .error-message {
    color: red;
    font-size: 0.8rem;
  }
  
  .submit-button {
    background-color: #28a745; /* Botón verde */
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .cancel-button {
    background-color: #f44336;
    color: white;
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  </style>
  