// stores/userCards.js

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from './auth';

export const useUserCardsStore = defineStore('userCards', () => {
  // Tarjetas iniciales (pueden incluir datos de ejemplo o estar vacías)
  const authStore = useAuthStore();

  const cards = computed(() => authStore.currentUser?.cards || []);


  // Función para agregar una nueva tarjeta
  function addCard(newCard) {
    cards.value.push(newCard);
  }

  function removeCard(id) {
    cards.value = cards.value.filter(card => card.id !== id);
  }

  return {
    cards,
    addCard,
    removeCard,
  };
});
