<template>
  <div class="forgot-password-page">
    <div class="forgot-password-form-container">
      <AuthForm
        title="Recuperar Contraseña"
        description="Ingresá el correo electrónico asociado a la cuenta y la nueva contraseña para reiniciar tu contraseña."
        :fields="fields"
        buttonText="Siguiente"
        @submit="handleForgotPassword"
      >
        <template #links>
          <div class="forgot-links">
            <router-link to="/contact-support" class="support-link">Perdí acceso al correo</router-link>
          </div>
        </template>
      </AuthForm>
    </div>

    <div class="forgot-password-image">
      <img src="@/assets/LoginImage.png" alt="Forgot Password Image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthForm from '@/components/AuthForm.vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const fields = ref([
  { name: 'email', type: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo' , maxLength: 50},
  { name: 'newPassword', type: 'password', label: 'Nueva Contraseña', placeholder: 'Ingresa tu nueva contraseña' , maxLength: 50},
  { name: 'confirmPassword', type: 'password', label: 'Confirmar Nueva Contraseña', placeholder: 'Confirma tu nueva contraseña', maxLength: 50 },
]);

const authStore = useAuthStore();
const router = useRouter();

const handleForgotPassword = (formData) => {
  if (formData.newPassword !== formData.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  const success = authStore.changePassword({
    email: formData.email,
    password: formData.newPassword
  });

  if (success) {
    router.push('/login');
  } else {
    alert('Correo no registrado');
  }
};

</script>

<style scoped>
.forgot-password-page {
  display: flex;
  min-height: 100vh;
}

.forgot-password-form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: white;
}

.forgot-password-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a1a1a;
}

.forgot-password-image img {
  max-width: 80%;
  height: auto;
}

.forgot-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.support-link {
  color: #28a745;
  text-decoration: none;
}

.support-link:hover {
  text-decoration: underline;
}
</style>
