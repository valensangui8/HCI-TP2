<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="@/assets/LogoPotty.png" alt="Logo Potty" />
    </router-link>
    <div class="navbar-links">
      <router-link to="/dashboard">Vista General</router-link>
      <router-link to="/movements">Movimientos</router-link>
      <router-link to="/cards">Tus Tarjetas</router-link>
      <router-link to="/investments">Inversiones</router-link>
      <router-link to="/settings">Configuración</router-link>
      <router-link to="/">Cerrar Sesión</router-link>
    </div>
    <div class="navbar-profile">
      <router-link to="/profile">
        <span class="username">Hola, {{ username }}</span>
        <img src="@/assets/profile-icon.png" alt="Profile Icon" />
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

// Accedemos al store de autenticación
const authStore = useAuthStore();
// Obtenemos el nombre del usuario actual
const username = computed(() => authStore.currentUser?.name || 'Invitado');
console.log(username.value);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0a1a1a;
}

.navbar-logo img {
  height: 40px;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
}

.navbar-links a:hover {
  text-decoration: underline;
}

.navbar-profile img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.username {
  color: white;
  font-size: 1rem;
  margin-right: 10px;
  text-decoration: none;
}
</style>
