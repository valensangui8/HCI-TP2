import { defineStore } from 'pinia';
import { useAuthStore } from './authStore';
import { computed } from 'vue';

export const useUserDataStore = defineStore('userData', () => {
  const authStore = useAuthStore();

  const currentBalance = computed(() => {
    return authStore.currentUser?.balance || 0;
  });

  const currentExpenses = computed(() => {
    return authStore.currentUser?.expenses || 0;
  });

  const updateBalance = (amount) => {
    if (authStore.currentUser) {
      authStore.currentUser.balance += amount;
      localStorage.setItem('currentUser', JSON.stringify(authStore.currentUser));
    }
  };
  
  const updateExpenses = (amount) => {
    if (authStore.currentUser) {
      if (!authStore.currentUser.expenses) {
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
