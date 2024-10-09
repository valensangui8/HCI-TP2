<template>
    <div class="investment-summary">
      <div class="summary-container">
        <!-- Ganancias netas (40% del espacio) -->
        <div class="net-gains">
          <p>Tus Ganancias Netas</p>
          <h2>{{ netGains }}</h2>
          <button @click="invest">Invertir</button>
        </div>
        
        <!-- Gráfico (60% del espacio) -->
        <div class="chart-container">
          <canvas id="investmentChart"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  
  // Registrar todos los componentes necesarios de Chart.js
  Chart.register(...registerables);
  
  export default {
    name: 'InvestmentSummary',
    data() {
      return {
        netGains: '$12,344.00', // Ganancias inventadas
      };
    },
    methods: {
      invest() {
        alert("Función para invertir.");
      },
      createChart() {
        const ctx = document.getElementById('investmentChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
            datasets: [
              {
                label: 'Ganancias Netas',
                data: [5000, 7000, 7500, 10000, 11000, 11500, 12000, 12400, 12344],
                borderColor: '#28a745',
                fill: true,
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false, // Permite controlar la altura del gráfico
            scales: {
              y: {
                beginAtZero: false,
              },
            },
          },
        });
      },
    },
    mounted() {
      this.createChart(); // Crear el gráfico al montar el componente
    },
  };
  </script>
  
  <style scoped>
  .investment-summary {
    background-color: #0a1a1a;
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
  }
  
  .summary-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .net-gains {
    width: 40%; /* 40% del contenedor */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 20px; /* Separación entre el gráfico y las ganancias */
  }
  
  .net-gains p {
    margin: 0;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
  }
  
  .chart-container {
    width: 60%; /* 60% del contenedor */
  }
  
  canvas {
    width: 100%;
    height: 200px; /* Ajuste de la altura del gráfico */
  }
  </style>
  