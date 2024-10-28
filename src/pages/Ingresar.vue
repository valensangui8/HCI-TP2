<template>
  <div class="dashboard-page">
  
    <div class="main-content">
      <header>
        <h1>Vista General</h1>
        <p>Buenas tardes, <strong>James Bond</strong></p>
      </header>

      <div class="balance-section">
        <div class="balance-card">
          <h3>Tu Balance</h3>
          <p>12750,60$</p>
          <img src="@/assets/eye-icon.png" alt="Toggle Visibility" class="toggle-visibility" />
        </div>
        <div class="balance-card">
          <h3>Tus Gastos</h3>
          <p>6451,00$</p>
          <img src="@/assets/eye-icon.png" alt="Toggle Visibility" class="toggle-visibility" />
        </div>
      </div>

      <div class="operations-section">
        <router-link to="/deposit" class="operation-link">
          <div class="operation">
            <img src="@/assets/ingresar-icon.png" alt="Ingresar" />
            <p>Ingresar</p>
          </div>
        </router-link>
        <div class="operation">
          <img src="@/assets/cobrar-icon.png" alt="Cobrar" />
          <p>Cobrar</p>
        </div>
        <div class="operation">
          <img src="@/assets/enviar-icon.png" alt="Enviar" />
          <p>Enviar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard-page {
  display: flex;
  height: 100vh;
}

.sidebar {
  background-color: #0a1a1a;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.sidebar-icon {
  margin: 20px 0;
  cursor: pointer;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

header {
  font-size: 1.2rem;
  color: #333;
}

.balance-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.balance-card {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  text-align: center;
  position: relative;
}

.balance-card p {
  font-size: 2rem;
  margin-top: 10px;
}

.toggle-visibility {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.operations-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.operation {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.operation img {
  width: 40px;
  height: 40px;
}

.operation p {
  margin-top: 5px;
  color: #333;
}
</style>
