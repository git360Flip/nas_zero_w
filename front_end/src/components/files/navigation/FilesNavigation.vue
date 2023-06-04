<script setup lang="ts">
import FilesButton from './FilesButton.vue';
import FilesPath from './FilesPath.vue';


</script>

<template>
  <div class="card">
    <div class="inner-card">
      <div class="navigation-button">
        <img src="../../../assets/arrow-left.png"/>
      </div>
      <div class="navigation-button">
        <img src="../../../assets/arrow-right.png"/>
      </div>
      <div class="filepath">
        <FilesPath/>
      </div>
    </div>
    <div class="files-button-div">
      <FilesButton title="Add"/>
      <FilesButton title="Select"/>
    </div>
  </div>
</template>

<style scoped>

.card {
  margin-bottom: 4px;
  padding: 4px;
  border-radius: 18px;
  text-align: center;
  border: 1px solid #9d9d9d;
}

.inner-card {
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  align-content: center;
  flex-direction: row;
}

.files-button-div {
  padding-top: 6px;
  display: flex;
  align-content: center;
  flex-direction: row;
}

.filepath {
  padding-top: 6px;
}

.navigation-button {
  padding-top: 4px;
  padding-right: 10px;
}

img:hover {
  filter: invert(100%)
}

img {
  width: 24px;
  height: 24px;
  filter: invert(90%);
}

</style>