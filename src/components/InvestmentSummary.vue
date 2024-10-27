  <!-- 
    ORIGINAL:
    <template>
  <div class="investment-summary">
    <div class="summary-container">
   
      <div class="net-gains">
        <p>Tus Ganancias Netas</p>
        <h2>{{ netGains }}</h2>
        <button @click="invest">Invertir</button>
      </div>
      
     
      <div class="chart-container">
        <canvas id="investmentChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Registrar todos los componentes necesarios de Chart.js
Chart.register(...registerables);

// Definimos los datos y métodos
const netGains = ref('$12,344.00');

const invest = () => {
  alert("Función para invertir.");
};

const createChart = () => {
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
      maintainAspectRatio: false, 
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
};

onMounted(() => {
  createChart();
});
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
  width: 40%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 20px; 
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
  width: 60%;
}

canvas {
  width: 100%;
  height: 200px; 
}
</style>
-->

<template>
  <div class="investment-summary pa-4 bg-primary text-white rounded-lg d-flex justify-center align-center flex-grow-1">
    <div class="summary-container d-flex justify-space-between align-center w-100">
    
      <div class="net-gains flex-column justify-center align-start mr-4">
        <p class="ma-0">Tus Ganancias Netas</p>
        <h2 class="my-2">{{ netGains }}</h2>
        <v-btn color="success" @click="invest" class="mt-2">
          Invertir
        </v-btn>
      </div>

      <div class="chart-container">
        <canvas id="investmentChart" class="chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Register all necessary Chart.js components
Chart.register(...registerables);

// Define the data and methods
const netGains = ref('$12,344.00');

const invest = () => {
  alert("Función para invertir.");
};

// Helper function to get CSS variable value
const getCSSVariable = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

const createChart = () => {
  const ctx = document.getElementById('investmentChart').getContext('2d');
  
  // Use Vuetify's secondary and terciary colors from CSS variables
  const secondaryColor = getCSSVariable('--v-theme-secondary');
  const terciaryColor = getCSSVariable('--v-theme-terciary');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
      datasets: [
        {
          label: 'Ganancias Netas',
          data: [5000, 7000, 7500, 10000, 11000, 11500, 12000, 12400, 12344],
          borderColor: `rgba(${secondaryColor}, 0.8)`, // Secondary color for line border
          pointBackgroundColor: `rgba(${secondaryColor}, 1)`,
          fill: true,
          backgroundColor: `rgba(${terciaryColor}, 0.2)`, // Tertiary color for fill with transparency
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)', // Lighter color for labels
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Light grid lines
          },
        },
        y: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
          beginAtZero: false,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255, 255, 255, 0.7)', // Lighter color for legend
          },
        },
      },
    },
  });
};

// Call the chart creation when the component mounts
onMounted(() => {
  createChart();
});
</script>

<style scoped>
.investment-summary {
  /* Main container styles */
}

.summary-container {
  width: 100%;
}

.net-gains {
  width: 20%; /* 20% of the container */
}

.chart-container {
  width: 80%; /* 80% of the container */
}

.chart {
  width: 100%;
  height: 200px; /* Adjust height of the chart */
}

.net-gains p {
  margin: 0;
}
</style>
