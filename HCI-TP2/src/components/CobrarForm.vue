<template>
    <div class="overlay" v-if="isVisible" @click.self="closeSheet">
      <div class="down-sheet">
        <h2 style="color: black;">Cobrar Dinero</h2>
        <div>
          <div class="link-container" v-if="currentLink">
            <p>¡<strong>Éxito</strong> en generar link!</p>
            <div class="link-box">{{ currentLink }}
            </div>
          </div>
  
          <v-btn class="generate-button" @click="generatePaymentLink">Generar Link de Pago</v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'CobrarForm',
    setup() {
        const step = ref(1); 
      const currentLink = ref(''); 
      const isVisible = ref(true); 
  
      const generatePaymentLink = async() => {
        currentLink.value = `https://linkpagopoty-${Math.floor(Math.random() * 100) + 1}.com`;
        await copyToClipboard(currentLink.value)
        alert('Link automaticamente copiado!');
      };
  
      const copyToClipboard = async (link) => {
        await navigator.clipboard.writeText(link);
      };
  
      const openLink = (link) => {
        copyToClipboard(link);
      };
  
      const closeSheet = () => {
        isVisible.value = false; // Close the overlay
      };
  
      const openSheet = () => {
        isVisible.value = true; // Open the overlay
      };
      
      const nextStep = () => {
        if (step.value < 3) {
            step.value++;
        } else {
            resetForm();
        }
        };
    
        const prevStep = () => {
        if (step.value > 1) {
            step.value--;
        }
        };
    
      return {
        currentLink, // Return currentLink to be used in template
        generatePaymentLink,
        copyToClipboard,
        closeSheet,
        openSheet,
        isVisible,
      };
    },
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1000;
  }
  
  .down-sheet {
    width: 100%;
    max-width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 10px 10px 0 0;
    animation: slide-up 0.3s ease-out;
  }
  
  .link-container {
    margin-bottom: 20px; /* Add some space below the link */
  }
  
  .link-box {
    background-color: #f0f0f0; /* Light background for the link box */
    border: 1px solid #ccc; /* Border for the link box */
    border-radius: 5px; /* Rounded corners */
    padding: 10px; /* Padding for the text */
    word-wrap: break-word; /* Allow long links to wrap */
    color: black; /* Text color */
  }
  
  .generate-button {
    background-color: #001E18; /* Set button color */
    color: white;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
  }
  
  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  