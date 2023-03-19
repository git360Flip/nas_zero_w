<script setup lang="ts">
import ButtonBar from './ButtonBar.vue';
</script>

<template>
  <div class="button-bar">
    <ButtonBar selectedIndex="files" />
  </div>
</template>

<style scoped>

.button-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>