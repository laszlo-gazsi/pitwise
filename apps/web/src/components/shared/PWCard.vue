<template>
  <v-card class="my-3">
    <v-card-title>
      <slot name="title" />
    </v-card-title>

    <v-card-actions>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
