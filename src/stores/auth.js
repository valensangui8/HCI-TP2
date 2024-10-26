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
      password: '123',
      balance: 12000.50,
      expenses: 5000,
      cards: [
        {
          id: 1,
          bank: 'Banco Royale',
          number: '1234 5678 9012 3456',
          holder: 'María García',
          expiry: '12/26',
          color: '#6a0dad'
        }
      ],
      transactions: [
        { id: 1, amount: 100.00, date: '2024-01-01', description: 'Compra en supermercado' },
        { id: 2, amount: 50.00, date: '2024-02-01', description: 'Taxi' },
        { id: 3, amount: 200.00, date: '2024-03-01', description: 'Pago de suscripción' },
      ]
      
    }
  ]);

  const currentUser = ref(null);
  console.log((users));

  // Cargar datos desde localStorage al iniciar la app
  const loadFromLocalStorage = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUsers) users.value = storedUsers;
    if (storedCurrentUser) {
      currentUser.value = users.value.find(user => user.id === storedCurrentUser.id) || null;
    }
  };

  // Guardar `currentUser` y `users` en localStorage al iniciar sesión
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

  // Llamar a la función de carga al definir la store
  loadFromLocalStorage();

  return {
    users,
    currentUser,
    register,
    login,
    logout,
    loadFromLocalStorage,
  };
});
