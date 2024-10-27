<template>
  <v-dialog v-model="internalShowModal" width="50%" persistent>
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h5">Detalles de Envío</span>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <form @submit.prevent>
          <!-- Step 1: Choose account or card -->
          <div v-if="step === 1">
            <v-radio-group v-model="accountOrCard" label="Seleccione fuente de fondos" class="text-center">
              <v-radio label="Usar dinero en cuenta" value="account" class="black--text"></v-radio>
              <v-radio label="Usar tarjeta" value="card" class="black--text"></v-radio>
            </v-radio-group>
          </div>

          <!-- Step 2: Choose payment method -->
          <div v-if="step === 2">
            <v-radio-group v-model="paymentMethod" class="text-center">
              <v-radio label="Link de Pago" value="link" class="black--text"></v-radio>
              <v-radio label="CBU o CVU" value="cbu" class="black--text"></v-radio>
            </v-radio-group>
          </div>

          <!-- Step 3: Enter payment details -->
          <div v-if="step === 3">
            <v-text-field
              v-model="paymentDetails"
              :label="paymentMethod === 'link' ? 'Ingrese el Link de Pago' : 'Ingrese el CBU o CVU'"
              required
              outlined
            ></v-text-field>
          </div>

          <!-- Step 4: Confirm details, show cards only if "Usar tarjeta" is selected -->
          <div v-if="step === 4">
            <div v-if="accountOrCard === 'card'" class="d-flex justify-space-between mb-4">
              <destinatario
                class="flex-grow-1 mr-4"
                :avatar="recipientAvatar"
                :recipientName="recipientName"
                :bankName="recipientBank"
                :cvu="recipientCvu"
              />
              <credit-card class="flex-grow-1" :cardType="cardType" :cardNumber="cardNumber" />
            </div>

            <v-text-field
              v-model.number="amount"
              type="number"
              label="Monto ($)"
              placeholder="Ingrese el monto"
              prepend-icon="mdi-cash"
              :rules="[value => !!value || 'El monto es obligatorio']"
              required
              outlined
            />
            <v-btn @click="prevStep" class="mr-2" outlined>Anterior</v-btn>
            <v-btn color="primary" @click="confirmAmount">Enviar</v-btn>
          </div>

          <v-btn
            v-if="step < 4"
            @click="nextStep"
            color="primary"
            class="mt-4"
          >
            {{ step < 4 ? 'Siguiente' : 'Confirmar' }}
          </v-btn>
        </form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="secondary" @click="goBack">Volver</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

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

    const confirmationDialog = ref(false);

    watch(
      () => props.visible,
      (newVal) => {
        internalShowModal.value = newVal;
      }
    );

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

    return {
      internalShowModal,
      step,
      accountOrCard,
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
      closeModal,
      goBack,
    };
  },
};
</script>

<style scoped>
.black--text {
  color: black !important;
}
</style>
