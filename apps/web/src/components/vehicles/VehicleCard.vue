<template>
  {{ id }}
</template>
<script setup lang="ts">
import type { Vehicle } from '@/types/vehicle';

defineProps<Vehicle>();
</script>
