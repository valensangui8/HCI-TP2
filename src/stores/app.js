// src/stores/app.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAppStore = defineStore('app', {
  state: () => ({
    // Datos estáticos: Usuarios predefinidos
    users: [
      { id: 1, email: 'test@example.com', password: '123456', name: 'Test User' },
      { id: 2, email: 'jane@example.com', password: 'password', name: 'Jane Doe' }
    ],
    // Datos dinámicos
    currentUser: null,
  }),
  getters: {
    isAuthenticated: (state) => state.currentUser !== null,
  },
  actions: {
    login(email, password) {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.currentUser = null;
    }
  },
});
