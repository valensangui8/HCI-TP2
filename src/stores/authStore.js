// stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // Datos iniciales de usuarios, solo usados si localStorage no tiene datos
  const initialUsers = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Pérez',
      email: 'juan@example.com',
      password: 'password123',
      balance: 0,
      cards: [],
      transactions: [],
    },
    {
      id: 2,
      name: 'María',
      lastName: 'García',
      email: 'maria@example.com',
      password: '12',
      balance: 0,
      cards: [],
      transactions: [],
    }
  ];

  // Crear los refs para usuarios y usuario actual
  const users = ref([]);
  const currentUser = ref(null);

  // Cargar datos desde localStorage, o inicializar si no existen
  const loadFromLocalStorage = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUsers) {
      users.value = storedUsers;
    } else {
      users.value = initialUsers; // Solo usa initialUsers si no hay nada en localStorage
      saveToLocalStorage();
    }

    if (storedCurrentUser) {
      currentUser.value = users.value.find(user => user.id === storedCurrentUser.id) || null;
    }
  };

  // Guardar datos en localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users.value));
    localStorage.setItem('currentUser', JSON.stringify(currentUser.value));
  };

  const register = (newUser) => {
    const exists = users.value.some(user => user.email === newUser.email);
    if (exists) return false;

    newUser.id = users.value.length + 1;
    newUser.balance = 0;
    newUser.cards = [];
    newUser.transactions = [];
    users.value.push(newUser);
    saveToLocalStorage();
    return true;
  };

  const login = (credentials) => {
    const user = users.value.find(
      user => (user.email === credentials.email) && (user.password === credentials.password)
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

  const addCard = (newCard) => {
    if (currentUser.value) {
      currentUser.value.cards.push(newCard);
      saveToLocalStorage();
    }
  };

  const removeCard = (cardId) => {
    if (currentUser.value) {
      currentUser.value.cards = currentUser.value.cards.filter(card => card.id !== cardId);
      saveToLocalStorage();
    }
  };

  const updateBalance = (amount) => {
    if (currentUser.value) {
      currentUser.value.balance += amount;
      saveToLocalStorage();
    }
  };

  // Cargar desde localStorage al iniciar la store
  loadFromLocalStorage();

  return {
    users,
    currentUser,
    register,
    login,
    logout,
    addCard,
    removeCard,
    updateBalance,
    loadFromLocalStorage,
    saveToLocalStorage,
  };
});
