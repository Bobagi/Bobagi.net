<template>
  <div class="fill-height" style="padding: 0; margin: 0">
    <v-responsive class="align-center text-center fill-height primaryRadial">
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
                  min-width="228"
                  size="x-large"
                  variant="flat"
                  :to="{ name: 'Snowflake' }"
                >
                  <v-icon icon="mdi-snowman" size="large" start />

                  Snowflake
                </v-btn>
              </v-col>

              <v-col cols="auto">
                <v-btn
                  @click="downloadFile"
                  min-width="164"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="text"
                >
                  <v-icon icon="mdi-download" size="large" start />
                  Download
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

              <v-col cols="auto">
                <v-btn
                  color="primary"
                  min-width="228"
                  size="x-large"
                  variant="flat"
                  :to="{ name: 'Zomboid' }"
                >
                  <v-icon icon="mdi-nature-people" size="large" start></v-icon>
                  Zomboid
                </v-btn>
              </v-col>

              <v-col cols="auto">
                <v-btn
                  color="primary"
                  min-width="228"
                  size="x-large"
                  variant="flat"
                  :to="{ name: 'Herowars' }"
                >
                  <v-icon icon="mdi-sword" size="large" start></v-icon>
                  Hero Wars
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-responsive>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);

const downloadFile = () => {
  const fileName = "dist.7z";
  const downloadUrl = process.env.VITE_API_BASE_URL + "/download/" + fileName;

  try {
    // Open the download URL in a new window or tab
    window.open(downloadUrl, "_blank");
  } catch (error) {
    console.error("Error opening download URL:", error);
  }
};
</script>
