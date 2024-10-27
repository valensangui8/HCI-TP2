<template>
    <div class="form-container">
      <v-card class="form-card">
        <v-card-text>
          <div class="header">
            <h1 class="black-text">Detalles de Envío</h1>
          </div>
  
          <form @submit.prevent class="form">
            <div v-if="step === 1">
              <v-radio-group v-model="paymentMethod" class="text-center">
                <v-radio label="Link de Pago" value="link" class="black-text"></v-radio>
                <v-radio label="CBU o CVU" value="cbu" class="black-text"></v-radio>
              </v-radio-group>
            </div>
  
            <div v-if="step === 2">
              <v-text-field
                v-model="paymentDetails"
                :label="paymentMethod === 'link' ? 'Ingrese el Link de Pago' : 'Ingrese el CBU o CVU'"
                required
                class="large-input"
              ></v-text-field>
            </div>
  
            <div v-if="step === 3" class="step">
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
                class="large-input"
              />
              <v-btn @click="prevStep" class="custom-btn">Anterior</v-btn>
              <v-btn color="primary" @click="confirmAmount" class="custom-btn">Enviar</v-btn>
            </div>
  
            <v-btn v-if="step < 3" @click="nextStep" class="custom-btn">{{ step < 3 ? 'Siguiente' : 'Confirmar' }}</v-btn>
          </form>
  
          <v-btn color="secondary" @click="goBack" class="back-btn custom-btn">Volver</v-btn>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import Destinatario from '@/components/Destinatario.vue';
  import CreditCard from '@/components/CreditCard.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'EnviarPage',
    components: {
      Destinatario,
      CreditCard,
    },
    setup() {
      const router = useRouter();
      const showBottomSheet = ref(false); // State for Bottom Sheet visibility
      const step = ref(1);
      const paymentMethod = ref('');
      const paymentDetails = ref('');
      const amount = ref(0);
  
      const recipientAvatar = 'https://cdn.vuetifyjs.com/images/john.jpg';
      const recipientName = 'Juan Pérez';
      const recipientBank = 'Banco Nación';
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
        showBottomSheet.value = false; // Close the Bottom Sheet after submission
      };
  
      const goBack = () => {
        router.push('/urna'); // Redirect to /urna route
      };
  
      return {
        showBottomSheet, // Bind to Bottom Sheet visibility
        step,
        paymentMethod,
        paymentDetails,
        amount,
        nextStep,
        prevStep,
        confirmAmount,
        recipientAvatar,
        recipientName,
        recipientBank,
        recipientCvu,
        cardType,
        cardNumber,
        goBack
      };
    },
  };
  </script>
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Altura completa de la vista */
    background-color: black; /* Fondo negro para toda la página */
  }
  
  .form-card {
    background-color: white; /* Fondo blanco para la tarjeta */
    border-radius: 16px; /* Bordes redondeados */
    padding: 20px;
    width: 400px; /* Ajusta el tamaño de la tarjeta según sea necesario */
  }
  
  .large-input {
    width: 100%; /* Asegura que los inputs ocupen todo el ancho de la tarjeta */
    margin: 10px 0; /* Espaciado vertical */
    color: black; /* Título en negro */
  
  }
  
  .header h1 {
    color: black; /* Título en negro */
  }
  
  .black-text {
    color: black; /* Texto negro */
  }
  
  .back-btn {
    margin-top: 20px; /* Espaciado superior para el botón de volver */
  }
  
  .custom-btn {
    background-color: #001E18; /* Color personalizado para todos los botones */
    color: white; /* Color del texto en los botones */
    margin: 10px 0; /* Espaciado vertical para los botones */
  }
  
  /* Asegúrate de que el texto en los inputs sea legible */
  .v-input__control .v-input__slot {
    background-color: white; /* Fondo del campo de entrada */
  }
  </style>
  