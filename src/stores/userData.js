// stores/userData.js
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import { computed } from 'vue';

export const useUserDataStore = defineStore('userData', () => {
  const authStore = useAuthStore();

  // Obtener balance actual desde authStore
  const currentBalance = computed(() => {
    return authStore.currentUser?.balance || 0;
  });

  // Obtener gastos actuales desde authStore, si están disponibles
  const currentExpenses = computed(() => {
    return authStore.currentUser?.expenses || 0;
  });

  // Actualizar balance del usuario logueado en authStore
  const updateBalance = (amount) => {
    if (authStore.currentUser) {
      authStore.currentUser.balance += amount;
      localStorage.setItem('currentUser', JSON.stringify(authStore.currentUser));
    }
  };

  // Actualizar gastos del usuario logueado en authStore
  const updateExpenses = (amount) => {
    if (authStore.currentUser) {
      if (!authStore.currentUser.expenses) {
        authStore.currentUser.expenses = 0; // Asegurarse de que expenses exista
      }
      authStore.currentUser.expenses += amount;
      localStorage.setItem('currentUser', JSON.stringify(authStore.currentUser));
    }
  };

  return {
    currentBalance,
    currentExpenses,
    updateBalance,
    updateExpenses,
  };
});
