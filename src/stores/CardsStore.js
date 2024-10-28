
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from './authStore';

export const useUserCardsStore = defineStore('userCards', () => {
  const authStore = useAuthStore();

  const cards = ref(authStore.currentUser?.cards || []);

  const updateCards = () => {
    cards.value = authStore.currentUser?.cards || [];
  };

  function addCard(newCard) {
    if (authStore.currentUser) {
      if (!authStore.currentUser.cards) {
        authStore.currentUser.cards = []; 
      }
      authStore.currentUser.cards.push(newCard);
      authStore.saveToLocalStorage(); 
      updateCards();
    }
  }

  function removeCard(id) {
    if (authStore.currentUser) {
      authStore.currentUser.cards = authStore.currentUser.cards.filter(card => card.id !== id);
      authStore.saveToLocalStorage(); 
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
