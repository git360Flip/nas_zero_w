<script setup lang="ts">
import LoginTitle from './login/LoginTitle.vue'
import LoginCard from './login/LoginCard.vue'
import { useStore } from '@/utils/store'
import { onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  store.state.network.api.getLastConnectionDate().then((connectionResult) => {
    store.state.network.connectionState = connectionResult
  })
})
</script>

<template>
  <div>
    <header>
      <img alt="File Manager logo" src="../assets/logo.png" />
      <LoginTitle/>
    </header>

    <main>
      <div v-if="store.state.network.connectionState !== 'Not connected to back end'" class="login-card">
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
