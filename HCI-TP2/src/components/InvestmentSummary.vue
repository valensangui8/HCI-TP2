<template>
    <div class="investment-summary">
      <h3>Resumen Inversiones</h3>
      <div class="net-gains">
        <p>Tus Ganancias Netas</p>
        <h2>{{ netGains }}</h2>
        <button @click="invest">Invertir</button>
      </div>
      <canvas id="investmentChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js';
  
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
      this.createChart();
    },
  };
  </script>
  
  <style scoped>
  .investment-summary {
    background-color: #0a1a1a;
    color: white;
    padding: 20px;
    border-radius: 10px;
    flex-grow: 2;
  }
  
  .net-gains {
    
    margin-bottom: 20px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  canvas {
    margin-top: 20px;
  }
  </style>
  