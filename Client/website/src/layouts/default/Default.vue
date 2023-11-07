<template>
  <v-app>
    <AppBar />
    <v-main>
      <!-- v-main will ensure that content is below the app bar -->
      <Header />
      <View />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from "./AppBar.vue";
import Header from "./Header.vue";
import View from "./View.vue";
import Footer from "./Footer.vue";
</script>
