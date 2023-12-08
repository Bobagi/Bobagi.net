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
              alt="Project Zomboid logo"
              style="margin-bottom: 10px"
          /></a>

          <div style="display: inline-flex;margin: 30px;">
            <h1 style="color: whitesmoke;border-bottom: 1px groove #ccc;width: 560px;"><spam style="color: black;">Zomboid </spam>Ubuntu dedicated server</h1>
          </div>

          <div style="display: flex; gap: 35px;margin-bottom: 30px;">
            <img
              src="/programerzombie.png"
              class="logo black-shadow"
              style="height: 15em; margin: 0px 5px;"
              alt="Programmer zombie"
            />
            <label id="serverDescription" style="word-wrap: break-word; max-width: 400px; text-align: left;">
              This server is dedicated to Project Zomboid, running on a Ubuntu VPS located in São Paulo, Brazil. It's a casual server created for playing with colleagues.

              <br /><br />

              Server Details:
              <ul class="link">
                <li><a href="https://www.battlemetrics.com/servers/zomboid/24442372" target="_blank">BattleMetrics</a></li>
                <li><a href="https://pzservers.com/s/olimpo" target="_blank">PZ Servers</a></li>
                <li><a href="https://www.trackyserver.com/server/olimpo-2369912" target="_blank">TrackyServer</a></li>
              </ul>

              <br />

              To join the server, please press the button below to reveal the password.
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
                @click="revealPassword"
                color="primary"
                min-width="228"
                size="x-large"
                variant="flat"
              >
                <v-icon icon="mdi-lock-open-outline" size="large" start></v-icon>
                Password
              </v-btn>

              <v-btn
                min-width="164"
                rel="noopener noreferrer"
                variant="text"
                href="https://github.com/Bobagi/Zomboid-Ubuntu-Server"
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
.black-shadow:hover {
  filter: drop-shadow(0 0 2em rgb(0, 0, 0));
}

.link{
  margin-left: 20px;
}
.link > li > a {
  color: yellow; /* Default and visited link color */
  cursor: pointer; /* Show pointer cursor on hover */
}
.link > li > a:visited {
  color: black; /* Default and visited link color */
}

.link > li > a:hover{
  color:white;
  transition: 200ms;
}
</style>

<script lang="ts" setup>
const revealPassword = () => {
  alert('Sorry, i cannot reveal the password yet. Some of the actual players are afraid of thieves...');
};
</script>
