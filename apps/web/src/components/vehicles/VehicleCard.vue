<template>
  <PWCard>
    <template #title>
      {{ name || licensePlate || `Vehicle ${id}` }}
    </template>
    <template #actions>
      <v-spacer />
      <v-btn>Edit</v-btn>
      <v-btn @click="emit('remove')">Delete</v-btn>
    </template>
  </PWCard>
</template>
<script setup lang="ts">
import type { Vehicle } from '@/types/vehicle';
import PWCard from '@/components/shared/PWCard.vue';

const emit = defineEmits<{ remove: [] }>();

defineProps<Vehicle>();
</script>
