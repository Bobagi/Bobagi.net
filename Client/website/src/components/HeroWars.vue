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
          /></a>
          
          <div style="display: inline-flex;margin: 30px;">
            <h1 style="color: whitesmoke;border-bottom: 1px groove #ccc;width: 260px;"><spam style="color: yellow;">Auto </spam>play Bot</h1>
          </div>

          <div style="display: flex; gap: 35px;">
            <img
              src="/Browser_Orion_Romantic_Skin.png"
              class="logo"
              style="height: 20em;"
              alt="Orion sprite"
            />
            <label id="botDescription" style="word-wrap: break-word; max-width: 440px; text-align: left;">
              This bot is an autoplay bot designed for the game Hero Wars Domination Era. It automates the repetitive tasks of climbing the tower and conquering the Titan's Dungeon, saving you from the mechanical work and allowing you to focus on the more enjoyable aspects of the game.
              <br /><br />
              To use that application, just download it and read the <span style="color: yellow;">README</span> file, follow the instructions and run the executable file.
              <br /><br />
              Only available for Windows OS.
            </label>
          </div>

          <v-row class="d-flex align-center justify-center">
            <v-col class="d-flex align-center justify-center" style="gap:20px;" cols="auto">
              <v-btn
                min-width="164"
                rel="noopener noreferrer"
                variant="text"
                href="https://bobagi.net"
              >
                <v-icon icon="mdi-home" size="large" start></v-icon>
                Home
              </v-btn>

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

              <v-btn
                min-width="164"
                rel="noopener noreferrer"
                variant="text"
                href="https://github.com/Bobagi/Hero-Wars-Auto-Play-Bot"
                target="_blank"
              >
                <v-icon icon="mdi-github" size="large" start></v-icon>
                GitHub
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
