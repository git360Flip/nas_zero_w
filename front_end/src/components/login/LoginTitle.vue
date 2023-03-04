<script setup lang="ts">
let lastConnection: string = '04/03/2023 10:10'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="title">
    <h1 class="white">{{ title }}</h1>
    <h3>Last connection: {{ lastConnection }}</h3>
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
