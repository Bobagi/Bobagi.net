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

          <div style="display: flex; gap: 30px; margin: 25px 0px;">
            <img
              src="/UnderDevopment.png"
              class="logo"
              style="height: 20em;"
              alt="Under development icon"
            />
            <label id="personalDescription" style="word-wrap: break-word; max-width: 440px; text-align: left;">
              Hello 👋<br />
              My name is Gustavo, and I'm a Brazilian programmer who quit his job to explore different areas of development and figure out the next steps in life.
              <br /><br />
              🌱 Currently, I am focusing on learning Python, Linux, and Vue.
              <br /><br />
              Buy me a coffee ☕❤️
              <a href="https://www.paypal.com/donate?business=gustavoperin067%40gmail.com&item_name=Support+Gustavo's+Journey&currency_code=USD" target="_blank">Donate with PayPal</a>
              <br /><br />
              Contact 📫:<br />
              Feedback, ideas, or anything else you'd like to share: <a href="mailto:gustavoperin067@gmail.com">gustavoperin067@gmail.com</a>
            </label>
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
                  min-width="164"
                  rel="noopener noreferrer"
                  variant="text"
                  href="https://github.com/Bobagi/"
                  target="_blank"
                >
                  <v-icon icon="mdi-github" size="large" start></v-icon>
                  GitHub
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
                  <v-icon icon="mdi-book-multiple" size="large" start></v-icon>
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
</script>
