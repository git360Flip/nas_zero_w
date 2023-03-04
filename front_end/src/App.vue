<script setup lang="ts">
import LoginTitle from './components/login/LoginTitle.vue'
import LoginCard from './components/login/LoginCard.vue'
</script>

<template>
  <header>
    <img alt="File Manager logo" src="./assets/logo.png" />
    <LoginTitle title="My File Manager" />
  </header>

  <main class="centered">
    <div class="login-card">
      <LoginCard />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-card {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-height: 360px) {
  .centered {
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -40%);
  }
}
</style>
