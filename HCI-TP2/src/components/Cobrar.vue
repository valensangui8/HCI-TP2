<template>
    <router-link to="/cobrar" class="cobrar-btn">
      <img src="@/assets/cobrar-icon.png" alt="Cobrar" class="imagen" />
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
.cobrar-btn {
    width: 10vw; 
    height: 10vw; 
    max-width: 120px;
    max-height: 120px; 
    background-color: #001E18; 
    color: white; 
    display: flex; 
    align-items: center;
    border-radius: 12px;
    cursor: pointer; 
    transition: background-color 0.3s; 
}

/* Optional: Add hover effect */
.cobrar-btn:hover {
    background-color: #00312f; /* Slightly lighter shade on hover */
}

.imagen {
    width: 60%; /* Adjust image width to be smaller */
    height: 60%; /* Adjust image height to maintain aspect ratio */
    object-fit: contain; /* Ensures the image is contained within the button */
    margin: auto; /* Centers the image horizontally */
    display: block; /* Ensures the image is centered */
}
</style>
  