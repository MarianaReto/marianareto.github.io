<template>
  <v-container class="fill-height d-flex align-center">
    <v-row>
      <v-col cols="6">
        <v-row>
          <h1 class="text-h2 font-weight-bold">Hi,</h1>
        </v-row>
        <v-row>
          <h1 class="text-h2 font-weight-bold">I'm Mariana</h1>
        </v-row>
        <v-row>
          <h1 class="text-h2 font-weight-bold">Software Developer</h1>
        </v-row>
        <v-row class="custom-spacing">
          <v-btn size="x-large" color="teal-darken-2" @click="goToContactPage">Contact Me</v-btn>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row class="justify-center">
          <v-img height="300" src="@/assets/portrait.png"/>
        </v-row>
      </v-col>
    </v-row>
    <div class="py-14"/>
  </v-container>
</template>


<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const goToContactPage = () => {
  router.push('/contact');
};
</script>

<style>
.custom-spacing {
  margin-top: 100px;
}
</style>
