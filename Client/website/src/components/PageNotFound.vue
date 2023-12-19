<template>
  <div class="fill-height" style="padding: 0">
    <v-responsive class="align-center text-center fill-height primaryRadial">
      <div class="containerContent">
        <div class="panelContent">
          <h1 style="color: whitesmoke; border-bottom: 1px groove #ccc; width: 560px;">
            <span style="color: black;">Page Not Found</span>
          </h1>

          <div style="display: flex; gap: 35px; margin-bottom: 30px;">
            <label id="notFoundDescription" style="word-wrap: break-word; max-width: 400px; text-align: left;">
              Sorry, the page you are looking for could not be found.
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
            </v-col>
          </v-row>
        </div>
      </div>
    </v-responsive>
  </div>
</template>

<style scoped>
/* Add your styling if needed */
</style>

<script lang="ts" setup>
// You can add any additional logic if needed
</script>
