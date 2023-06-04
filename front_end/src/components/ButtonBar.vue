<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '@/utils/store';

const router = useRouter()
const store = useStore()

function logout() {
  store.state.api.logout();
  router.push('/')
}
defineProps<{
  selectedIndex: string
}>()
</script>

<template>
  <div class="card">
    <div class="inner-card">
      <div>
        <img v-if="selectedIndex === 'files'" alt="HDD icon" src="../assets/hdd.png" class="current-icon-selected"/>
        <img v-else alt="HDD icon" src="../assets/hdd.png" class="icon-not-selected"/>
      </div>
      <div>
        <img v-if="selectedIndex === 'notes'" alt="Text icon" src="../assets/text.png" class="current-icon-selected"/>
        <img v-else alt="Text icon" src="../assets/text.png" class="icon-not-selected"/>
      </div>
      <div>
        <img v-if="selectedIndex === 'settings'" alt="Settings icon" src="../assets/gear.png" class="current-icon-selected"/>
        <img v-else alt="Settings icon" src="../assets/gear.png" class="icon-not-selected"/>
      </div>
      <div>
        <img alt="Logout icon" src="../assets/logout.png" @click="logout" class="icon-not-selected"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 6px;
  border-radius: 18px;
  text-align: center;
  width: 280px;
  border: 1px solid #9d9d9d;
}

.icon-not-selected:hover {
  filter: invert(100%);
  cursor: pointer;
}
.icon-not-selected {
  filter: invert(65%);
}

.current-icon-selected:hover {
  filter: invert(100%);
  cursor: default;
}
.current-icon-selected {
  filter: invert(94%);
}

.inner-card {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

</style>