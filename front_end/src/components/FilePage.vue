<script setup lang="ts">
import ButtonBar from './ButtonBar.vue';
import FilesList from './files/FilesList.vue';
import FilesNavigation from './files/navigation/FilesNavigation.vue';
</script>

<template>
  <div class="button-bar">
    <ButtonBar selectedIndex="files" />
  </div>
  <div class="body">
    <FilesNavigation/>
  </div>
  <div class="body">
    <FilesList/>
  </div>
</template>

<style scoped>

.button-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.body {
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>