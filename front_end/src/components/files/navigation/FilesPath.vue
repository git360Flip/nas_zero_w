<script setup lang="ts">
import { useStore } from '@/utils/store';
import FilesPathPart from './FilesPathPart.vue';
import { onMounted, ref, type Ref } from 'vue';

const pathSegments: Ref<string[]> = ref([])

const store = useStore();

onMounted(() => {
  pathSegments.value = decomposePath(store.state.path)
})

function decomposePath(path: string) {
  return path.split('/').splice(1)
}

</script>

<template>
  <div class="body">
    <h5>{{ store.state.diskName }}</h5>
    <FilesPathPart :folder-name="folderName" v-for="folderName in pathSegments" :key="folderName"/>
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