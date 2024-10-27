<!--<template>
    <v-card
      class="mx-auto"
      :style="{ width: '300px', backgroundColor: '#0A1A1A', padding: '10px' }"
    >
      <template v-slot:prepend>
        <v-avatar size="32" class="mr-2"> 
          <v-img :src="avatar" alt="Avatar"></v-img>
        </v-avatar>
      </template>
  
      <v-card-title>
        <div>
          <h4 class="destinatario-text">{{ recipientName }}</h4> 
          <span class="subtitle">{{ bankName }}</span>
        </div>
      </v-card-title>
  
      <v-card-text>
        <h5 class="destinatario-text">CVU: {{ cvu }}</h5> 
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { defineComponent, toRefs } from 'vue'
  
  export default defineComponent({
    name: 'Destinatario',
    props: {
      avatar: {
        type: String,
        required: true,
      },
      recipientName: {
        type: String,
        required: true,
      },
      bankName: {
        type: String,
        required: true,
      },
      cvu: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const { avatar, recipientName, bankName, cvu } = toRefs(props)
  
      return {
        avatar,
        recipientName,
        bankName,
        cvu,
      }
    },
  })
  </script>
  <style scoped>
  .destinatario-text {
    color: white;
    margin: 0; /* Remove default margin */
  }
  .subtitle {
    font-size: 0.9em; /* Adjust as necessary */
    color: white; /* Ensuring the subtitle text is white */
  }
  </style>
  -->

  <template>
    <v-card
      class="mx-auto pa-4 d-flex flex-column align-center"
      color="primary"
      width="300"
    >
      <v-avatar size="32" class="mb-2">
        <v-img :src="avatar" alt="Avatar"></v-img>
      </v-avatar>
  
      <v-card-title class="justify-center py-0">
        <div class="text-center">
          <h4 class="text-h6 text-white mb-1">{{ recipientName }}</h4>
          <span class="subtitle-2 text-white">{{ bankName }}</span>
        </div>
      </v-card-title>
  
      <v-card-text class="text-center">
        <h5 class="text-subtitle-1 text-white">CVU: {{ cvu }}</h5>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { defineComponent, toRefs } from 'vue';
  
  export default defineComponent({
    name: 'Destinatario',
    props: {
      avatar: {
        type: String,
        required: true,
      },
      recipientName: {
        type: String,
        required: true,
      },
      bankName: {
        type: String,
        required: true,
      },
      cvu: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const { avatar, recipientName, bankName, cvu } = toRefs(props);
  
      return {
        avatar,
        recipientName,
        bankName,
        cvu,
      };
    },
  });
  </script>
  
  <style scoped>
  .text-white {
    color: white !important;
  }
  </style>
  