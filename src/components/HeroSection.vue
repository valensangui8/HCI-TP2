<template>
  <section class="hero bg-white">
    <h1>Ahora podés <span>confiar</span>, tu dinero está en <span>Poty</span>.</h1>
    <router-link to="/register" class="cta-btn ">Comenzar</router-link>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  color: white;
  padding: 100px 20px;
  text-align: center;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 35px;
}

.hero h1 span {
  color: #f9a825;
}

.cta-btn {
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  padding: 15px 30px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: inline-block;
  cursor: pointer;
}

.cta-btn:hover {
  background-color: #1e7c34;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
