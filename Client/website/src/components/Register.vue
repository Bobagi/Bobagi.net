<template>
  <div class="fill-height" style="padding: 0;">
    <v-responsive class="align-center text-center fill-height primaryRadial">
      <div class="containerContent">
        <div class="panelContent" style="min-width: auto;">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                  :error="emailError"
                ></v-text-field>

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

                <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  required
                  :error="confirmPasswordError"
                ></v-text-field>

                <v-btn
                  color="primary"
                  size="x-large"
                  variant="flat"
                  style="min-width: 177px;"
                  :disabled="loading"
                  @click="validateFields"
                >
                  <template v-if="!loading">
                    Create Account
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
import { useRouter } from 'vue-router'; // Import the useRouter hook

const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const emailError = ref(false);
const usernameError = ref(false);
const passwordError = ref(false);
const confirmPasswordError = ref(false);

const loading = ref(false);
const registrationSuccess = ref(false);
const token = ref('');

const router = useRouter(); // Initialize the router

const validateFields = async () => {
  // Reset error flags
  emailError.value = false;
  usernameError.value = false;
  passwordError.value = false;
  confirmPasswordError.value = false;

  // Check validation conditions
  if (!email.value) {
    emailError.value = true;
  }

  if (!username.value || username.value.length < 6) {
    usernameError.value = true;
  }

  if (!password.value || password.value.length < 6) {
    passwordError.value = true;
  }

  if (!confirmPassword.value || confirmPassword.value !== password.value) {
    confirmPasswordError.value = true;
  }

  // Additional validation checks if needed

  // If any field has an error, prevent form submission
  if (emailError.value || usernameError.value || passwordError.value || confirmPasswordError.value) {
    return;
  }
 
  // Proceed with registration logic
  await registerUser();
  if (registrationSuccess.value){
    if(token.value){
      // Store the token securely (e.g., in a cookie or local storage)
      localStorage.setItem('authToken', token.value);

      // Extract user information from the token
      const decodedToken = parseJwt(token.value);

      // Display the username in the console
      console.log('Connected User:', decodedToken.username);
      router.push('/');
      router.go(0);
    }
  }
};

const registerUser = async () => {
  try {
    // Set loading to true while waiting for the server response
    loading.value = true;

    // Make API request to register user
    const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/auth/register', {
      email: email.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    // Handle the response from the API
    console.log('User registered successfully:', response.data);
    // You can add further logic, such as redirecting the user or showing a success message.

    token.value = response.data.token;
    registrationSuccess.value = true;
  } catch (error: any) {
    console.error('Error during user registration:', error.response?.data || error.message);
    // Handle the error, e.g., show an error message to the user.

  } finally {
    // Set loading back to false when the request is complete (either success or failure)
    loading.value = false;
  }
};

// Function to decode a JWT token
const parseJwt = (token: any) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

  return JSON.parse(jsonPayload);
};
</script>
