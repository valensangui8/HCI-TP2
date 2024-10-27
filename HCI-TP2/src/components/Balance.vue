<template>
    <div class="balance-cards">
      <!-- Tarjetas de Balance y Gastos -->
      <div class="card">
        <h3>Tu Balance</h3>
        <div class="balance-amount">
          <p v-if="showBalance">{{ balance }}</p>
          <p v-else>$****</p>
          <img
          :src="showBalance ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar saldo"
          class="toggle-eye"
          @click="toggleBalance"
        />
        </div>
      </div>
</div>
</template>
<script>
    import eyeIcon from '@/assets/eye-icon.png';
    import closedEyeIcon from '@/assets/closed-eye-icon.png';
    export default{
        name: 'BalanceCard',
        props:{
            balance: String,
            showBalance: Boolean,
        },
        data() {
        return {
            eyeIcon,
            closedEyeIcon,
        };
    },
    methods: {
      toggleBalance() {
        this.$emit('update:showBalance', !this.showBalance); // Cambia entre mostrar/ocultar el saldo
      },
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
    position: relative; /* Para posicionar el ícono */
    margin: 10px;
    border-radius: 10px;
}

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
.balance-amount {
    margin-top:20px;
    display: flex;
    align-items: center;
    
}

.balance-amount p {
    font-size: 3rem; /* Tamaño más grande para el balance */
    margin-right: 10px;
    flex-grow: 1; /* Esto empuja el ícono hacia el extremo derecho */
}
</style>