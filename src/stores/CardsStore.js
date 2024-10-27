
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from './authStore';

export const useUserCardsStore = defineStore('userCards', () => {
  const authStore = useAuthStore();

  // Usar ref para permitir la modificación directa
  const cards = ref(authStore.currentUser?.cards || []);

  const updateCards = () => {
    cards.value = authStore.currentUser?.cards || [];
  };

  function addCard(newCard) {
    if (authStore.currentUser) {
      if (!authStore.currentUser.cards) {
        authStore.currentUser.cards = []; // Inicializa si está vacío
      }
      authStore.currentUser.cards.push(newCard);
      authStore.saveToLocalStorage(); // Asegura guardar en localStorage después de agregar
      updateCards();
    }
  }

  function removeCard(id) {
    if (authStore.currentUser) {
      authStore.currentUser.cards = authStore.currentUser.cards.filter(card => card.id !== id);
      authStore.saveToLocalStorage(); // Asegura guardar en localStorage después de eliminar
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
