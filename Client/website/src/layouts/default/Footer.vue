<template>
  <v-footer class="d-flex flex-column" style="padding: 0">
    <!-- <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div> -->

    <div
      class="px-4 py-2 bg-black text-center w-100 d-flex justify-space-between"
    >
      <p>&copy; {{ new Date().getFullYear() }} Bobagi. All rights reserved.</p>
      <a href="https://www.linkedin.com/in/gustavoaperin/" target="_blank"
        ><img
          src="/bobagiCursiveTransp.png"
          class="logo"
          style="height: 2.4em; padding: 0"
          alt="BeePos logo"
      /></a>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
// import { ref } from "vue";

// const icons = ref([
//   "mdi-facebook",
//   "mdi-twitter",
//   "mdi-linkedin",
//   "mdi-instagram",
// ]);
</script>
