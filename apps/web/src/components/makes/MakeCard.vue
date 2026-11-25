<template>
  <PWCard>
    <template #title>
      {{ name }}
    </template>
    <template #actions>
      <v-spacer />
      <v-btn>Edit</v-btn>
      <v-btn @click="emit('remove')">Delete</v-btn>
    </template>
  </PWCard>
</template>
<script setup lang="ts">
import type { Make } from '@/types/make';
import PWCard from '@/components/shared/PWCard.vue';

const emit = defineEmits<{ remove: [] }>();

defineProps<Make>();
</script>
