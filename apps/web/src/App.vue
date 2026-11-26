<script setup lang="ts">
import UserMenu from './components/shared/UserMenu.vue';
</script>

<template>
  <v-app>
    <v-app-bar title="PitWise">
      <v-btn to="/vehicles">Vehicles</v-btn>
      <v-btn to="/makes">Makes</v-btn>
      <user-menu />
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
