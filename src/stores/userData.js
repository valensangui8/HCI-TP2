// stores/userData.js
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useUserDataStore = defineStore('userData', {
  state: () => ({
    userBalances: {
      1: { balance: 12000, expenses: 5000 },
      2: { balance: 15000, expenses: 7000 },
    },
  }),

  getters: {
    currentBalance(state) {
      const authStore = useAuthStore();
      return state.userBalances[authStore.currentUser?.id]?.balance || 0;
    },
    currentExpenses(state) {
      const authStore = useAuthStore();
      return state.userBalances[authStore.currentUser?.id]?.expenses || 0;
    },
  },

  actions: {
    updateBalance(amount) {
      const authStore = useAuthStore();
      const userId = authStore.currentUser?.id;
      if (userId) {
        this.userBalances[userId].balance += amount;
      }
    },
    updateExpenses(amount) {
      const authStore = useAuthStore();
      const userId = authStore.currentUser?.id;
      if (userId) {
        this.userBalances[userId].expenses += amount;
      }
    },
  },
});
