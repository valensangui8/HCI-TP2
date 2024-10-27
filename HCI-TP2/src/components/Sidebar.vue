<template>
  <v-navigation-drawer color="#0a1a1a" permanent>
    <v-list>
      <v-list-item>
        <img
          src="@/assets/LogoPotty.png"
          alt="Logo Potty"
          title="Poty"
          style="width: 40%; height: auto; max-height: 300px;" 
        />
      </v-list-item>
    </v-list>


    <v-list density="compact" nav class="large-list">
      <v-list-item prepend-icon="mdi-inbox" title="Inbox" value="inbox" to="/inbox"></v-list-item>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="Investing" value="investing" to="/investing"></v-list-item>
    </v-list>
    <!-- <br/> <-- cambiar, esta re villero esto --> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <v-list density="compact" nav class="large-list">
      <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" to="/settings"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" to="/logout"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.large-list .v-list-item {
  font-size: 1.25rem; /* Increases font size */
}

.large-list .v-icon {
  font-size: 1.75rem; /* Increases icon size */
}
</style>
