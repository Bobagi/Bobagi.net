<template>
  <v-container class="fill-height" style="padding: 0">
    <v-responsive class="align-center text-center fill-height">
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

      <v-container class="primaryRadial">
        <div class="containerContent">
          <div class="panelContent">
            <div>
              <v-btn
                :disabled="count < 0"
                @click="count++"
                color="primary"
                size="large"
                type="button"
                variant="elevated"
              >
                count is {{ count }}
              </v-btn>
            </div>
            <div>
              <img
                src="/UnderDevopment.png"
                class="logo"
                style="height: 20em; border-radius: 25%"
                alt="Under development icon"
              />
            </div>
            <div>
              <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                  <v-btn
                    href="https://vuetifyjs.com/components/all/"
                    min-width="164"
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="text"
                  >
                    <v-icon icon="mdi-view-dashboard" size="large" start />

                    Components
                  </v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn
                    color="primary"
                    href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
                    min-width="228"
                    rel="noopener noreferrer"
                    size="x-large"
                    target="_blank"
                    variant="flat"
                  >
                    <v-icon icon="mdi-speedometer" size="large" start />

                    Get Started
                  </v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn
                    href="https://community.vuetifyjs.com/"
                    min-width="164"
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="text"
                  >
                    <v-icon icon="mdi-account-group" size="large" start />

                    Community
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                  <v-btn
                    color="primary"
                    min-width="228"
                    size="x-large"
                    variant="flat"
                    :to="{ name: 'VuetifyDocs' }"
                  >
                    <v-icon icon="mdi-speedometer" size="large" start></v-icon>
                    Docs
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.containerContent {
  justify-content: center;
  display: flex;
}

.panelContent {
  min-width: 50%;
  /* background: radial-gradient(
    rgba(255, 255, 255, 0.48),
    rgba(221, 213, 153, 0.48)
  ); */
  /* border: 1px solid rgba(221, 213, 153, 1); */
  background: rgba(0, 0, 0, 0.48);
  background: radial-gradient(rgba(0, 0, 0, 0.48), rgba(44, 41, 15, 0.48));
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.6px);
  padding: 15px;
  margin: 20px;
}
</style>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

defineProps({
  msg: String,
  msg2: String,
});

const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const count = ref(0);

const required = (v: string | null | undefined) => !!v || "Field is required";

const onSubmit = () => {
  if (!form.value) return;

  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
};
</script>
