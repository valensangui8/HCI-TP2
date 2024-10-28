<template>
  <div class="login-page">
    <div class="login-form-container">
      <AuthForm
        title="Iniciar Sesión"
        description="Ingresa tus credenciales para acceder a tu cuenta."
        :fields="fields"
        buttonText="Iniciar Sesión"
        @submit="handleLogin"
      >
        <template #links>
          <div class="login-links">
            <router-link to="/register" class="register-link">¿No tenés cuenta? ¡Registrate!</router-link>
            <router-link to="/forgotpassword" class="forgot-link">Olvidé mi contraseña</router-link>
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
import { useAuthStore } from '@/stores/authStore';


const fields = ref([
  { name: 'email', type: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo', maxLength: 100 },
  { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' ,maxLength: 50},
]);

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = (formData) => {
  const success = authStore.login(formData);
  if (success) {
    router.push('/dashboard');
    setTimeout(() => {
      location.reload();
    }, 500);
  } else {
    alert('Credenciales incorrectas. Intenta de nuevo.');
  }
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
  font-size: 0.9rem;
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
