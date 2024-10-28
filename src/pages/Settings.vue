<template>

    <navbar />
    <div class="settings-page">
      <h1>Configuración</h1>
      <div class="search-bar">
        <input type="text" placeholder="Buscar" />
        <span class="icon">🔍</span>
      </div>
      <div class="settings-grid">
        <div class="setting-item" @click="goToSection('account')">
          <span class="icon">👤</span>
          <p>Datos de Cuenta</p>
          <span class="arrow">▶</span>
        </div>
        <div class="setting-item" @click="goToSection('cards')">
          <span class="icon">💳</span>
          <p>Tarjetas</p>
          <span class="arrow">▶</span>
        </div>
        <div class="setting-item" @click="goToSection('updatePersonalData')">
          <span class="icon">🔄</span>
          <p>Actualizar Datos Personales</p>
          <span class="arrow">▶</span>
        </div>
        <div class="setting-item" @click="goToSection('notifications')">
          <span class="icon">🔔</span>
          <p>Notificaciones</p>
          <span class="arrow">▶</span>
        </div>
        <div class="setting-item" @click="goToSection('support')">
          <span class="icon">❓</span>
          <p>Soporte Técnico</p>
          <span class="arrow">▶</span>
        </div>
        <div class="setting-item logout" @click="logout">
          <span class="icon">↩️</span>
          <p>Cerrar Sesión</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToSection = (section) => {
    router.push(`/${section}`);
  };
  
  const logout = () => {
    alert("Sesión cerrada");
    router.push("/login");
  };
  </script>
  
  <style scoped>
  .settings-page {
    padding: 20px;
    height: 100vh;
    background-color: #f9f9f9;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  /* Barra de búsqueda */
  .search-bar {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
  }
  
  .search-bar input {
    width: 100%;
    padding: 10px;
    padding-left: 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 1rem;
  }
  
  .search-bar .icon {
    position: absolute;
    left: 10px;
    color: gray;
  }
  
  /* Grid de configuración */
  .settings-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tres columnas */
    gap: 20px;
  }
  
  .setting-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px; /* Ajusta la altura para hacerlo más grande */
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }
  
  .setting-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  .setting-item .icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .setting-item p {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }
  
  .setting-item .arrow {
    font-size: 1.5rem;
    color: #888;
    position: absolute;
    right: 15px;
  }
  
  .setting-item.logout {
    color: red;
  }
  </style>
  