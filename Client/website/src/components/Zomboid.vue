<template>
  <div class="fill-height" style="padding: 0">
    <v-responsive class="align-center text-center fill-height primaryRadial">
      <div class="containerContent">
        <div class="panelContent">
          <a
            href="https://store.steampowered.com/app/108600/Project_Zomboid/"
            target="_blank"
            ><v-img
              src="/zomboid.png"
              height="100"
              class="logo black-shadow"
              alt="Zomboid logo"
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
.black-shadow:hover {
  filter: drop-shadow(0 0 2em rgb(0, 0, 0));
}
</style>

<script lang="ts" setup></script>
