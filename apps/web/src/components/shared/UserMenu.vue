<template>
  <v-btn @click="logout">Logout</v-btn>
</template>
<script setup lang="ts">
import keycloak from '@/auth/keycloak';

const logout = async () => {
  await keycloak.logout({
    redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL,
  });
};
</script>
