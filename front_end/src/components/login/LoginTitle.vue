<script setup lang="ts">
import { useStore } from '../../utils/store';
import { onMounted } from 'vue';
import type UserRo from '../../utils/types/userRo';

const store = useStore();

async function getLastConnectionDate() {
  const response = await fetch(`https://127.0.0.1:8000/user`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
  if (response.status == 200) {
    const jsonData = await response.json() as UserRo;
    store.state.connection = jsonData.lastLoggedInDate;
  }
}

onMounted(() => {
  getLastConnectionDate();
})

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="title">
    <h1 class="white">{{ title }}</h1>
    <h3 v-if="store.state.connection === 'Not connected to back end'" class="red">Not connected to back end</h3>
    <h3 v-else>{{ store.state.connection }}</h3>
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
