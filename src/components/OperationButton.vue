<template>
    <router-link :to="link" class="operation-link">
      <div class="operation">
        <!-- <img :src="icon" :alt="text" class="operation-icon"> -->
        <img :src="icon" :alt="text" class="operation-icon">
        
        <p>{{ text }}</p>
      </div>
    </router-link>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
   
  const props = defineProps({
    link: String,
    icon: String,
    text: String
  });
  </script>
  
  <style scoped>
  .operation {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a3a3a;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    height: 80%;
  }
  
  .operation p {
    color: white;
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
  }
  
  .operation-icon {
    width: 30px;
    height: 30px;
  }
  
  .operation-link {
    text-decoration: none;
    color: inherit;
  }
  
  .operation-link:hover {
    text-decoration: none;
  }
  </style>
  