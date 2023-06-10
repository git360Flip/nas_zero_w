<script setup lang="ts">
import { navigateToFile } from '@/utils/navigation'
import { useStore } from '@/utils/store'

const store = useStore()

defineProps<{
  folderName: string
}>()
</script>

<template>
  <div class="body">
    <h5>/</h5>
    <h5 @click="navigateToFile(store, folderName)" class="folder-name">{{ folderName }}</h5>
  </div>
</template>

<style scoped>

.body {
  display: flex;
  align-content: center;
  flex-direction: row;
}

h5 {
  margin-left: 3px;
}

.folder-name {
  color: rgba(255, 255, 255, 0.80);
}

.folder-name:hover {
  color: white;
  cursor: pointer;
  text-shadow: 0px 0px 2px;
}

</style>