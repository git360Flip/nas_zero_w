<script setup lang="ts">

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="card">
    <div class="inner-card">
        <h5>{{ title }}</h5>
    </div>
  </div>
</template>

<style scoped>

.card:hover {
  color: white;
  cursor: pointer;
  border: 1px solid white;
}

.card {
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 18px;
  text-align: center;
  border: 1px solid #9d9d9d;
  color: rgba(255, 255, 255, 0.80)
}

.inner-card {
  display: flex;
  align-content: center;
  flex-direction: row;
}

</style>