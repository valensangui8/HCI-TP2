<template>
  <div class="operation-btn" @click="showDepositModal = true">
    <div class="operation">
      <img src="@/assets/ingresar-icon.png" alt="Ingresar" class="operation-icon">
      <p>Ingresar</p>
    </div>
  </div>
  <DepositModal :visible="showDepositModal" @close="showDepositModal = false" />
  <DepositModal v-if="showDepositModal" @close="showDepositModal = false" />
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useAuthStore } from '@/stores/authStore';
  import DepositModal from '@/components/DepositModal.vue';
  const showDepositModal = ref(false);
  const authStore = useAuthStore();
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
  width: 5vw;
  height: 5vw;
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
