<template>
  <v-app>
    <v-app-bar title="PitWise">
      <v-btn to="/vehicles">Vehicles</v-btn>
      <v-btn to="/makes">Makes</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
