// Utilities
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


// Create the store
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia
