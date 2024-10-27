<template>
  <div class="overlay" v-if="internalShowModal" @click.self="closeModal">
    <div class="down-sheet">
          <h2  style="color: black;">Enviar Dinero</h2>
          <form class="form-fields" @submit.prevent>

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
                  :maxlength="22"
                  :rules="[paymentMethod === 'cbu' ? cbuValidation : () => true]"
                  required
                  outlined
                  type="input"
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
              <div class="button-container">
                <v-col class="py-2" cols="12">
                  
                  <v-btn-toggle
                    color="#001E18"
                  >
                    <v-btn value="card" @click="showCard">
                      Tarjeta
                    </v-btn>
                    <v-btn value="money" @click="showBalance">
                      Dinero
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                </div>
                <div class="creditcard-container" v-if="isCardView">
                  <credit-card
                    :cardType="cardType"
                    :cardNumber="cardNumber"
                  />
                </div>
                <div class="balance-container" v-else>
                   <p>Dinero disponible: ${{balance}}</p> 
                </div>
              </div>
              <div class="form-fields">
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
              <v-btn @click="prevStep" class="mr-2" outlined>Anterior</v-btn>
              <v-btn color="primary" @click="confirmAmount">Enviar</v-btn>
              </div>
          </div>
          </div>
            <v-btn v-if="step < 3" @click="nextStep" class="custom-btn">{{ step < 3 ? 'Siguiente' : 'Confirmar' }}</v-btn>
          </form>
      </div>
  </div>
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
</template>

<script>
import { ref, watch } from 'vue';
import Destinatario from '@/components/Destinatario.vue';
import CreditCard from '@/components/CreditCard.vue';
import BalanceCards from './BalanceCards.vue';
export default {
  name: 'SendModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Destinatario,
    CreditCard,
  },
  setup(props, { emit }) {
    const isCardView = ref(true);
    const internalShowModal = ref(props.visible);
    const step = ref(1);
    const accountOrCard = ref('');
    const paymentMethod = ref('');
    const paymentDetails = ref('');
    const amount = ref(0);

    const recipientAvatar = 'https://cdn.vuetifyjs.com/images/john.jpg';
    const recipientName = 'Juan Pérez';
    const recipientBank = 'Banco Nación';
    const recipientCvu = '20-12345678-9';
    const cardType = 'Visa';
    const cardNumber = '**** **** **** 1234';
    const balance = ref(0);
    const confirmationDialog = ref(false);

    // Watch prop for modal visibility changes
    watch(
      () => props.visible,
      (newVal) => {
        internalShowModal.value = newVal;
      }
    );

    // CBU validation rule
    const cbuValidation = (value) => {
      const is22Digits = /^\d{22}$/.test(value);
      return is22Digits || 'El CBU debe tener exactamente 22 dígitos';
    };

    const nextStep = () => {
      if (step.value < 4) step.value++;
    };

    const prevStep = () => {
      if (step.value > 1) step.value--;
    };

    const confirmAmount = () => {
      confirmationDialog.value = true;
      resetForm();
    };

    const resetForm = () => {
      step.value = 1;
      accountOrCard.value = '';
      paymentMethod.value = '';
      paymentDetails.value = '';
      amount.value = 0;
      internalShowModal.value = false;
      emit('update:visible', false); 
    };

    const closeModal = () => {
      internalShowModal.value = false;
      resetForm();
      emit('update:visible', false); 
    };

    const closeDialog = () => {
      confirmationDialog.value = false;
    };

    const goBack = () => {
      if (step.value > 1) {
        step.value--;
      } else {
        closeModal();
      }
    };
    const showCard = () => {
      isCardView.value = true; // Show credit card view
    };

    const showBalance = () => {
      isCardView.value = false; // Show balance view
    };
    const formattedBalance = computed(() => {
      const balance = authStore.currentUser?.balance || 0;
      return '$${balance.toFixed(2)}';
    });
    return {
      internalShowModal,
      step,
      accountOrCard,
      paymentMethod,
      paymentDetails,
      amount,
      cbuValidation,
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
      closeModal,
      goBack,
      showCard,
      showBalance,
      isCardView,
      balance,
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
    max-width: 700px;
    background-color: white;
    padding: 20px;
    padding-bottom: 50px;
    border-radius: 10px 10px 0 0;
    animation: slide-up 0.3s ease-out;
  }
  .black--text {
    color: black !important;
  }
  .custom-btn{
    background-color: #001E18;
    color:white;
    border-radius: 10px;
    padding:5px;
  }
  .balance-container {
    padding: 10px;
    background-color: #f0f0f0; 
    border-radius: 5px;
    margin:20px;
  }
  .button-container {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 35px
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
