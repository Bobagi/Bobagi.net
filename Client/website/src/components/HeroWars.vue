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
              src="/UnderDevopment.png"
              class="logo"
              style="height: 20em; border-radius: 25%"
              alt="Under development icon"
            />
          </div>

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
    </v-responsive>
  </div>
</template>

<style scoped>
.orange-shadow:hover {
  filter: drop-shadow(0 0 2em rgb(216, 128, 12));
}
</style>

<script lang="ts" setup></script>
