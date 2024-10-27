<template>
    <div class="overlay" v-if="isVisible" @click.self="closeSheet">
      <div class="down-sheet">
        <h2  style="color: black;">Agregar Tarjeta</h2>
        <form class="form-fields" @submit.prevent="submitCard">
          <label>
            Número de tarjeta
            <input 
              v-model="cardNumber" 
              placeholder="0000 0000 0000 0000"
              maxlength="16"
              pattern="\d*"
            />
          </label>
  
          <label>
            Nombre del titular
            <input 
              v-model="cardHolder" 
              placeholder="Nombre Apellido"
            />
          </label>
  
          <label>
            Fecha de expiración
            <input 
              v-model="expiryDate" 
              placeholder="MM/AA"
              maxlength="5"
            />
          </label>
  
          <label>
            CVV
            <input 
              v-model="cvv" 
              placeholder="123"
              maxlength="3"
              pattern="\d*"
              type="password"
            />
          </label>
  
          <button type="submit" class="save-button">
            Guardar Tarjeta
          </button>
        </form>
  
        <div class="card-preview" :style="{ backgroundColor: '#001E18' }">
          <div class="card-header">
            <img src="@/assets/LogoPotty.png" alt="Logo" class="bank-logo">
          </div>
          <div class="card-number">{{ formattedCardNumber }}</div>
          <div class="card-footer">
            <span>{{ cardHolder || 'Nombre del Titular' }}</span>
            <span>{{ expiryDate || 'MM/AA' }}</span>
          </div>
          <div class="cvv-display">CVV: ***</div>
        </div>
      </div>
    </div>
  </template>
<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'AddCardForm',
  props: {
    isVisible: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, { emit }) {
    const router = useRouter();
    const cardNumber = ref('');
    const cardHolder = ref('');
    const expiryDate = ref('');
    const cvv = ref('');

    const formattedCardNumber = computed(() => {
      return cardNumber.value
        ? cardNumber.value.replace(/(.{4})/g, '$1 ').trim()
        : 'XXXX XXXX XXXX XXXX';
    });

    const submitCard = () => {
      alert('Tarjeta guardada correctamente.');
      const cardInfo = {
        number: cardNumber.value,
        holder: cardHolder.value,
        expiry: expiryDate.value,
        cvv: cvv.value,
      };
      router.push('/Urna');
      emit('close');
    };

    const closeSheet = () => {
      emit('close');
    };

    return {
      cardNumber,
      cardHolder,
      expiryDate,
      cvv,
      formattedCardNumber,
      submitCard,
      closeSheet
    };
  }
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
    max-width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 10px 10px 0 0;
    animation: slide-up 0.3s ease-out;
  }
  
  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 1rem;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1rem;
  }
  
  .save-button {
    background-color: #001E18;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
  }
  
  .card-preview {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    color: white;
    position: relative;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .bank-logo {
    height: 40px;
    width: auto;
  }
  
  .card-number {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
  }
  
  .cvv-display {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 0.9rem;
    opacity: 0.8;
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