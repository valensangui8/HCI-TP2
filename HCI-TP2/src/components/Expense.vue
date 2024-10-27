<template>
    <div class="expense-cards">
      <div class="card">
        <h3>Tus Gastos</h3>
        <p class="expense-amount">{{ expenses }}</p>
      </div>
</div>
</template>
<script>
    export default{
        name: 'ExpenseCard',
        props:{
            expenses: String,
        },

    };
</script>
  
<style scoped>
.card {
    background-color: #001E18;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 18vw; 
    height: 10vw; 
    /*max-width: 120px;
    max-height: 120px; */
    margin: 10px;
    border-radius: 10px;
}

.expense-amount {
    font-size: 3rem; 
}
</style>