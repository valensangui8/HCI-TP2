<template>
  <div class="credit-card-container">
    <div v-if="cards.length === 0" class="add-card">
      <button @click="addCard">+ Ingresar Tarjeta</button>
    </div>

    <!-- Si hay tarjetas, muestra el carrusel con las flechas -->
    <div v-else class="card-carousel">
      <button class="nav-arrow left-arrow" @click="prevCard">‹</button>
      <div class="card" :style="{ backgroundColor: cards[currentCardIndex].color }">
        <div class="card-content">
          <!-- Logo del banco y nombre del banco -->
          <div class="card-header">
            <img src="@/assets/LogoPotty.png" alt="Banco Logo" class="bank-logo">
            <h4>{{ cards[currentCardIndex].bank }}</h4>

            <!-- Menú desplegable (tres puntos) -->
            <v-menu offset-y>
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" variant="plain">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="addCard()">
                  <v-list-item-title>Agregar Nueva Tarjeta</v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteCard(currentCardIndex)">
                  <v-list-item-title>Eliminar</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <!-- Número de tarjeta -->
          <div class="card-number">{{ cards[currentCardIndex].number }}</div>
          <!-- Nombre del titular y fecha de expiración -->
          <div class="card-footer">
            <span>{{ cards[currentCardIndex].holder }}</span>
            <span>{{ cards[currentCardIndex].expiry }}</span>
          </div>
        </div>
      </div>
      <button class="nav-arrow right-arrow" @click="nextCard">›</button>
    </div>
    <AddCardForm
      v-if="isAddCardFormVisible"
      @close="isAddCardFormVisible = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddCardForm from '@/components/AddCardForm.vue'; // Ajusta la ruta según sea necesario

// Definición de propiedades reactivas
const currentCardIndex = ref(0); // Índice para la tarjeta actual
const isAddCardFormVisible = ref(false);

const cards = ref([
  { 
    bank: 'Banco Royale', 
    number: '0000 0000 0000 0000', 
    holder: 'James Bond', 
    expiry: '03/60', 
    color: '#6a0dad' // Color violeta
  },
  { 
    bank: 'Banco Imperial', 
    number: '1111 1111 1111 1111', 
    holder: 'James Bond', 
    expiry: '12/50', 
    color: '#4B0082' // Color púrpura
  }
]);

// Definición de métodos
const addCard = () => {
  isAddCardFormVisible.value = true;
};

const editCard = (index) => {
  alert(`Editar tarjeta: ${index}`);
  // Lógica para editar la tarjeta
};

const deleteCard = (index) => {
  alert(`Eliminar tarjeta: ${index}`);
  // Lógica para eliminar la tarjeta
};

const nextCard = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % cards.value.length;
};

const prevCard = () => {
  currentCardIndex.value = (currentCardIndex.value - 1 + cards.value.length) % cards.value.length;
};
</script>

<style scoped>
.credit-card-container {
  background-color: transparent;
  color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 100%;
  max-width: 350px; /* Ajustamos el ancho máximo */
  text-align: center;
}

.add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #0A1A1A;
  border-radius: 10px;
}

.add-card button {
  background-color: transparent;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.card-carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 10px;
  border-radius: 10px;
  width: 20vw; 
  height: 10vw; 
  text-align: center;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white; /* Aseguramos que el texto sea blanco */
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bank-logo {
  width: 40px; /* Ajustamos el tamaño del logo */
  height: auto;
}

.card-number {
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin: 10px 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.card-content h4, .card-content p {
  margin: 0;
}

.nav-arrow {
  background: none;
  border: none;
  color: black; /* Flechas negras */
  font-size: 1.5rem;
  cursor: pointer;
}

.left-arrow {
  position: absolute;
  left: -30px;
}

.right-arrow {
  position: absolute;
  right: -30px;
}
</style>
