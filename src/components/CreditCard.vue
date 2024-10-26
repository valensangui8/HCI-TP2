<template>
  <div class="credit-card-container">
    <!-- Si no hay tarjetas, muestra el botón para agregar -->
    <div v-if="cards.length === 0" class="add-card">
      <button @click="toggleModal">+ Ingresar Tarjeta</button>
    </div>

    <!-- Si hay tarjetas, muestra el carrusel con las flechas -->
    <div v-else class="card-carousel">
      <button class="nav-arrow left-arrow" @click="prevCard">‹</button>
      <div class="card" :style="{ backgroundColor: cards[currentCardIndex].color }">
        <div class="card-content">
          <div class="card-header">
            <img src="@/assets/LogoPotty.png" alt="Banco Logo" class="bank-logo">
            <h4>{{ cards[currentCardIndex].bank }}</h4>
          </div>
          <div class="card-number">{{ cards[currentCardIndex].number }}</div>
          <div class="card-footer">
            <span>{{ cards[currentCardIndex].holder }}</span>
            <span>{{ cards[currentCardIndex].expiry }}</span>
          </div>
        </div>
      </div>
      <button class="nav-arrow right-arrow" @click="nextCard">›</button>
    </div>

    <!-- Modal para agregar tarjeta -->
    <AddCardModal :isVisible="isModalVisible" @close="toggleModal" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserCardsStore } from '@/stores/userCards';
import AddCardModal  from '@/components/addCardModal.vue';

const userCardsStore = useUserCardsStore();
const cards = computed(() => userCardsStore.cards);
const currentCardIndex = ref(0);
const isModalVisible = ref(false);

const prevCard = () => {
  currentCardIndex.value = (currentCardIndex.value - 1 + cards.value.length) % cards.value.length;
};

const nextCard = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % cards.value.length;
};

const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
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
  max-width: 350px;
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
  width: 100%;
  max-width: 350px;
  height: 160px;
  text-align: center;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bank-logo {
  width: 40px;
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

.nav-arrow {
  background: none;
  border: none;
  color: black;
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
