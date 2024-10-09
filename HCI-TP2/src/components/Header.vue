<template>
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/LogoPotty.png" alt="Logo Potty" />
        </router-link>
      </div>
      <!-- Mostrar los botones solo si "simple" es false -->
      <div class="actions">
        <router-link to="/Login" class="btn">Iniciar Sesión</router-link>
        <router-link to="/Register" class="btn">Registrarse</router-link>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      simple: {
        type: Boolean,
        default: true, // Mostrar solo el logo por defecto
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #1a1a1a;
  }
  
  .logo img {
    max-width: 50px;
  }
  
  .actions .btn {
    margin-left: 10px;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }
  .actions {
  display: flex;
  align-items: center; /* Centrado vertical */
  height: auto; /* Ajusta según el contenido */
}
  </style>
  