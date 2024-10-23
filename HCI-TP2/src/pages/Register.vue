<template>
  <div class="register-page">
    <div class="register-form-container">
      <AuthForm
        title="Registrarse"
        description="¡Estás a unos simples pasos de tener tu propia Urna!"
        :fields="fields"
        buttonText="Registrar"
        @submit="handleRegister"
      >
        <template #links>
          <p class="register-description">
            Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad.
          </p>
          <p class="account-link">
            ¿Ya tenés cuenta? <router-link to="/login">¡Iniciá Sesión!</router-link>
          </p>
        </template>
      </AuthForm>
    </div>

    <div class="register-image">
      <img src="@/assets/LoginImage.png" alt="Register Image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthForm from '@/components/AuthForm.vue';

const fields = ref([
  { name: 'name', type: 'text', label: 'Nombre', placeholder: 'Ingresa tu nombre' },
  { name: 'lastName', type: 'text', label: 'Apellido', placeholder: 'Ingresa tu apellido' },
  { name: 'email', type: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo' },
  { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
]);

const handleRegister = (formData) => {
  console.log('Datos de registro:', formData);
};
</script>

<style scoped>
.register-page {
  display: flex;
  min-height: 100vh;
}

.register-form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: white;
}

.register-description {
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin-top: 10px;
}

.account-link {
  font-size: 0.9rem;
  color: #28a745;
  text-align: center;
  margin-top: 10px;
}

.account-link router-link {
  color: #28a745;
  text-decoration: none;
}

.account-link router-link:hover {
  text-decoration: underline;
}

.register-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.register-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a1a1a;
}

.register-image img {
  max-width: 80%;
  height: auto;
}
</style>
