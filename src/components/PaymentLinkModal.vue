<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal">
        <h2>Generar Enlace de Pago</h2>
  
        <!-- Campo para ingresar el monto a cobrar -->
        <div class="form-field">
          <label for="amount">Monto a Cobrar</label>
          <div class="input-wrapper">
            <span class="currency-symbol">$</span>
            <input
              type="text"
              id="amount"
              v-model="amount"
              @input="formatAmount"
              placeholder="Ingresa el monto"
            />
          </div>
        </div>
  
        <!-- Mostrar el enlace generado o el botón para generarlo -->
        <div v-if="paymentLink">
          <p>Enlace de Pago:</p>
          <div class="payment-link">{{ paymentLink }}</div>
        </div>
        <button v-else @click="generateLink" class="submit-button">Generar Enlace</button>
  
        <!-- Botones de Compartir y Cerrar después de generar el enlace -->
        <div v-if="paymentLink" class="action-buttons">
          <button @click="shareLink" class="share-button">Compartir</button>
          <button @click="closeModal" class="cancel-button">Cerrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    isVisible: Boolean,
  });
  const emit = defineEmits(['close']);
  
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
  
  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Enlace de Pago',
        text: 'Aquí tienes el enlace para realizar el pago:',
        url: paymentLink.value,
      }).catch(console.error);
    } else {
      alert("Tu navegador no soporta la función de compartir.");
    }
  };
  
  const closeModal = () => {
    // Reiniciar los valores del modal al cerrarlo
    amount.value = '';
    paymentLink.value = null;
    emit('close');
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
    background: #ffffff;
    color: black;
    padding: 30px;
    border-radius: 10px;
    width: 500px;
    max-width: 90%;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .form-field {
    position: relative;
    margin-bottom: 20px;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  .currency-symbol {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.1rem;
    color: gray;
  }
  
  input {
    width: 100%;
    padding: 12px 12px 12px 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1.1rem;
  }
  
  .payment-link {
    padding: 10px;
    background-color: #f0f0f5;
    border-radius: 5px;
    word-break: break-all;
    margin: 10px 0;
    color: #333;
  }
  
  .submit-button,
  .cancel-button,
  .share-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 12px 20px;
    margin-top: 15px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #218838;
  }
  
  .cancel-button {
    background-color: #e74c3c;
  }
  
  .cancel-button:hover {
    background-color: #c0392b;
  }
  
  .action-buttons {
    display: flex;
    justify-content: space-around;
    gap: 15px;
  }
  </style>
  