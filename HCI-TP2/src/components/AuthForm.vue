<template>
    <form class="auth-form" @submit.prevent="handleSubmit">
      <h1>{{ title }}</h1>
  
      <h3>{{ description }}</h3>
    
      <!-- Iterar sobre los campos recibidos en props -->
      <div v-for="(field, index) in fields" :key="index" class="form-field">
        <label :for="field.name">{{ field.label }}</label>
        <input 
          :type="field.type"
          :id="field.name"
          v-model="formData[field.name]"
          :placeholder="field.placeholder"
          required
        />
      </div>
    
      <!-- Mover los enlaces aquí, antes del botón -->
      <div class="auth-links">
        <slot name="links"></slot>
      </div>
    
      <!-- El botón de envío queda al final -->
      <button type="submit">{{ buttonText }}</button>
  
      <!-- Enlace "Volver para atrás" debajo del botón -->
      <router-link to="/" class="back-link">Volver para atrás</router-link>
    </form>
  </template>
  
  <script setup>
import { ref } from 'vue';
import AuthForm from  '@/components/AuthForm.vue';

// Definimos los campos usando ref
const fields = ref([
  { name: 'name', type: 'text', label: 'Nombre', placeholder: 'Ingresa tu nombre' },
  { name: 'lastName', type: 'text', label: 'Apellido', placeholder: 'Ingresa tu apellido' },
  { name: 'email', type: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo' },
  { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
]);

// Manejamos el evento de registro
const handleRegister = (formData) => {
  console.log('Datos de registro:', formData);
};
</script>

  
  <style scoped>
  .auth-form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    width: 100%;
    max-width: 400px; /* Limita el ancho máximo del formulario */
  }
  
  .auth-form h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: black;
    text-align: center; /* Centramos el título */
  }
  
  .auth-form h3 {
    font-size: 1rem;
    margin-bottom: 20px;
    color: black;
    text-align: center; /* Centramos la descripción */
  }
  
  .form-field {
    margin-bottom: 15px;
  }
  
  .form-field label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: black;
  }
  
  .form-field input {
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc; /* Solo los inputs tienen borde */
    font-size: 1rem;
    color: black;
  }
  
  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px; /* Añade espacio entre los enlaces y el botón */
  }
  
  /* Estilo del enlace "Volver para atrás" */
  .back-link {
    display: block;
    margin-top: 20px;
    color: #28a745;
    text-align: center;
    text-decoration: none;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  </style>
  