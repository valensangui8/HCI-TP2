<template>
    <div class="expenses-card">
        <h3 class="responsive-header">Tus Gastos</h3>
        <div class="expenses-amount">
        <p v-if="showExpenses">{{ formattedExpenses }}</p>
        <p v-else>****</p>
        <img
          :src="showExpenses ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar gastos"
          class="toggle-eye"
          @click="toggleExpenses"
        />
        </div>
      </div>
</template>
<script setup>
    import { ref, computed } from 'vue';
    import eyeIcon from '@/assets/eye-icon.png';
    import closedEyeIcon from '@/assets/closed-eye-icon.png';
    import { useAuthStore } from '@/stores/authStore';
    const authStore = useAuthStore();
    const showExpenses = ref(true);
    const toggleExpenses = () => {
        showExpenses.value = !showExpenses.value;
    };
    const formattedExpenses = computed(() => {
        const expenses = authStore.currentUser?.expenses || 0;
        return `$${expenses.toLocaleString()}`;
    });
</script>
<style scoped>
.expenses-card {
    background-color: #0a1a1a;
    color: white;
    padding: 1vw;
    border-radius: 10px;
    height:8vw;
    width: 16vw;
    position: relative;
}

.expenses-amount {
    display: flex;
    align-items: center;
}

.expenses-amount p {
    font-size: 2vw;
    margin-right: 10px;
    flex-grow: 1;
}

.toggle-eye {
  width: 2vw;
  height: 2vw;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.toggle-eye:hover {
  transform: scale(1.2);
}
.responsive-header {
  font-size: 1vw;
}
</style>