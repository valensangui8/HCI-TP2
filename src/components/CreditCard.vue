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
  border-radius: 1vw;
  position: relative;
  max-width: 20vw;
  text-align: center;
}

.add-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15vw;
  background-color: #0A1A1A;
  border-radius: 1vw;
}

.add-button {
  margin-top: auto;
  background-color: #2da146;
  color: white;
  border: none;
  font-size: 2vw;
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0vw 3vw 4vw rgba(0, 0, 0, 0.3);
}

.add-card-text {
  font-size: 0.8vw;
  color: #bbb;
  margin-top: 0.4vw;
  margin-bottom: 1vw;
}

.card-carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 0.8vw;
  border-radius: 0.8vw;
  height:12vw;
  width: 25vw;
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
  margin-top:1vw;
}

.bank-logo {
  width: 3vwvw;
  height: auto;
}

.card-number {
  font-size: 1vw;
  letter-spacing: 0.1vw;
  margin: 1vw 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top:0.5vw;
  font-size: 0.vw;
}

.nav-arrow {
  background: none;
  border: none;
  color: black;
  font-size: 2.4vw;
  cursor: pointer;
}

.left-arrow {
  position: absolute;
  left: -0.8vw;
}

.right-arrow {
  position: absolute;
  right: -0.7vw;
}
</style>
