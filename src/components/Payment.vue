<template>
    <div class="operation-btn" @click="toggleModal">
      <div class="operation">
        <img src="@/assets/cobrar-icon.png" alt="Cobrar" class="operation-icon">
        <p>Cobrar</p>
      </div>
    </div>
    <PaymentLinkModal :isVisible="isModalVisible" @close="toggleModal" />
    <DepositModal v-if="showDepositModal" @close="showDepositModal = false" />
  </template>
  
  <script setup>
    import { ref, computed } from 'vue';
    import { useAuthStore } from '@/stores/authStore';
    import PaymentLinkModal from '@/components/PaymentLinkModal.vue';
    const isModalVisible = ref(false);
    const authStore = useAuthStore();
    const toggleModal = () => {
        isModalVisible.value = !isModalVisible.value;
    };

  </script>
  
  <style scoped>
  .operation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a3a3a;
    padding: 1vw;
    border-radius: 0.5vw;
    width: 9vw;
    height: 9vw;
    margin-right:2vw;

    cursor: pointer;
  }
  
  .operation p {
    color: white;
    font-size: 1vw;
    margin-top: 0.5;
    text-align: center;
  }
  
  .operation-icon {
    width: 1.8vw;
    height: 1.8vw;
  }
  
  .operation-btn {
    text-decoration: none;
    color: inherit;
  }
  
  .operation-link:hover {
    text-decoration: none;
  }
  
  .operation:hover {
    transform: scale(1.05);
  }
  </style>
  