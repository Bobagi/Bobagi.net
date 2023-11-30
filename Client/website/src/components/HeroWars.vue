<template>
  <div class="fill-height" style="padding: 0">
    <v-responsive class="align-center text-center fill-height primaryRadial">
      <div class="containerContent">
        <div class="panelContent">
          <a href="https://www.hero-wars.com/" target="_blank"
            ><v-img
              src="/herowars.png"
              height="100"
              class="logo orange-shadow"
              alt="Hero Wars logo"
              style="margin-bottom: 10px"
          /></a>

          <div>
            <img
              src="/Browser_Orion_Romantic_Skin.png"
              class="logo"
              style="height: 20em; border-radius: 25%"
              alt="Under development icon"
            />
          </div>

          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <v-btn
                @click="downloadFile"
                color="primary"
                min-width="228"
                size="x-large"
                variant="flat"
              >
                <v-icon icon="mdi-download" size="large" start></v-icon>
                Download
              </v-btn>
            </v-col>
          </v-row>

          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <v-btn
                min-width="164"
                rel="noopener noreferrer"
                variant="text"
                :to="{ name: 'Home' }"
              >
                <v-icon icon="mdi-home" size="large" start></v-icon>
                Home
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-responsive>
  </div>
</template>

<style scoped>
.orange-shadow:hover {
  filter: drop-shadow(0 0 2em rgb(216, 128, 12));
}
</style>

<script lang="ts" setup>
const downloadFile = () => {
  const fileName = "dist.7z";
  // Update the download URL to include the API path
  const downloadUrl =
    import.meta.env.VITE_API_BASE_URL +
    "/download/" + // Updated path to include "/api"
    fileName;

  try {
    // Open the download URL in a new window or tab
    window.open(downloadUrl, "_blank");
  } catch (error) {
    console.error("Error opening download URL:", error);
  }
};
</script>
