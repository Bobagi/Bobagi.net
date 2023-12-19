<template>
  <v-app-bar flat color="black" height="50">
    <v-col class="d-flex align-center">
      <!-- Wrap the content with router-link -->
      <a :href="getBaseUrl()" class="d-flex align-center" style="text-decoration: none; color: inherit;">
        <img
          src="/BeeposTransp2.png"
          class="logo"
          style="height: 40px; width: 40px"
          alt="Bobagi logo"
        />
        <v-app-bar-title class="ml-2 logo">
          <!-- Wrap the text with a regular anchor tag -->
          <span style="color: #ffd421; text-decoration: none;">B</span>obagi
        </v-app-bar-title>
      </a>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    getBaseUrl() {
      // Check if the environment is development
      if (process.env.NODE_ENV === 'development') {
        // Return the localhost URL
        return 'http://localhost:3000';
      } else {
        // Return the production URL
        return 'https://bobagi.net';
      }
    }
  }
};
</script>
