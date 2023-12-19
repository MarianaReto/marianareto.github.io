<template>
  <v-app-bar flat color="teal-darken-2">
    <v-app-bar-title >
      Mariana Reto
    </v-app-bar-title>
    <v-tabs fixed-tabs bg-color="teal-darken-2">
      <v-tab>
        <router-link to="/">Home</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/about">About</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/skills">Skills</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/projects">Projects</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/contact">Contact Me</router-link>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<style>
a {
  color: white;
  text-decoration: none;
}
</style>
