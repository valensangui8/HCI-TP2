<template>
  <div class="login-page">
    <div class="login-form-container">
      <AuthForm
        title="Iniciar Sesión"
        :fields="fields"
        buttonText="Iniciar Sesión"
        @submit="handleLogin"
      >
        <template #links>
          <div class="login-links">
            <router-link to="/register" class="register-link">¿No tenés cuenta? ¡Registrate!</router-link>
            <router-link to="/ForgotPassword" class="forgot-link">Olvidé mi contraseña</router-link>
          </div>
        </template>
      </AuthForm>
    </div>

    <div class="login-image">
      <img src="@/assets/LoginImage.png" alt="Login Image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthForm from '@/components/AuthForm.vue';

const router = useRouter();

// Campos del formulario
const fields = ref([
  { name: 'email', type: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo' },
  { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
]);

// Manejamos el evento de login
const handleLogin = (formData) => {
  console.log('Datos de login:', formData);
  // Simulamos un login exitoso y redirigimos al dashboard
  router.push('/dashboard');
};
</script>

<style scoped>
.login-page {
  display: flex;
  min-height: 100vh;
}

.login-form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: white;
}

.login-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  font-size: 0.9rem;
}

.register-link, .forgot-link {
  color: #2604ff;
  text-decoration: none;
}

.register-link:hover, .forgot-link:hover {
  text-decoration: underline;
}

.login-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a1a1a;
}

.login-image img {
  max-width: 80%;
  height: auto;
}
</style>
