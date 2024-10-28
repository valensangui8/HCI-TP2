  <template>
    <v-card
      class="mx-auto pa-4 d-flex flex-column align-center"
      color="primary"
      width="300">  
      <v-card-title class="justify-center py-0">
        <div class="text-center">
          <h4 class="text-h6 text-white mb-1">{{ recipientName }}</h4>
          <span class="subtitle-2 text-white">{{ bankName }}</span>
        </div>
      </v-card-title>
    <v-card-text class="text-center" v-if="cvu">
      <h5 class="text-subtitle-1 text-white">CVU: {{ cvu }}</h5>
    </v-card-text>

    <v-card-text class="text-center" v-if="link">
      <h5 class="text-subtitle-1 text-white">Link de pago: {{ link }}</h5>
    </v-card-text>
    </v-card>
  </template>
  
<script setup>
import { toRefs } from 'vue';

const props = defineProps({
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
    required: false,
  },
  link:{
    type: String,
    required: false,
  }
});

const { avatar, recipientName, bankName, cvu } = toRefs(props);
</script>
  
<style scoped>
  .text-white {
    color: white !important;
}
</style>
  