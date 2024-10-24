<template>
    <section class="hero">
      <h1>Ahora podés <span>confiar</span>, tu dinero está en la <span>Urna</span>.</h1>
      <router-link to="/register" class="cta-btn">Comenzar</router-link>
    </section>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .hero {
    background-color: #0a1a1a;
    color: white;
    padding: 100px 20px;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 35px;
  }
  
  .hero h1 span {
    color: #f9a825; /* Color amarillo para resaltar palabras */

  }
  
  .cta-btn {
    margin-top: 20px;
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    text-decoration: none;
  }
  </style>
  