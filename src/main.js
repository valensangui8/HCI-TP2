// main.js

import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins';
import { useAuthStore } from '@/stores/authStore';


const app = createApp(App);

registerPlugins(app);

const authStore = useAuthStore();
authStore.loadFromLocalStorage();

app.mount('#app');
