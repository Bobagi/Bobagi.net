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
    v-model="form"
    @submit.prevent="onSubmit"
    class="d-flex"
    style="justify-content: right; margin: 8px"
  >
    <div class="d-flex w-50">
      <v-row>
        <v-col>
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Email"
            color="primary"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
            color="primary"
          ></v-text-field>
        </v-col>

        <v-col style="flex-grow: 0">
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="primary"
            size="large"
            type="submit"
            variant="outlined"
          >
            Sign In
          </v-btn>
        </v-col>
        <v-col style="flex-grow: 0">
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="primary"
            size="large"
            type="submit"
            variant="outlined"
          >
            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ref } from "vue";

const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);

const required = (v: string | null | undefined) => !!v || "Field is required";

const onSubmit = () => {
  if (!form.value) return;

  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
};
</script>
