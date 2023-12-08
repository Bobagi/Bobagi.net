<template>
  <v-app-bar flat color="black" height="50">
    <v-col class="d-flex align-center">
      <!-- Wrap the content with router-link -->
      <router-link to="https://bobagi.net" class="d-flex align-center" style="text-decoration: none; color: inherit;">
        <img
          src="/BeeposTransp2.png"
          class="logo"
          style="height: 40px; width: 40px"
          alt="Bobagi logo"
        />
        <v-app-bar-title class="ml-2 logo">
          <!-- Wrap the text with router-link -->
          <span style="color: #ffd421; text-decoration: none;">B</span>obagi
        </v-app-bar-title>
      </router-link>
    </v-col>
  </v-app-bar>
</template>