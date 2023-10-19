<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container" style="height: 100vh;">
    <header class="site-header" style="display: inline-flex; align-items: center; font-size: 6px;">
      <a href="https://bobagi.net"><img src="/purpleOctopus.png" class="logo" style="height: 6em;" alt="Purpotopus logo" /></a>
      <h1 style="color: #eb03cf;">Crypto</h1><h1>Pus</h1>
    </header>
    <div class="site-content">
      <a href="https://bobagi.net">
        <img src="/purpleOctopus.png" class="logo" alt="CryptoPus logo" />
      </a>
      <!-- <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a> 1-->
      <HelloWorld msg="Crypto" msg2="Pus"/>
    </div>
    
    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} Bobagi. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-content{
  background: linear-gradient(#272626, #eb03cf);
  padding-bottom: 1px;
  height: 100%;
}
.site-header, .site-footer {
  width: 100%; /* Make header and footer take full width */
  /* position: fixed; */
  color: white; /* Text color, can be any color you prefer */
  text-align: center; /* Center the title */
  padding: 10px 0; /* Some padding */
  z-index: 100; /* Ensure it stays on top of other content */
}

.site-header {
  top: 0; /* Stick to the top */
  background: linear-gradient(#333, #272626);
  position: sticky;
}

.site-header > h1{
margin: 10px 0px;
}

.site-footer {
  bottom: 0; /* Stick to the bottom */
  display: flex;
  align-items: center; /* Vertically center content */
  justify-content: space-between; /* Push content to the sides */
  background: linear-gradient(#4e0145, #333);
}

.footer-content {
  display: flex;
  width: 100%; /* Full width */
  justify-content: flex-start; /* Align to start */
  padding-left: 10px; /* Some padding */
}

.logo {
  height: 9em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;  /* This makes the image round */
    object-fit: cover;   /* This ensures the image covers the frame without distortion */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
/* .logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
