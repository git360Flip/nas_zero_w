<script setup lang="ts">
import FileItem from './FileItem.vue'
import { onMounted, ref } from 'vue'
import { useStore } from '@/utils/store'
import { startLoading } from '@/utils/loader'

const isLoading = ref(false)

const store = useStore()

function formatDiskName(diskCwd: string) {
  return diskCwd.slice(diskCwd.lastIndexOf('/') + 1)
}

function getFiles(path: string) {
  isLoading.value = true
  const loader = startLoading()
  store.state.network.api.getFiles(path).then((response) => {
    if (response != null) {
      store.state.navigation.diskName = formatDiskName(response.diskCwd)
      store.state.files = response.files
    }
  })
  loader.hide()
  isLoading.value = false
}

onMounted(() => {
  getFiles(store.state.navigation.cwd)
})
</script>

<template>
  <div v-if="isLoading === false && store.state.files.length > 0" class="card">
    <div class="inner-card">
      <FileItem :file="file" v-for="file in store.state.files" :key="file.link"/>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 18px;
  border: 1px solid #9d9d9d;
}

.inner-card {
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
  display: flex;
  flex-direction: column;
}

</style>