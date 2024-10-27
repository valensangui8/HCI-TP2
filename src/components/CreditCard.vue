<template>
  <div class="credit-card-container">
    <div class="card-carousel">
      <button class="nav-arrow left-arrow" @click="prevCard">‹</button>
      <div v-if="isAddCardVisible" class="card add-card">
        <button @click="toggleModal" class="add-button">+</button>
        <p class="add-card-text">Agregar Tarjeta</p>
      </div>
      <div v-else class="card" :style="{ backgroundColor: currentCard.color }">
        <div class="card-content">
          <div class="card-header">
            <img src="@/assets/LogoPotty.png" alt="Banco Logo" class="bank-logo" />
            <h4>{{ currentCard.bank }}</h4>
          </div>
          <div class="card-number">{{ currentCard.number }}</div>
          <div class="card-footer">
            <span>{{ currentCard.holder }}</span>
            <span>{{ currentCard.expiry }}</span>
          </div>
        </div>
      </div>
      <button class="nav-arrow right-arrow" @click="nextCard">›</button>
    </div>

    <AddCardModal :isVisible="isModalVisible" @close="toggleModal" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserCardsStore } from '@/stores/CardsStore';
import AddCardModal from '@/components/addCardModal.vue';

const userCardsStore = useUserCardsStore();
const userCards = computed(() => userCardsStore.cards);
const currentCardIndex = ref(0);
const isModalVisible = ref(false);

const isAddCardVisible = computed(() => currentCardIndex.value >= userCards.value.length);
const currentCard = computed(() => userCards.value[currentCardIndex.value] || {});

const prevCard = () => {
  currentCardIndex.value = (currentCardIndex.value - 1 + userCards.value.length + 1) % (userCards.value.length + 1);
};

const nextCard = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % (userCards.value.length + 1);
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #0A1A1A;
  border-radius: 10px;
}

.add-button {
  margin-top: auto;
  background-color: #28a745;
  color: white;
  border: none;
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.add-card-text {
  font-size: 1.2rem;
  color: #bbb;
  margin-top: 10px;
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
