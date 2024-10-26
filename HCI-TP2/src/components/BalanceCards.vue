<template>
    <div class="balance-cards">
      <!-- Tarjetas de Balance y Gastos -->
      <div class="card">
        <h3>Tu Balance</h3>
        <div class="balance-amount">
          <p v-if="showBalance">{{ balance }}</p>
          <p v-else>****</p>
          <img
          :src="showBalance ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar saldo"
          class="toggle-eye"
          @click="toggleBalance"
        />
        </div>
      </div>
  
      <div class="card">
        <h3>Tus Gastos</h3>
        <p class="expense-amount">{{ expenses }}</p>
      </div>
  
      <!-- Operaciones: Ingresar, Cobrar, Enviar -->
      <div class="operations">
        <router-link to="/ingresar" class="operation-link">
          <div class="operation">
            <img src="@/assets/ingresar-icon.png" alt="Ingresar" class="operation-icon">
            <p>Ingresar</p>
          </div>
        </router-link>
  
        <router-link to="/cobrar" class="operation-link">
          <div class="operation">
            <img src="@/assets/cobrar-icon.png" alt="Cobrar" class="operation-icon">
            <p>Cobrar</p>
          </div>
        </router-link>
  
        <router-link to="/enviar" class="operation-link">
          <div class="operation">
            <img src="@/assets/enviar-icon.png" alt="Enviar" class="operation-icon">
            <p>Enviar</p>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>

    import eyeIcon from '@/assets/eye-icon.png';
    import closedEyeIcon from '@/assets/closed-eye-icon.png';
    
  export default {
    name: 'BalanceCards',
    data() {
      return {
        balance: '$12.750,60',
        expenses: '$6.451,00',
        showBalance: true, // Controla si el balance se muestra o está oculto
        eyeIcon: eyeIcon, // Referencia al ícono de ojo abierto
        closedEyeIcon: closedEyeIcon, // Referencia al ícono de ojo cerrado
      };
    },
    methods: {
      toggleBalance() {
        this.showBalance = !this.showBalance; // Cambia entre mostrar/ocultar el saldo
      },
    },
  };
  </script>
  
  <style scoped>
  .balance-cards {
    display: flex;
    justify-content: space-between;
  }
  
  .card {
    background-color: #0a1a1a;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 28%;
    position: relative; /* Para posicionar el ícono */
    margin-left: 0px;
  }
  
  /* Tamaño del saldo más grande */
  .balance-amount {
    display: flex;
    align-items: center;
  }
  
  .balance-amount p {
    font-size: 3rem; /* Tamaño más grande para el balance */
    margin-right: 10px;
    flex-grow: 1; /* Esto empuja el ícono hacia el extremo derecho */
  }
  
  .expense-amount {
    font-size: 3rem; /* Tamaño más grande para los gastos */
  }
  
  /* Estilo del ícono de ojo */
  .toggle-eye {
    width: 50px;
    height: 50px;
    margin-right:180px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out; /* Añade una animación suave al click */
  }
  
  .toggle-eye:hover {
    transform: scale(1.2); /* Aumenta el tamaño cuando se pasa el mouse por encima */
  }
  
  .operations {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    width: 32%; /* Ajustamos el tamaño del contenedor */
    margin-bottom: 100px;

  }
  
  .operation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a3a3a; /* Fondo verde oscuro */
    padding: 20px;
    border-radius: 10px;
    width: 130px;
    height: 130px;
  }
  
  .operation p {
    color: white;
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
  }
  
  .operation-icon {
    width: 30px;
    height: 30px;
  }
  
  /* Elimina el subrayado de los router-link */
  .operation-link {
    text-decoration: none;
    color: inherit; /* Mantiene el color del texto */
  }
  
  .operation-link:hover {
    text-decoration: none; /* Asegura que tampoco se subraye al pasar el mouse */
  }
  </style>
  