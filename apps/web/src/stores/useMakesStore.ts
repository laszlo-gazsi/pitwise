import { deleteMake, getMakes } from '@/api/make.service';
import type { Make } from '@/types/make';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMakesStore = defineStore('makes', () => {
  const isLoading = ref<boolean>(false);
  const error = ref<Error | null>(null);

  const makes = ref<Make[] | null>(null);

  const getAll = async () => {
    try {
      error.value = null;
      isLoading.value = true;
      makes.value = await getMakes();
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
      const deletedMake = await deleteMake(id);
      if (makes.value) {
        makes.value = makes.value.filter((make) => make.id !== deletedMake.id);
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
    makes,
    getAll,
    remove,
  };
});
