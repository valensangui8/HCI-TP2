/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins'; // Esto incluye vuetify, pinia, router

const app = createApp(App);

// Registramos todos los plugins (vuetify, pinia, router)
registerPlugins(app);

// Montamos la aplicación en el elemento con id #app
app.mount('#app');
