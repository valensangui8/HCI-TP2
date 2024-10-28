<template>
  <nav class="navbar bg-primary">
    <router-link to="/">
      <img src="@/assets/LogoPotty.png" alt="Logo Potty" />
    </router-link>
    <div class="navbar-links">
      <router-link to="/dashboard">Vista General</router-link>
      <router-link to="/movements">Movimientos</router-link>
      <router-link to="/cards">Tus Tarjetas</router-link>
      <router-link to="/investments">Inversiones</router-link>
    </div>
    <div class="navbar-profile">
      <div class="profile-dropdown">
        <span class="username">Hola, {{ username }}</span>
        <img src="@/assets/profile-icon.png" alt="Profile Icon" />
        
        <div class="logout-option">
          <router-link to="/" @click="authStore.logout">Cerrar Sesión</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const username = computed(() => authStore.currentUser?.name || 'Invitado');
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
  padding: 8px 12px; 
  border-radius: 4px; 
  transition: background-color 0.3s ease, color 0.3s ease; 
}

.navbar-links a:hover {
  background-color: rgba(255, 255, 255, 0.1); 
  color: #f0f0f0; 
  text-decoration: none; 
  cursor: pointer; 
}

.navbar-profile {
  position: relative;
}

.profile-dropdown {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px; 
  border-radius: 4px;
  transition: background-color 0.3s ease; 
}

.profile-dropdown:hover {
  background-color: rgba(255, 255, 255, 0.1); 
}

.profile-dropdown img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-left: 8px;
}

.username {
  color: white;
  font-size: 1rem;
}

.logout-option {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #1a1a1a;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.logout-option a {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  display: block; 
  padding: 5px 10px; 
}

.logout-option a:hover {
  background-color: rgba(255, 255, 255, 0.1); 
  text-decoration: none; 
}

.profile-dropdown:hover .logout-option {
  display: block;
}
</style>
