<template>
  <nav class="header bg-primary">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/LogoPotty.png" alt="Logo Potty" class="logo-img" />
      </router-link>
    </div>
    <div class="actions" v-if="!simple">
      <router-link to="/Login" class="btn">Iniciar Sesión</router-link>
      <router-link to="/Register" class="btn">Registrarse</router-link>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  simple: {
    type: Boolean,
    default: true, 
  },
});
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0a1a1a;
}

.actions {
  display: flex;
  align-items: center;
}

.actions .btn {
  margin-left: 10px;
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.actions .btn:hover {
  background-color: #555; 
}
</style>
