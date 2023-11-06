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

      <v-container class="primaryRadial">
        <div class="containerContent">
          <div class="panelContent">
            <a href="https://snowflake.torproject.org/" target="_blank"
              ><v-img
                src="/Tor.png"
                height="100"
                class="logo purple-shadow"
                alt="Tor Project logo"
                style="margin-bottom: 10px"
            /></a>
            <iframe
              src="https://snowflake.torproject.org/embed.html"
              width="320"
              height="240"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <v-row class="d-flex align-center justify-center">
              <v-col cols="auto">
                <v-btn
                  color="primary"
                  min-width="228"
                  size="x-large"
                  variant="flat"
                  :to="{ name: 'Home' }"
                >
                  <v-icon icon="mdi-home" size="large" start></v-icon>
                  Home
                </v-btn>
              </v-col>
            </v-row>
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

.purple-shadow:hover {
  filter: drop-shadow(0 0 2em rgb(216, 12, 216));
}
</style>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

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
