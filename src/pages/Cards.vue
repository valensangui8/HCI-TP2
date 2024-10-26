<template>
    <div class="cards-page">
      <!-- Navbar -->
      <Navbar />
  
      <!-- Contenedor de Tarjetas -->
      <div class="cards-content">
        <h2>Mis Tarjetas</h2>
        <div class="cards-menu">
          <!-- Opciones de Tarjetas -->
          <button @click="toggleModal" class="add-card-button">+ Agregar Tarjeta</button>
          <button v-if="cards.length > 0" @click="confirmDeleteCard" class="delete-card-button">Eliminar Tarjeta</button>
        </div>
  
        <!-- Menú de tarjetas: muestra las tarjetas y el componente para agregar nueva tarjeta -->
        <div class="cards-list">
          <CreditCard />
        </div>
      </div>
  
      <!-- Modal para agregar tarjeta -->
      <AddCardModal :isVisible="isModalVisible" @close="toggleModal" />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue';
  import CreditCard from '@/components/CreditCard.vue';
  import AddCardModal from '@/components/addCardModal.vue';
  import { ref, computed } from 'vue';
  import { useUserCardsStore } from '@/stores/userCards';
  
  const userCardsStore = useUserCardsStore();
  const cards = computed(() => userCardsStore.cards);
  const isModalVisible = ref(false);
  
  const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;
  };
  
  const confirmDeleteCard = () => {
    if (confirm("¿Estás seguro de que quieres eliminar esta tarjeta?")) {
      deleteCard();
    }
  };
  
  const deleteCard = () => {
    if (cards.value.length > 0) {
      userCardsStore.removeCard(cards.value[cards.value.length - 1].id);
    }
  };
  </script>
  
  <style scoped>
  .cards-page {
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    min-height: 100vh;
  }
  
  .cards-content {
    width: 100%;
    max-width: 50%; /* Ampliamos el ancho del contenedor */
    margin: 20px auto;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .cards-content h2 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .cards-menu {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  
  .add-card-button, .delete-card-button {
    max-width: 50%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .add-card-button {
    background-color: #28a745;
    color: white;
  }
  
  .delete-card-button {
    background-color: #f44336;
    color: white;
  }
  
  .cards-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  </style>
  