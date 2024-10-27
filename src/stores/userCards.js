// stores/userCards.js

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from './auth';

export const useUserCardsStore = defineStore('userCards', () => {
  const authStore = useAuthStore();

  // Usar ref en lugar de computed para permitir la modificación directa
  const cards = ref(authStore.currentUser?.cards || []);

  const updateCards = () => {
    cards.value = authStore.currentUser?.cards || [];
  };

  // Función para agregar una nueva tarjeta
  function addCard(newCard) {
    if (authStore.currentUser) {
      authStore.currentUser.cards.push(newCard);
      localStorage.setItem('currentUser', JSON.stringify(authStore.currentUser));
      updateCards(); // Actualizar la lista de tarjetas en tiempo real
    }
  }

  function removeCard(id) {
    if (authStore.currentUser) {
      authStore.currentUser.cards = authStore.currentUser.cards.filter(card => card.id !== id);
      localStorage.setItem('currentUser', JSON.stringify(authStore.currentUser));
      updateCards();
    }
  }

  return {
    cards,
    addCard,
    removeCard,
    updateCards,
  };
});
