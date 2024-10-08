<template>
  <div id="app">
    <!-- Header simplificado por defecto, solo en Home mostramos los botones -->
    <Header :simple="$route.path !== '/'" />
    <router-view></router-view> <!-- Muestra el contenido de la ruta activa -->
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
