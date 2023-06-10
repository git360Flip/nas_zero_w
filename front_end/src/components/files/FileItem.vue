<script setup lang="ts">
import { ref } from 'vue'
import type { FileDisk } from '@/utils/types/filesRo'
import { navigateToFile } from '@/utils/navigation'
import { useStore } from '@/utils/store'

const isMouseOver = ref(false)

const store = useStore()

defineProps<{
  file: FileDisk
}>()
</script>

<template>
  <div :class="{ 'body': true, 'body-hover': isMouseOver }" @mouseover="isMouseOver = true" @mouseleave="isMouseOver = false">
    <div v-if="file.isDir === true" @click="navigateToFile(store, file.name)">
      <img src="../../assets/filetype/folder.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('aac') === true">
      <img src="../../assets/filetype/filetype-aac.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('css') === true">
      <img src="../../assets/filetype/filetype-css.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('csv') === true">
      <img src="../../assets/filetype/filetype-csv.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('docx') === true">
      <img src="../../assets/filetype/filetype-docx.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('doc') === true">
      <img src="../../assets/filetype/filetype-doc.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('exe') === true">
      <img src="../../assets/filetype/filetype-exe.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('heic') === true">
      <img src="../../assets/filetype/filetype-heic.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('html') === true">
      <img src="../../assets/filetype/filetype-html.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('java') === true">
      <img src="../../assets/filetype/filetype-java.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('json') === true">
      <img src="../../assets/filetype/filetype-json.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('js') === true">
      <img src="../../assets/filetype/filetype-js.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('pdf') === true">
      <img src="../../assets/filetype/filetype-pdf.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('pptx') === true">
      <img src="../../assets/filetype/filetype-pptx.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('ppt') === true">
      <img src="../../assets/filetype/filetype-ppt.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('sh') === true">
      <img src="../../assets/filetype/filetype-sh.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('txt') === true">
      <img src="../../assets/filetype/filetype-txt.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('xlsx') === true">
      <img src="../../assets/filetype/filetype-xlsx.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('xls') === true">
      <img src="../../assets/filetype/filetype-xls.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('mp3') === true || file.ext.includes('wav') === true">
      <img src="../../assets/filetype/file-music.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('png') === true || file.ext.includes('jpg') === true">
      <img src="../../assets/filetype/file-image.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('mp4') === true || file.ext.includes('mov') === true">
      <img src="../../assets/filetype/file-play.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else-if="file.ext.includes('zip') === true || file.ext.includes('7z') === true">
      <img src="../../assets/filetype/file-zip.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div v-else>
      <img src="../../assets/filetype/file.png" :class="{ 'img-hover': isMouseOver }"/>
    </div>
    <div class="title">
      <h5 @click="navigateToFile(store, file.name)" :class="{ 'text-hover': isMouseOver }">{{ file.name }}</h5>
    </div>
  </div>
</template>

<style scoped>

.body {
  margin: 6px;
  display: flex;
  flex-direction: row;
}

.title {
  padding-bottom: 2px;
  padding-left: 14px;
}

h5 {
  color: white;
}

.body-hover {
  cursor: pointer;
}

.text-hover {
  cursor: pointer;
  text-shadow: 1px 0px 0px;
}

.img-hover {
  cursor: pointer;
  filter: invert(100%);
}

img {
  filter: invert(80%);
  width: 24px;
  height: 24px;
}

</style>