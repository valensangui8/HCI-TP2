<template>
    <div class="overlay" v-if="isVisible" @click.self="closeSheet">
        <div class="down-sheet">
            <h2  style="color: black;">Enviar Dinero</h2>
            <form class="form-fields" @submit.prevent="submitCard">
              <div v-if="step===1">
                <v-radio-group v-model="paymentMethod" class="text-center">
                  <v-radio label="Link de Pago" value="link" class="black-text"></v-radio>
                  <v-radio label="CBU o CVU" value="cbu" class="black-text"></v-radio>
                </v-radio-group>
              </div>  
              <div v-if="step===2">
                <v-text-field
                  v-model="paymentDetails"
                  :label="paymentMethod === 'link' ? 'Ingrese el Link de Pago' : 'Ingrese el CBU o CVU'"
                  required
                  class="input"
                ></v-text-field>
              </div>
                
              <div v-if="step===3" class="center-container">
                <div class="step">
                <div class="component-container">
                  <div class="destinatario-container">
                    <destinatario
                      :avatar="recipientAvatar"
                      :recipientName="recipientName"
                      :bankName="recipientBank"
                      :cvu="recipientCvu"
                    />
                  </div>
                  <div class="creditcard-container">
                    <credit-card
                      :cardType="cardType"
                      :cardNumber="cardNumber"
                    />
                  </div>
                </div>
    
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
                <v-btn @click="prevStep" class="custom-btn">Anterior</v-btn>
                <v-btn @click="confirmAmount" class="custom-btn">Enviar</v-btn>
              </div>
              </div>
              <v-btn v-if="step < 3" @click="nextStep" class="custom-btn">{{ step < 3 ? 'Siguiente' : 'Confirmar' }}</v-btn>
            </form>
        </div>
    </div>
  </template>
  <script>
  import { ref } from 'vue';
  import Destinatario from '@/components/Destinatario.vue';
  import CreditCard from '@/components/CreditCard.vue';
  export default {
  
    name: 'EnviarForm',
    components: {
    Destinatario,
    CreditCard,
    },
    props: {
        isVisible: {
        type: Boolean,
        required: true,
        },
    },
    setup(props, { emit }) {
        const step = ref(1); 
        const paymentMethod = ref('');
        const paymentDetails = ref('');
        const amount = ref(0);
    
        // Hardcoded data
        const recipientAvatar = 'https://assets.mi6-hq.com/images/stills/cr_32_280.jpg';
        const recipientName = 'Le Chiffre';
        const recipientBank = 'Banco Royale';
        const recipientCvu = '20-12345678-9';
        const cardType = 'Visa';
        const cardNumber = '**** **** **** 1234';
  
        const nextStep = () => {
        if (step.value < 3) {
            step.value++;
        } else {
            resetForm();
        }
        };
    
        const prevStep = () => {
        if (step.value > 1) {
            step.value--;
        }
        };
    
        const confirmAmount = () => {
        alert(`Pago Exitoso`);
        resetForm();
        };
  
        const resetForm = () => {
        step.value = 1;
        paymentMethod.value = '';
        paymentDetails.value = '';
        amount.value = 0;
        emit('close-form'); // This hides the overlay
    };
        const closeSheet = () => {
            emit('close-form'); // Emit event to close the form
        };
        const goBack = () => {
        router.push('/urna'); 
        };
  
    return {
        step,
        paymentMethod,
        paymentDetails,
        amount,
        recipientAvatar,
        recipientName,
        recipientBank,
        recipientCvu,
        cardType,
        cardNumber,
        nextStep,
        prevStep,
        confirmAmount,
        closeSheet
    };
  },
  };
  </script>
  <style scoped>
    .center-container {
        display: flex;
        justify-content: center; /* Centra horizontalmente */
        align-items: center; /* Centra verticalmente */
        height: 70vh; /* Ajusta la altura del contenedor */
    }

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
    .black-text {
      color: black; /* Texto negro */
    }
    .input {
      width: 100%; /* Asegura que los inputs ocupen todo el ancho de la tarjeta */
      margin: 10px 0; /* Espaciado vertical */
      color: black; /* Título en negro */
    
    }
    .custom-btn {
      background-color: #001E18; /* Color personalizado para todos los botones */
      color: white; /* Color del texto en los botones */
      margin: 10px 0; /* Espaciado vertical para los botones */
    }
  </style>