// stores/auth.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const users = ref([
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
  ]);

  const currentUser = ref(null);

  // Cargar datos desde localStorage al iniciar la app
  const loadFromLocalStorage = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUsers) users.value = storedUsers;
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

  // Métodos para modificar los datos del usuario actual
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

  // Llamada a cargar los datos al iniciar la store
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
  };
});
