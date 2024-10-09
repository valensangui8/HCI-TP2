<template>
    <div class="balance-cards">
      <div class="card">
        <h3>Tu Balance</h3>
        <p>{{ balance }}</p>
      </div>
      <div class="card">
        <h3>Tus Gastos</h3>
        <p>{{ expenses }}</p>
      </div>
      <div class="card">
        <h3>Operaciones</h3>
        <div class="operations">
          <button>Ingresar</button>
          <button>Cobrar</button>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BalanceCards',
    data() {
      return {
        balance: '$12.750,60',
        expenses: '$6451,00',
      };
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
    width: 30%;
  }
  
  .operations button {
    margin-right: 10px;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
  }
  </style>
  