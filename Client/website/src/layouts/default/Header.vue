<template>
  <div>
    <a :href="getBaseUrl()">
      <v-img
        src="/BeeposTransp2.png"
        height="150"
        class="logo"
        alt="Bobagi logo, a yellow and black color pallete bee with tentacles"
      />
    </a>

    <div class="d-flex">
      <v-row v-if="!isAuthenticated" style="justify-content: end; margin: 2px 5px;">
        <!-- Conditional rendering of buttons based on authentication status -->
        <v-col style="flex-grow: 0">
          <v-btn
            color="primary"
            size="large"
            variant="outlined"
            :to="{ name: 'Login' }"
          >
            Sign In
          </v-btn>
        </v-col>

        <v-col style="flex-grow: 0">
          <v-btn
            color="primary"
            size="large"
            variant="outlined"
            :to="{ name: 'Register' }"
          >
            Sign Up
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-if="isAuthenticated" style="align-items: center; justify-content: end; margin: 2px 5px;">
        <!-- Display the username when the user is authenticated -->
        <v-col style="flex-grow: 0">
          <label id="firstLetterUsername" style="color: #ffd421; text-decoration: none;">
            {{ getUsernameFirstLetter() }}
          </label>
          <label id="Username">{{ getUsernameRest() }}</label>
        </v-col>

        <v-col style="flex-grow: 0">
          <v-btn
            color="primary"
            size="large"
            variant="outlined"
            @click="disconnectUser"
          >
            Disconnect
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false, // Initialize as false
    };
  },
  created() {
    // Check for the presence of the token on component creation
    this.isAuthenticated = this.checkAuthentication();
  },
  watch: {
    // Watch for changes in authentication status
    isAuthenticated(newStatus) {
      // You can perform additional actions when authentication status changes
    },
  },
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
    },
    checkAuthentication() {
      // Check if the token is present in localStorage
      const token = localStorage.getItem('authToken');
      return !!token; // Return true if the token exists, false otherwise
    },
    getUsernameFromToken() {
      // Extract the username from the token (implement your own logic)
      const token = localStorage.getItem('authToken');
      // Assuming the token payload is a JSON object with a 'username' field
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      return tokenPayload.username || '';
    },
    getUsernameFirstLetter() {
      const username = this.getUsernameFromToken();
      return username.charAt(0).toUpperCase();
    },
    getUsernameRest() {
      const username = this.getUsernameFromToken();
      return username.slice(1);
    },
    disconnectUser() {
      // Implement the logic to disconnect the user (remove the token from localStorage, etc.)
      localStorage.removeItem('authToken');
      this.isAuthenticated = false;
    },
  },
};
</script>
