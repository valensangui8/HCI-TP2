<template>
  <div class="login-page">
    <div class="login-form-container">
      <AuthForm
        title="Iniciar Sesión"
        :fields="fields"
        buttonText="Iniciar Sesión"
        @submit="handleLogin"
      >
        <!-- Enlaces dentro del slot llamado "links" -->
        <template #links>
          <div class="login-links">
            <router-link to="/register" class="register-link">¿No tenés cuenta? ¡Registrate!</router-link>
            <router-link to="/forgot-password" class="forgot-link">Olvidé mi contraseña</router-link>
          </div>
        </template>
      </AuthForm>
    </div>

    <div class="login-image">
      <img src="@/assets/LoginImage.png" alt="Login Image" />
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  name: 'Login',
  components: {
    AuthForm,
  },
  data() {
    return {
      fields: [
        { name: 'email', type: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo' },
        { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
      ],
    };
  },
  methods: {
    handleLogin(formData) {
      console.log('Datos de login:', formData);
    },
  },
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
  align-items: center; /* Centra horizontalmente el formulario */
  padding: 0 40px;
  background-color: white;
}



.login-links {
  display: flex;
  justify-content: space-between; /* Alinea los enlaces a la izquierda y derecha */
  width: 100%;
  margin-top: 10px;
  font-size: 0.9rem; /* Reduce el tamaño de la fuente */
}

.register-link, .forgot-link {
  color: #2604ff;
  text-decoration: none;
  font-size: 0.9rem; /* Reduce el tamaño de los links */
}

.register-link:hover, .forgot-link:hover {
  text-decoration: underline; /* Opcional: subrayado al pasar el cursor */
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
