<template>
  <section class="info-section bg-white">
    <div class="content-wrapper">
      <div class="text-content">
        <h2>¿Por qué tu dinero está más seguro dentro de <span>Poty</span>?</h2>
        <p>
          En Poty tu privacidad y datos son solamente tuyos, por eso no vendemos ni recolectamos datos de nuestros usuarios.
        </p>
        <p>
          Así evitamos que te lleguen anuncios dirigidos de cosas que no necesitas. <br/>
          <strong>Nuestra prioridad es cuidarte.</strong>
        </p>
      </div>
      <div class="image-content">
        <img src="@/assets/FotoLandingAbajo.png" alt="Foto poty" class="info-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.info-section {
  color: white;
  padding: 60px 20px;
  background-color: #0a1a1a; 
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content {
  flex: 1;
  padding-right: 20px;
}

.text-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
}

.text-content h2 span {
  color: #f9a825;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.text-content p strong {
  color: #f9a825;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
