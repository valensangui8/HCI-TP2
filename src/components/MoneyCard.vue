<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <div v-if="isBalance" class="balance-amount">
        <p v-if="showBalance">{{ formattedValue }}</p>
        <p v-else>****</p>
        <img
          :src="showBalance ? eyeIcon : closedEyeIcon"
          alt="Mostrar/ocultar saldo"
          class="toggle-eye"
          @click="$emit('toggle')"
        />
      </div>
      <p v-else class="expense-amount">{{ formattedValue }} </p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import eyeIcon from '@/assets/eye-icon.png';
  import closedEyeIcon from '@/assets/closed-eye-icon.png';
  
  const props = defineProps({
    title: String,
    value: Number,
    showBalance: Boolean,
    isBalance: Boolean
  });
  
  const formattedValue = computed(() => `$${props.value.toLocaleString()}`);
  </script>
  
  <style scoped>
  .card {
    background-color: #0a1a1a;
    color: white;
    padding: 1cqh;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 1rem;
  }
  
  .balance-amount {
    display: flex;
    align-items: center;
  }
  
  .balance-amount p {
    font-size: 2rem;
    margin-right: 10px;
    flex-grow: 1;
  }
  
  .expense-amount {
    font-size: 2rem;
  }
  
  .toggle-eye {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  .toggle-eye:hover {
    transform: scale(1.2);
  }
  </style>
  