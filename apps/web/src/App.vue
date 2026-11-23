<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getMakes } from './api/make.service';
import type { Make } from './types/make';
import type { Vehicle } from './types/vehicle';
import { getVehicles } from './api/vehicle.service';

const makes = ref<Make[] | null>(null);
const vehicles = ref<Vehicle[] | null>(null);

onMounted(async () => {
  makes.value = await getMakes();
  vehicles.value = await getVehicles();
});
</script>

<template>
  <p>Test Makes</p>
  {{ makes }}

  <p>Test Makes</p>
  {{ vehicles }}
</template>

<style scoped></style>
