<template>
  <h1>Vehicles</h1>
  <div v-if="isLoading && !vehicles">Loading...</div>
  <div v-else-if="error">Error loading vehicles...</div>
  <div v-else-if="vehicles && !vehicles.length">No vehicles found...</div>
  <div v-else>
    <VehicleCard v-for="vehicle in vehicles" :key="vehicle.id" v-bind="vehicle" />
  </div>
</template>
<script setup lang="ts">
import VehicleCard from '@/components/vehicles/VehicleCard.vue';
import { useVehiclesStore } from '@/stores/useVehiclesStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const vehiclesStore = useVehiclesStore();
const { isLoading, error, vehicles } = storeToRefs(vehiclesStore);
const { getAll } = vehiclesStore;

onMounted(getAll);
</script>
