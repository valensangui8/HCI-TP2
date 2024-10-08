<template>
    <div class="register-page">
      <div class="register-form-container">
        <h1>Registrarse</h1>
        <p class="subtitle">¡Estás a unos simples pasos de tener tu propia Urna!</p>
        <p class="subtitle">
          ¿Ya tenés cuenta? <router-link to="/Login">¡Iniciá Sesión!</router-link>
        </p>
  
        <form class="register-form" @submit.prevent="handleSubmit">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="name" placeholder="Nombre" required />
  
          <label for="last-name">Apellido</label>
          <input type="text" id="last-name" v-model="lastName" placeholder="Apellido" required />
  
          <label for="gender">Género</label>
          <select id="gender" v-model="gender" required>
            <option disabled value="">Selecciona tu género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
  
          <label for="birthdate">Fecha de Nacimiento</label>
          <input type="date" id="birthdate" v-model="birthdate" placeholder="Fecha de Nacimiento" required />
  
          <label for="country">País</label>
          <select id="country" v-model="country" required>
            <option disabled value="">Selecciona tu país</option>
            <!-- Lista corta de países, puedes agregar más si es necesario -->
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="México">México</option>
            <option value="España">España</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <!-- Aquí puedes agregar una lista más extensa si lo prefieres -->
          </select>
  
          <button type="submit" class="btn-register">Siguiente Paso</button>
        </form>
  
        <router-link to="/" class="back-link"> <span>Volver para atrás</span></router-link>
      </div>
  
      <div class="register-image">
        <img src="@/assets/LoginImage.png" alt="Descripción de la imagen" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        name: "",
        lastName: "",
        gender: "",
        birthdate: "",
        country: "",
      };
    },
    methods: {
      handleSubmit() {
        // Aquí puedes manejar el registro o la validación
        alert(`Registrado: ${this.name} ${this.lastName}, Género: ${this.gender}, País: ${this.country}`);
      },
    },
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
    padding: 0 40px;
    background-color: white;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: black;
  }
  
  .subtitle {
    margin-bottom: 20px;
    color: #777;
    font-size: 1rem;
  }
  
  .subtitle a {
    color: #28a745;
    text-decoration: none;
    font-weight: bold;
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
  }
  
  .register-form label {
    margin-bottom: 5px;
    font-size: 1rem;
    color: black;
  }
  
  .register-form input,
  .register-form select {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 20px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 1rem;
    color: black;
  }
  
  .register-form select {
    background-color: white;
  }
  
  .btn-register {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .back-link {
    color: #000000;
    text-decoration: underline;
    font-size: 0.9rem;
    text-align: center;
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
  