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
  
      <!-- Confirmation Dialog -->
      <v-dialog v-model="confirmationDialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Confirmación de Pago</v-card-title>
          <v-card-text>
            El pago ha sido exitoso. ¿Desea continuar con otra transacción?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="confirmationDialog = false">Aceptar</v-btn>
            <v-btn color="secondary" @click="closeDialog">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      const showBottomSheet = ref(false);
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
  
      const confirmationDialog = ref(false); // State for confirmation dialog visibility
  
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
        confirmationDialog.value = true; // Show confirmation dialog
        resetForm();
      };
  
      const resetForm = () => {
        step.value = 1;
        paymentMethod.value = '';
        paymentDetails.value = '';
        amount.value = 0;
        showBottomSheet.value = false;
      };
  
      const closeDialog = () => {
        confirmationDialog.value = false;
        router.push('/urna');
      };
  
      const goBack = () => {
        router.push('/urna');
      };
  
      return {
        showBottomSheet,
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
        confirmationDialog,
        closeDialog,
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
    height: 100vh;
    background-color: black;
  }
  
  .form-card {
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    width: 400px;
  }
  
  .large-input {
    width: 100%;
    margin: 10px 0;
    color: black;
  }
  
  .header h1 {
    color: black;
  }
  
  .black-text {
    color: black;
  }
  
  .back-btn {
    margin-top: 20px;
  }
  
  .custom-btn {
    background-color: #001E18;
    color: white;
    margin: 10px 0;
  }
  
  .v-input__control .v-input__slot {
    background-color: white;
  }
  </style>
  