<template>
  <form class="auth-form" @submit.prevent="handleSubmit">
    <h1>{{ title }}</h1>
    <h3>{{ description }}</h3>

    <!-- Campos del formulario -->
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

    <div class="auth-links">
      <slot name="links"></slot>
    </div>

    <button type="submit">{{ buttonText }}</button>
    <router-link to="/" class="back-link">Volver para atrás</router-link>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

// Props y eventos
const props = defineProps({
  title: String,
  description: String,
  fields: Array,
  buttonText: String
});
const emit = defineEmits(['submit']);

// Variables reactivas
const formData = reactive({});
props.fields.forEach(field => {
  formData[field.name] = '';
});

// Emitimos los datos del formulario al componente padre
const handleSubmit = () => {
  emit('submit', formData);
};
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
}

.auth-form h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: black;
  text-align: center;
}

.auth-form h3 {
  font-size: 1rem;
  margin-bottom: 20px;
  color: black;
  text-align: center;
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
  border: 1px solid #ccc;
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
  margin-top: 20px;
}

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
