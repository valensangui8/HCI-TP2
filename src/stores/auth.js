// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [
      {
        id: 1,
        name: 'Juan',
        lastName: 'Pérez',
        email: 'juan@example.com',
        password: 'password123',
      },
      {
        id: 2,
        name: 'María',
        lastName: 'García',
        email: 'maria@example.com',
        password: 'mypassword',
      },
    ],
    currentUser: null,
  }),

  actions: {
    register(newUser) {
      const exists = this.users.some(user => user.email === newUser.email);
      if (exists) return false;

      newUser.id = this.users.length + 1; // Asigna un ID único
      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    },

    login(credentials) {
      const user = this.users.find(
        user => user.email === credentials.email && user.password === credentials.password
      );
      if (user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    },

    loadFromLocalStorage() {
      const storedUsers = JSON.parse(localStorage.getItem('users'));
      const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (storedUsers) this.users = storedUsers;
      if (storedCurrentUser) this.currentUser = storedCurrentUser;
    },
  },
});
