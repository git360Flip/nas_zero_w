<script setup lang="ts">
import { useStore } from '@/utils/store'
import { getPathSegments, navigateToFile } from '@/utils/navigation'
import FilesPathPart from './FilesPathPart.vue'

const store = useStore()

</script>

<template>
  <div class="body">
    <h5 @click="navigateToFile(store, store.state.navigation.diskName)" >{{ store.state.navigation.diskName }}</h5>
    <FilesPathPart
      :key="folderName"
      :folder-name="folderName"
      v-for="folderName in getPathSegments(store.state.navigation.cwd)"/>
  </div>
</template>

<style scoped>

.body {
  display: flex;
  align-content: center;
  flex-direction: row;
}

h5 {
  color: rgba(255, 255, 255, 0.80);
}

h5:hover {
  color: white;
  cursor: pointer;
  text-shadow: 0px 0px 2px;
}

</style>