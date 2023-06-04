<script setup lang="ts">
import type { FileDisk } from '@/utils/types/filesRo';
import FileItem from './FileItem.vue';
import { onMounted, ref, type Ref } from 'vue';
import { useStore } from '@/utils/store';
import { startLoading } from '@/utils/loader';

function getDiskName(diskCwd: string) {
  let diskCwdWithoutLastSlash = diskCwd.slice(0, -1)
  return diskCwdWithoutLastSlash.slice(diskCwdWithoutLastSlash.lastIndexOf('/') + 1)
}

const files: Ref<FileDisk[]> = ref([])
const isLoading = ref(false)

const store = useStore();

onMounted(() => {
  isLoading.value = true;
  const loader = startLoading()
  store.state.api.getFiles('/').then((response) => {
    if (response != null) {
      store.state.diskName = getDiskName(response.diskCwd)
      store.state.path = '/'
      files.value = response.files
    }
  });
  loader.hide()
  isLoading.value = false
})

</script>

<template>
  <div v-if="isLoading === false && files.length > 0" class="card">
    <div class="inner-card">
      <FileItem :file="item" v-for="item in files" :key="item.link"/>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 6px;
  border-radius: 18px;
  border: 1px solid #9d9d9d;
}

.inner-card {
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
}

</style>