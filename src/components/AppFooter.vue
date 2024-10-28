<template>
  <v-footer class="custom-footer bg-primary" app>
    <div class="footer-text text-caption text-white">
      &copy; 2016-{{ new Date().getFullYear() }} <span class="d-none d-sm-inline-block">Potty, LLC</span>
    </div>
  </v-footer>
</template>

<style scoped>
  .custom-footer {
    height: 40px;
  }
  .footer-text {
    position: absolute;
    right: 16px;
  }

</style>
