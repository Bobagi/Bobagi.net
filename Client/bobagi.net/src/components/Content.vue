<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  msg2: String,
})

const count = ref(0)
</script>

<template>
  <div class="containerContent">
  <div class="panelContent">
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/Content.vue</code> to test HMR
    </p>
  </div>

  <div style="display: flex;align-items: center;flex-direction: column;">
    <div style="display: inline-flex;align-items: center;gap:3px;">
      <p>
        Project in
        <a class="link" href="https://app.milanote.com/1QOSB416KhSC4w?p=pjftvY9IZGh" target="_blank"
          >Milanote</a>
      </p>
      <svg width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#1B2536" d="M0 9a9 9 0 1 0 18 0A9 9 0 0 0 0 9z"></path><path fill="#FFF" d="M12 11.242L9.793 9.035 12 6.83v4.413zM6.83 12l2.205-2.207L11.243 12H6.829zm-.76-5.171l2.207 2.206-2.207 2.207V6.83zm6.67-1.788a.535.535 0 0 0-.584.116l-3.122 3.12-3.12-3.12A.536.536 0 0 0 5 5.535v7.005a.537.537 0 0 0 .15.367l.002.002.001.001.008.008.001.002h.002a.52.52 0 0 0 .367.151h7.009a.54.54 0 0 0 .531-.53V5.536a.536.536 0 0 0-.33-.495z"></path></g></svg>
    </div>
    <div style="display: inline-flex;align-items: center;gap:3px;">
      <p>
        Project in
        <a class="link" href="https://github.com/Bobagi/Bobagi.net" target="_blank"
          >GitHub</a>
      </p>
      <svg width="20" height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
      </svg>
    </div>
  </div>

  <img src="/UnderDevopment.png" class="logo" style="height: 20em;border-radius: 25%;" alt="Under development icon" />
</div>
</div>
</template>

<style scoped>
.containerContent{
  justify-content: center;
  display: flex;
}
.panelContent{
  /* From https://css.glass */
  width: 50%;
  /* rgba(255, 255, 255, 0.48) */
  background: radial-gradient(rgba(255, 255, 255, 0.48), rgba(221, 213, 153, 0.48));
  /* background: rgba(0, 0, 0, 0.48); */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.6px);
  -webkit-backdrop-filter: blur(16.6px);
  /* rgba(255, 255, 255, 1) */
  border: 1px solid rgba(221, 213, 153, 1);
  /* border: 1px solid rgba(0, 0, 0, 1); */

  padding: 0;
  margin: 20px;
}
</style>