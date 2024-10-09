<template>
    <div class="transaction-history">
      <h3>Historial de Movimientos</h3>
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
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td>{{ transaction.amount }}</td>
              <td>{{ transaction.date }}</td>
              <td>{{ transaction.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransactionHistory',
    data() {
      return {
        transactions: [
          { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' },
          { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' },
          { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' },
          { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' },
          { amount: '0,00$', date: 'Fecha de Ejemplo', description: 'Pago en Negocio de Ejemplo' }, // Ejemplo de más de 4 transacciones
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .transaction-history {
    margin-top: 20px;
    border: 1px solid #ccc; /* Añade un borde alrededor del contenido */
    padding: 20px;
    border-radius: 10px;
    background-color: #fff; /* Fondo blanco */
  }
  
  .transaction-history h3 {
    color: black;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .table-container {
    max-height: 200px; /* Limita la altura para mostrar 4 filas */
    overflow-y: auto; /* Añade el scrollbar vertical si hay más contenido */
    border: 1px solid #ccc; /* Borde alrededor de la tabla */
    border-radius: 5px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    color: black; /* Texto negro */
  }
  
  th {
    background-color: #f9f9f9; /* Un color de fondo claro para las cabeceras */
    font-weight: bold;
  }
  
  tr:hover {
    background-color: #f1f1f1; /* Efecto hover en las filas */
  }
  
  td {
    border-right: 1px solid #ccc; /* Borde entre las columnas */
  }
  
  </style>
  