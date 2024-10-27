<template>
    <v-dialog v-model="showModal" width="50%">
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
  
          <v-btn color="secondary" @click="closeModal" class="back-btn custom-btn">Volver</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Destinatario from '@/components/Destinatario.vue';
  import CreditCard from '@/components/CreditCard.vue';
  
  export default {
    name: 'EnviarPage',
    components: {
      Destinatario,
      CreditCard,
    },
    setup() {
      const showModal = ref(true); // Set modal visibility to true to show it initially
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
        showModal.value = false; // Close the modal after submission
      };
  
      const closeModal = () => {
        showModal.value = false;
      };
  
      return {
        showModal,
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
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  .form-card {
    background-color: white; /* White background for the card */
    border-radius: 16px; /* Rounded corners */
    padding: 20px;
    width: 100%; /* Full width of the modal (50% of screen due to the dialog width) */
    max-height: 80vh; /* Limit height for better appearance */
    overflow-y: auto; /* Enable scrolling if content overflows */
  }
  
  .large-input {
    width: 100%; /* Ensures inputs occupy full width */
    margin: 10px 0; /* Vertical spacing */
    color: black;
  }
  
  .header h1 {
    color: black; /* Black text color for the title */
  }
  
  .black-text {
    color: black; /* Black text color */
  }
  
  .back-btn {
    margin-top: 20px; /* Spacing above the back button */
  }
  
  .custom-btn {
    background-color: #001E18; /* Custom button background color */
    color: white; /* White text color on buttons */
    margin: 10px 0; /* Vertical spacing for buttons */
  }
  
  .v-input__control .v-input__slot {
    background-color: white; /* Background color for input fields */
  }
  </style>
  