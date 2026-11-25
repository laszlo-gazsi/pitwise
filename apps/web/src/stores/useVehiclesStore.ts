import { deleteVehicle, getVehicles } from '@/api/vehicle.service';
import type { Vehicle } from '@/types/vehicle';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useVehiclesStore = defineStore('vehicles', () => {
  const isLoading = ref<boolean>(false);
  const error = ref<Error | null>(null);

  const vehicles = ref<Vehicle[] | null>(null);

  const getAll = async () => {
    try {
      error.value = null;
      isLoading.value = true;
      vehicles.value = await getVehicles();
    } catch (e) {
      error.value = e as Error;
    } finally {
      isLoading.value = false;
    }
  };

  const remove = async (id: number) => {
    try {
      error.value = null;
      isLoading.value = true;
      const deleted = await deleteVehicle(id);
      if (vehicles.value) {
        vehicles.value = vehicles.value.filter((vehicle) => vehicle.id !== deleted.id);
      }
    } catch (e) {
      error.value = e as Error;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    error,
    vehicles,
    getAll,
    remove,
  };
});
