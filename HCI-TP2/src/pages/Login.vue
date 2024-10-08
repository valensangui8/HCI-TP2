<template>
  <div class="login-page">
    <div class="login-form-container">
      <h1>Inicio de Sesión</h1>
      <form class="login-form">
        <label for="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Correo Electrónico"
          v-model="email"
          @input="checkInput('email')"
          :class="{ filled: email }"
        />

        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          v-model="password"
          @input="checkInput('password')"
          :class="{ filled: password }"
        />

        <div class="actions">
          <p><span>¿No tenés cuenta?</span> <router-link to="/Register">¡Registrate!</router-link></p>


          <a href="#">Olvidé mi Contraseña</a>
        </div>

        <button type="submit" class="btn-login">Iniciar Sesión</button>
      </form>

      <router-link to="/" class="back-link"> <span>Volver para atrás</span></router-link>
    </div>

    <div class="login-image">
      <img src="@/assets/LoginImage.png" alt="Login image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    checkInput(field) {
      // Aquí podrías hacer validaciones o lógica adicional si fuera necesario
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
  padding: 0 40px;
  background-color: white;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: black;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form label {
  margin-bottom: 5px;
  font-size: 1rem;
}

.login-form input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
  border: 1px solid #000000;
  width: 100%;
  font-size: 1rem;
  color: black; /* Color por defecto */
}

.login-form input:focus {
  font-weight: bold;
  color: black;
}

.login-form input.filled {
  font-weight: bold;
  color: black;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.actions a {
  font-size: 0.9rem;
  color: #28a745;
  text-decoration: none;
}


.actions p span {
  color: black;
  font-weight: bold;
}

.btn-login {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
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

.back-link {
    color: #000000;
    text-decoration: underline;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 20px;
  }
</style>
