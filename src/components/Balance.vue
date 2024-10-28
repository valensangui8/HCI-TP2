<template>
    <div class="balance-card">
      <h3 class="responsive-header">Tu Balance</h3>
      <div class="balance-amount">
        <p v-if="showBalance">{{ formattedBalance }}</p>
        <p v-else>****</p>
        <img
          :src="showBalance ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar saldo"
          class="toggle-eye"
          @click="toggleBalance"
        />
      </div>
    </div>
</template>

<script setup>
    
    import { ref, computed } from 'vue';
    import eyeIcon from '@/assets/eye-icon.png';
    import closedEyeIcon from '@/assets/closed-eye-icon.png';
    import { useAuthStore } from '@/stores/authStore';
    const authStore = useAuthStore();

    const showBalance = ref(true);
    const toggleBalance = () => {
        showBalance.value = !showBalance.value;
    };
    
    // Computed balance and expenses formatting
const formattedBalance = computed(() => {
  const balance = authStore.currentUser?.balance || 0;
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(balance);
});



</script>

<style scoped>
    .balance-card {
        background-color: #0a1a1a;
        color: white;
        padding: 1vw;
        border-radius: 10px;
        height:12vw;
        width: 25vw;
        position: relative;
    }
    
    .balance-amount {
        display: flex;
        align-items: center;
    }

    .balance-amount p {
        font-size: 3vw;
        margin-right: 0.8vw;
        flex-grow: 1;
    }

    .toggle-eye {
        width: 3vw;
        height: 3vw;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }

    .toggle-eye:hover {
        transform: scale(1.2);
    }
    .responsive-header {
        font-size: 1vw;
    }

</style>