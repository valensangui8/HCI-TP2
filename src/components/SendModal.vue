<template>
  <div class="overlay" v-if="internalShowModal" @click.self="closeModal">
    <div class="down-sheet">
      <h2 style="color: black;">Enviar Dinero</h2>
      <form class="form-fields" @submit.prevent>

        <div v-if="step === 1">
          <v-radio-group v-model="paymentMethod" class="text-center">
            <v-radio label="Link de Pago" value="link" class="black-text"></v-radio>
            <v-radio label="CBU o CVU" value="cbu" class="black-text"></v-radio>
          </v-radio-group>
          <v-btn v-if="step < 3" @click="nextStep" class="custom-btn" :disabled="!paymentMethodValid"> Siguiente</v-btn>
          <v-btn @click="prevStep" class="mr-2" outlined>Cerrar</v-btn>
        </div>

        <div v-if="step === 2">
          <v-text-field
            v-model="paymentDetails"
            :label="paymentMethod === 'link' ? 'Ingrese el Link de Pago' : 'Ingrese el CBU o CVU'"
            :maxlength="22"
            :rules="[paymentMethod === 'cbu' ? cbuValidation : () => true]"
            required
            outlined
            type="input"/>
          <v-btn @click="nextStep" class="custom-btn" :disabled="!isPaymentDetailsValid">Siguiente</v-btn>
          <v-btn @click="prevStep" class="mr-2" outlined>Anterior</v-btn>
        </div>

        <div v-if="step === 3" class="center-container">
          <div class="step">
            <div class="component-container">
             
              <div class="destinatario-container">
                <destinatario
                  :recipientName="recipientName"
                  :bankName="recipientBank"
                  :cvu="computedCvu"
                  :link="computedLink"
                />
              </div>
              <div class="toggle-card-money-container">
               
                <v-btn-toggle v-model="isCardView" color="#001E18">
                  <v-btn :value="false">Dinero</v-btn>
                  <v-btn :value="true">Tarjeta</v-btn>
                </v-btn-toggle>
              </div>

              <div class="creditcard-container" v-if="isCardView">
                  <credit-card
                    :cardType="cardType"
                    :cardNumber="cardNumber"
                  />
                </div>
              <div class="balance-container" v-else>
                   <p>Dinero disponible: {{formattedBalance}}</p> 
                </div>
            </div>

            <div class="form-fields">
              <v-text-field
                v-model.number="amount"
                type="number"
                label="Monto ($)"
                placeholder="Ingrese el monto"
                :rules="[
                  value => !!value || 'El monto es obligatorio',
                  value => value > 0 || 'El monto debe ser positivo',
                  value => !isAmountExceedingBalance || 'El monto ingresado excede el dinero disponible'
                ]"
                required
                class="input"
              />
              <v-text-field
                v-model="description"
                label="Descripción (opcional)"
                placeholder="Ingrese una descripción"
                outlined
              />
              <v-btn @click="prevStep" class="mr-2" outlined>Anterior</v-btn>
              <v-btn :disabled="isAmountExceedingBalance || amount <= 0" color="primary" @click="confirmAmount">Enviar</v-btn>
            </div>
          </div>
        </div>


  
      </form>
    </div>
  </div>

  <!-- Confirmation Dialog -->
  <v-dialog v-model="confirmationDialog" max-width="400">
    <v-card>
      <v-card-title class="headline">Confirmación de Pago</v-card-title>
      <v-card-text>El pago ha sido exitoso</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" @click="closeDialog">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import Destinatario from '@/components/Destinatario.vue';
import CreditCard from '@/components/CreditCard.vue';
import { useAuthStore } from '@/stores/authStore';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:visible']);

const internalShowModal = ref(props.visible);
const step = ref(1);
const isCardView = ref(false);

const paymentMethod = ref('');
const paymentDetails = ref('');
const description = ref('');
const amount = ref(0);
const authStore = useAuthStore();

// Recipient information
const recipientAvatar = 'https://cdn.vuetifyjs.com/images/john.jpg';
const recipientName = 'Juan Pérez';
const recipientBank = 'Banco Nación';

const isPaymentDetailsValid = computed(() => {
  if (paymentMethod.value === 'cbu') {
    return cbuValidation(paymentDetails.value) === true;
  }
  return paymentDetails.value.length > 0;
});

// Confirmation Dialog
const confirmationDialog = ref(false);

const showCard = () => {
  isCardView.value = true;
};

const showBalance = () => {
  isCardView.value = false; 
};

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
  if (step.value > 1){
    step.value--;
  }else{
    closeModal();
  }
};

const confirmAmount = () => {
  authStore.updateBalance(-amount.value);
  confirmationDialog.value = true;
  resetForm();
};

const resetForm = () => {
  step.value = 1;
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

const computedCvu = computed(() => (paymentMethod.value === 'cbu' ? paymentDetails.value : null));
const computedLink = computed(() => (paymentMethod.value === 'link' ? paymentDetails.value : null));
const paymentMethodValid = computed(() => paymentMethod.value === 'cbu' || paymentMethod.value === 'link');


// Helper for amount limit based on balance
const isAmountExceedingBalance = computed(() => {
  const availableBalance = authStore.currentUser?.balance || 0;
  return amount.value > availableBalance;
});

const formattedBalance = computed(() => {
  const balance = authStore.currentUser?.balance || 0;
  return `$${balance.toFixed(2)}`;
});

</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
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
.custom-btn {
  background-color: #001E18;
  color: white;
  border-radius: 10px;
  padding: 5px;
}
.balance-container {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin: 20px;
}
.button-container {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 35px;
}
.error-message {
  color: #ff4d4f;
  font-size: 0.9rem;
  margin-top: 5px;
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
