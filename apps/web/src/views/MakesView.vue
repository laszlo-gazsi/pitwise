<template>
  <h1>Makes</h1>
  <div v-if="isLoading && !makes">Loading...</div>
  <div v-else-if="error">Error loading makes...</div>
  <div v-else-if="makes && !makes.length">No makes found...</div>
  <div v-else>
    <MakeCard v-for="make in makes" :key="make.id" v-bind="make" @remove="remove(make.id)" />
  </div>
</template>
<script setup lang="ts">
import MakeCard from '@/components/makes/MakeCard.vue';
import { useMakesStore } from '@/stores/useMakesStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const makesStore = useMakesStore();
const { isLoading, error, makes } = storeToRefs(makesStore);
const { getAll, remove } = makesStore;

onMounted(getAll);
</script>
