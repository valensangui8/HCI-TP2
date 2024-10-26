// stores/userCards.js

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserCardsStore = defineStore('userCards', () => {
  // Tarjetas iniciales (pueden incluir datos de ejemplo o estar vacías)
  const cards = ref([
    // Ejemplo de tarjeta inicial:
     { id: 1, bank: 'Banco Royale', number: '0000 0000 0000 0000', holder: 'James Bond', expiry: '03/60', color: '#6a0dad' },
     { id: 2, bank: 'Banc Royale', number: '0000 0020 0000 0000', holder: 'Jame Bond', expiry: '03/60', color: '#6a0dad' }
  ]);

  // Función para agregar una nueva tarjeta
  function addCard(newCard) {
    cards.value.push(newCard);
  }

  return {
    cards,
    addCard,
  };
});
