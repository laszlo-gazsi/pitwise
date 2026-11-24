<template>
  {{ id }}
</template>
<script setup lang="ts">
import type { Make } from '@/types/make';

defineProps<Make>();
</script>
