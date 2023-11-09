<template>
  <a href="https://bobagi.net">
    <v-img
      src="/BeeposTransp1.png"
      height="150"
      class="logo"
      alt="CryptoPus logo"
    />
  </a>

  <v-form
    @submit.prevent="onSubmitLogin"
    class="d-flex"
    style="justify-content: right; margin: 8px"
  >
    <div class="d-flex w-50">
      <v-row>
        <!-- Email Field -->
        <v-col>
          <v-text-field
            v-model="user.email"
            :readonly="loading"
            :rules="[rules.required]"
            clearable
            label="Email"
            color="primary"
          ></v-text-field>
        </v-col>

        <!-- Password Field -->
        <v-col>
          <v-text-field
            v-model="user.password"
            :readonly="loading"
            :rules="[rules.required]"
            clearable
            label="Password"
            placeholder="Enter your password"
            color="primary"
            type="password"
          ></v-text-field>
        </v-col>

        <!-- Sign In Button -->
        <v-col style="flex-grow: 0">
          <v-btn
            :disabled="loading"
            :loading="loading"
            color="primary"
            size="large"
            type="submit"
            variant="outlined"
          >
            Sign In
          </v-btn>
        </v-col>

        <!-- Sign Up Button -->
        <!-- The event here should trigger a different method for registration -->
        <v-col style="flex-grow: 0">
          <v-btn
            :disabled="loading"
            :loading="loading"
            color="primary"
            size="large"
            @click="onSubmitRegister"
            variant="outlined"
          >
            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
console.log(apiBaseUrl);
// User data
const user = ref({
  email: "",
  password: "",
});
const loading = ref(false);

// Validation rules
const rules = {
  required: (value: string) => !!value || "Field is required",
};

// Methods for form submission
const onSubmitLogin = async () => {
  loading.value = true;
  console.log("Trying to logging: " + `${apiBaseUrl}/login`);

  try {
    // Send login request to your server
    const response = await fetch(`${apiBaseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.value),
    });
    const data = await response.json();

    // Handle response from the server
    if (data.success) {
      // Redirect or store the session token
      console.log("Login successful", data);
    } else {
      // Handle errors, show messages to the user
      console.error("Login failed", data.message);
    }
  } catch (error) {
    console.error("Login error", error);
  } finally {
    loading.value = false;
  }
};

const onSubmitRegister = async () => {
  loading.value = true;
  console.log("Trying to register: " + `${apiBaseUrl}/register`);

  try {
    // Send registration request to your server
    const response = await fetch(`${apiBaseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.value),
    });
    const data = await response.json();

    // Handle response from the server
    if (data.success) {
      // Redirect or show success message
      console.log("Registration successful", data);
    } else {
      // Handle errors, show messages to the user
      console.error("Registration failed", data.message);
    }
  } catch (error) {
    console.error("Registration error", error);
  } finally {
    loading.value = false;
  }
};
</script>
