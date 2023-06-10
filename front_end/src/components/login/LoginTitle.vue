<script setup lang="ts">
import { useStore } from '@/utils/store'

const store = useStore()

</script>

<template>
  <div class="title">
    <h1 class="white">My File Manager</h1>
    <h3 v-if="store.state.network.connectionState === 'Not connected to back end'" class="red">{{ store.state.network.connectionState }}</h3>
    <h3 v-else>{{ store.state.network.connectionState }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.4rem;
}

h3 {
  font-size: 1rem;
}

.title {
  padding-left: 20px;
}
</style>
