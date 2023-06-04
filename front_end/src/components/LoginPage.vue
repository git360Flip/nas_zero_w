<script setup lang="ts">
import LoginTitle from './login/LoginTitle.vue'
import LoginCard from './login/LoginCard.vue'
</script>

<template>
  <div>
    <header>
      <img alt="File Manager logo" src="../assets/logo.png" />
      <LoginTitle/>
    </header>

    <main>
      <div class="login-card">
        <LoginCard/>
      </div>
      <h4 class="credit">Made by Enzo Forzani - alpha v0.2.0</h4>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.credit {
  position: fixed;
  width: 250px;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
