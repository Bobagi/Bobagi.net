<template>
  <div class="fill-height" style="padding: 0;">
    <v-responsive class="align-center text-center fill-height primaryRadial">
      <div class="containerContent">
        <div class="panelContent" style="min-width: auto;">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <v-form @submit.prevent="registerUser">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  required
                ></v-text-field>

                <v-btn
                  color="primary"
                  size="x-large"
                  type="submit"
                  variant="flat"
                >
                  Create Account
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

const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const registerUser = () => {
  // Perform registration logic here
  console.log('Email:', email.value);
  console.log('Username:', username.value);
  console.log('Password:', password.value);
  console.log('Confirm Password:', confirmPassword.value);
};
</script>
