<template>
  <v-dialog v-model="isOpen" max-width="400">
    <v-card class="pa-4">
      <v-btn icon @click="$emit('close')" class="close-button">
        <v-icon>mdi-close</v-icon> Cerrar
      </v-btn>
      <v-card-title class="text-primary text-h5 mb-2">Ingresar Dinero</v-card-title>
      <v-divider></v-divider>

      <div class="payment-method-section mt-4 mb-4">
        <v-card color="secondary" class="text-center pa-4">
          <span class="text-h6 text-white">Banco Royale</span>
          <div class="card-number text-h6 mt-2 mb-2">0000 0000 0000 0000</div>
          <span class="text-white">James Bond</span>
          <span class="text-white">03/30</span>
        </v-card>
      </div>

      <div class="amount-input mb-4">
        <label>Por favor, ingrese la cantidad a ingresar</label>
        <v-text-field 
          v-model.number="amount"
          type="number"
          placeholder="0,00$"
          class="mt-2"
          outlined
          full-width
          color="terciary"
        ></v-text-field>
      </div>

      <v-btn color="terciary" @click="submitAmount" class="submit-button" block>Enviar</v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useUserDataStore } from '@/stores/DataStore';

const amount = ref(0);
const isOpen = ref(true); // Bind this to open and close the modal
const userDataStore = useUserDataStore();

function submitAmount() {
  if (amount.value > 0) {
    userDataStore.updateBalance(amount.value);
    amount.value = 0; // Reset amount after submission
  } else {
    alert("Please enter a valid amount.");
  }
}
</script>

<style scoped>
.close-button {
  color: var(--v-theme-primary);
  align-self: flex-end;
}

.payment-method-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-number {
  font-size: 1.2em;
}
</style>
