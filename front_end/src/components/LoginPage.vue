<script setup lang="ts">
import LoginTitle from './login/LoginTitle.vue'
import LoginCard from './login/LoginCard.vue'
</script>

<template>
  <div class="login-page">
    <header>
      <img alt="File Manager logo" src="../assets/logo.png" />
      <LoginTitle/>
    </header>

    <main>
      <div class="login-card">
        <LoginCard/>
      </div>
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

.login-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 360px;
  align-items: center;
}

.login-card {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
