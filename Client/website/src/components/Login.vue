<template>
  <div class="fill-height" style="padding: 0;">
    <v-responsive class="align-center text-center fill-height primaryRadial">
      <div class="containerContent">
        <div class="panelContent" style="min-width: auto;">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <v-form>
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                  :error="usernameError"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                  :error="passwordError"
                ></v-text-field>

                <v-btn
                  color="primary"
                  size="x-large"
                  variant="flat"
                  style="min-width: 177px;"
                  :disabled="loading"
                  @click="loginUser"
                >
                  <template v-if="!loading">
                    Login
                  </template>
                  <template v-else>
                    <v-progress-circular
                      indeterminate
                      size="24"
                      color="white"
                      style="min-width: 177px;"
                    ></v-progress-circular>
                  </template>
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-responsive>
  </div>
</template>

<style scoped>
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const usernameError = ref(false);
const passwordError = ref(false);
const loading = ref(false);

const router = useRouter();

const loginUser = async () => {
  // Reset error flags
  usernameError.value = false;
  passwordError.value = false;

  // Check validation conditions
  if (!username.value || username.value.length < 6) {
    usernameError.value = true;
  }

  if (!password.value || password.value.length < 6) {
    passwordError.value = true;
  }

  // If any field has an error, prevent login
  if (usernameError.value || passwordError.value) {
    return;
  }

  // Proceed with login logic
  await authenticateUser();
};

const authenticateUser = async () => {
  try {
    // Set loading to true while waiting for the server response
    loading.value = true;

    // Make API request to authenticate user
    const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/auth/login', {
      username: username.value,
      password: password.value,
    });

    // Handle the response from the API
    console.log('User authenticated successfully:', response.data);

    // For simplicity, assume a successful authentication results in a token
    const token = response.data.token;

    // Store the token securely (e.g., in a cookie or local storage)
    localStorage.setItem('authToken', token);

    // Redirect to the home page
    router.push('/');
    router.go(0);
  } catch (error: any) {
    console.error('Error during user authentication:', error.response?.data || error.message);
    // Handle the error, e.g., show an error message to the user.
  } finally {
    // Set loading back to false when the request is complete (either success or failure)
    loading.value = false;
  }
};
</script>
