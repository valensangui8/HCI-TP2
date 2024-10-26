<template>
  <div class="transaction-history">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.transaction-history {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}

.table-container {
  max-height: 400px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f0f0f5;
  font-weight: bold;
}

tr {
  transition: background-color 0.3s;
  color: black;
}

tr:hover {
  background-color: #c9c9c9;
}
</style>
