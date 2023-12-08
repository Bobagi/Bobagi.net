<template>
  <a href="https://bobagi.net">
    <v-img
      src="/BeeposTransp2.png"
      height="150"
      class="logo"
      alt="CryptoPus logo"
    />
  </a>

  <div class="d-flex">
    <v-row style="justify-content: end; margin: 2px 5px;">
      <!-- Sign In Button -->
      <v-col style="flex-grow: 0">
        <v-btn
          color="primary"
          size="large"
          variant="outlined"
          :to="{ name: 'Register' }"
        >
          Sign In
        </v-btn>
      </v-col>

      <!-- Sign Up Button -->
      <!-- The event here should trigger a different method for registration -->
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
  </div>
</template>