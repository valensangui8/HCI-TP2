// main.js

import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins';
import { useAuthStore } from '@/stores/authStore';


// Limpia localStorage al iniciar la aplicación
//localStorage.clear(); 
const app = createApp(App);

// Registramos todos los plugins (vuetify, pinia, router)
registerPlugins(app);

// Cargamos usuarios predefinidos al iniciar la app
const authStore = useAuthStore();
authStore.loadFromLocalStorage();

app.mount('#app');
