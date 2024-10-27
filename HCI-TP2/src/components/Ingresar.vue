<template>
    <router-link to="/ingresar" class="ingresar-btn">
      <img src="@/assets/ingresar-icon.png" alt="Ingresar" class="imagen" />
    </router-link>
  </template>

  <script>
  export default {
    data() {
      return {
        sheet: false,
      };
    },
  };
  </script>
  
<style>
.ingresar-btn {
  width: 10vw; 
    height: 10vw; 
    max-width: 150px;
    max-height: 150px; 
    background-color: #001E18; 
    color: white; 
    display: flex; 
    align-items: center;
    border-radius: 12px;
    margin:10px;

    cursor: pointer; 
    transition: background-color 0.3s; 
}


.ingresar-btn:hover {
    background-color: #00312f;
}

.imagen {
    width: 40%; 
    height: 40%;
    object-fit: contain; 
    margin: auto;
    display: block; 
}
</style>
  