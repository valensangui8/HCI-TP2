<template>
  <div @click="showForm" class="enviar-btn">
    <img src="@/assets/enviar-icon.png" alt="Enviar" class="imagen" />
  </div>
  </template>

  <script>
 import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Enviar',
  setup(_, { emit }) {
    const showForm = () => {
      emit('open-form'); // Emit an event to open the form
    };

    return {
      showForm
    };
  }
});
  </script>
  
<style>
.enviar-btn {
    width: 20vw; 
    height: 10vw; 
    max-width: 150px;
    max-height: 150px; 
    background-color: #001E18; 
    color: white; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    border-radius: 12px;
    margin:10px;
    cursor: pointer; 
    transition: background-color 0.3s; 
}

.enviar-btn:hover {
    background-color: #00312f; 
}

.imagen {
    width: 60%; 
    height: 60%; 
    object-fit: contain;
    margin: auto; 
    display: block; 
}
</style>
  