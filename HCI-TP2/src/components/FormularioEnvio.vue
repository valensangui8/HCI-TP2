<template>
    <div class="text-center">
      <h1>Detalles de Envío</h1>
  
      <form @submit.prevent="submitForm" class="form">
        <div v-if="step === 1">
          <v-radio-group v-model="paymentMethod" mandatory>
            <v-radio label="Link de Pago" value="link"></v-radio>
            <v-radio label="CBU o CVU" value="cbu"></v-radio>
          </v-radio-group>
          <v-btn @click="nextStep">Siguiente</v-btn>
        </div>
  
        <div v-if="step === 2">
          <v-text-field
            v-model="paymentDetails"
            :label="paymentMethod === 'link' ? 'Ingrese el Link de Pago' : 'Ingrese el CBU o CVU'"
            required
          ></v-text-field>
          <v-btn @click="prevStep">Anterior</v-btn>
          <v-btn @click="nextStep">Siguiente</v-btn>
        </div>
  
        <div v-if="step === 3" class="step">
          <h3>Confirmar Monto</h3>
            <!-- ACA METER TARJETA:-->
          <v-text-field
            v-model.number="amount"
            type="number"
            label="Monto ($)"
            placeholder="Ingrese el monto"
            prepend-icon="mdi-cash"
            :rules="[value => !!value || 'El monto es obligatorio']"
            required
          />
          <v-btn @click="prevStep">Anterior</v-btn>
          <v-btn color="primary" @click="confirmAmount">Enviar</v-btn>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'ThreeStepForm',
    setup() {
      const step = ref(1);
      const paymentMethod = ref('');
      const paymentDetails = ref('');
      const amount = ref(0);
  
      const nextStep = () => {
        if (step.value < 3) {
          step.value++;
        } else {
          alert(`Detalles Confirmados:\nMétodo: ${paymentMethod.value}\nDetalles: ${paymentDetails.value}\nCantidad: $${amount.value}`);
          resetForm(); // Reinicia el formulario
        }
      };
  
      const prevStep = () => {
        if (step.value > 1) {
          step.value--;
        }
      };
  
      const confirmAmount = () => {
        alert(`Monto confirmado: $${amount.value}`);
        resetForm(); // Reinicia el formulario
      };
  
      const resetForm = () => {
        step.value = 1;
        paymentMethod.value = '';
        paymentDetails.value = '';
        amount.value = 0;
      };
  
      return {
        step,
        paymentMethod,
        paymentDetails,
        amount,
        nextStep,
        prevStep,
        confirmAmount,
      };
    },
  };
  </script>
  
  <style scoped>
  .form {
    max-width: 400px;
    margin: auto;
  }
  
  .text-center {
    text-align: center;
  }
  
  .step {
    margin-bottom: 20px;
  }
  
  .v-btn {
    margin-top: 20px;
  }
  </style>
  