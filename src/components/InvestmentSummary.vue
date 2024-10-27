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
import { computed, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { useAuthStore } from '@/stores/authStore';

// Register necessary Chart.js components
Chart.register(...registerables);

const authStore = useAuthStore();

// Calcular ganancias netas diarias (0.11%)
const dailyRate = 0.0011;
const netGains = computed(() => {
  const investedBalance = authStore.currentUser?.investedBalance || 0;
  return investedBalance > 0 ? `$${(investedBalance * dailyRate).toFixed(2)}` : '$0.00';
});

// Calcular ganancias proyectadas para 6 meses
const project6MonthsData = () => {
  const investedBalance = authStore.currentUser?.investedBalance || 0;
  if (investedBalance === 0) return Array(6).fill(0);

  const projectedData = [];
  let currentBalance = investedBalance;
  
  for (let i = 0; i < 6; i++) {
    currentBalance += currentBalance * dailyRate * 30; // Aprox. 30 días al mes
    projectedData.push(currentBalance.toFixed(2));
  }
  
  return projectedData;
};

// Crear el gráfico
const createChart = () => {
  const ctx = document.getElementById('investmentChart')?.getContext('2d');
  if (!ctx) return;

  const projectedData = project6MonthsData();

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6'],
      datasets: [
        {
          label: 'Proyección de Ganancias a 6 Meses',
          data: projectedData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
        y: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        },
      },
    },
  });
};

// Crear el gráfico cuando el componente esté montado
onMounted(() => {
  createChart();
});
</script>

<style scoped>
.summary-container {
  width: 100%;
}

.net-gains {
  width: 20%;
}

.chart-container {
  width: 80%;
}

.chart {
  width: 100%;
  height: 200px;
}

.net-gains p {
  margin: 0;
}
</style>
