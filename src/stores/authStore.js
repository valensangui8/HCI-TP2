// stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // Datos iniciales de usuarios con balance invertido e historial de inversiones agregado
  const initialUsers = [
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
      password: '12',
    }
  ];

  const users = ref([]);
  const currentUser = ref(null);

  const loadFromLocalStorage = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUsers) {
      users.value = storedUsers;
    } else {
      users.value = initialUsers;
      saveToLocalStorage();
    }

    if (storedCurrentUser) {
      currentUser.value = users.value.find(user => user.id === storedCurrentUser.id) || null;
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users.value));
    localStorage.setItem('currentUser', JSON.stringify(currentUser.value));
  };

  const register = (newUser) => {
    const exists = users.value.some(user => user.email === newUser.email);
    if (exists) return false;

    newUser.id = users.value.length + 1;
    newUser.balance = 0;
    newUser.investedBalance = 0;
    newUser.cards = [];
    newUser.transactions = [];
    newUser.investHistory = [];
    users.value.push(newUser);
    saveToLocalStorage();
    return true;
  };

  const login = (credentials) => {
    const user = users.value.find(
      user => user.email === credentials.email && user.password === credentials.password
    );
    if (user) {
      currentUser.value = user;
      saveToLocalStorage();
      return true;
    }
    return false;
  };

  const logout = () => {
    currentUser.value = null;
    localStorage.removeItem('currentUser');
  };

  // Métodos de balance e inversión
  const updateBalance = (amount) => {
    if (currentUser.value) {
      currentUser.value.balance += amount;
      saveToLocalStorage();
    }
  };

  const investBalance = (amount) => {
    if (currentUser.value && currentUser.value.balance >= amount) {
      currentUser.value.balance -= amount;
      currentUser.value.investedBalance += amount;
      // Registrar en el historial de inversiones
      currentUser.value.investHistory.push({
        type: 'inversión',
        amount,
        date: new Date().toLocaleString(),
      });
      saveToLocalStorage();
    }
  };

  const withdrawInvestment = (amount) => {
    if (currentUser.value && currentUser.value.investedBalance >= amount) {
      currentUser.value.investedBalance -= amount;
      currentUser.value.balance += amount;
      // Registrar en el historial de inversiones
      currentUser.value.investHistory.push({
        type: 'retiro',
        amount,
        date: new Date().toLocaleString(),
      });
      saveToLocalStorage();
    }
  };

  loadFromLocalStorage();

  return {
    users,
    currentUser,
    register,
    login,
    logout,
    updateBalance,
    investBalance,
    withdrawInvestment,
    loadFromLocalStorage,
    saveToLocalStorage,
  };
});
