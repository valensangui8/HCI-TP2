/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// Vuetify theme configuration
export default createVuetify({
  theme: {
    defaultTheme: 'light', // Set default theme to 'dark'
    themes: {
      light: {
        colors: {
          primary: '#0a1a1a',
          secondary: '#1a3a3a',
          terciary: '#28a745',
          background: '#ffffff',
          surface: '#f5f5f5',
          error: '#b00020',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#fb8c00',
          text: '#000000',
        },
      }
    },
  },
});
