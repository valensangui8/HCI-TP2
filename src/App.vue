<template>
  <div id="app">
    <!-- Header simplificado por defecto, solo en Home mostramos los botones -->
    <router-view></router-view> <!-- Muestra el contenido de la ruta activa -->
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>
