<template>
  <v-navigation-drawer 
      color="#001E18" 
      permanent  >
      <v-list>
          <v-list-item>
              <img src="@/assets/LogoPotty.png" alt="Logo Potty" title="Poty" style="width: 30%; height: auto; max-height: 300px;" /> 
          </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-inbox" title="Inbox" value="inbox" to="/inbox"></v-list-item>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Investing" value="investing" to="/investing"></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list density="compact" nav>
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
  .v-list-item {
      color: white;
  }
</style>
