<script setup>
import Content from './components/Content.vue'
import Login from './components/Login.vue'
</script>

<template>
  <div class="container">
    <header class="site-header" style="display: inline-flex; align-items: center; font-size: 6px;">
      <a href="https://bobagi.net"><img src="/BeeposTransp2.png" class="logo" style="height: 6em;" alt="BeePos logo" /></a>
      <h1 style="color: #FFD421;">Bee</h1><h1>Pus</h1>
    </header>
    <div class="site-content">
      <div style="background:#000000;">
        <a href="https://bobagi.net">
          <img src="/BeeposTransp1.png" class="logo" alt="CryptoPus logo" />
        </a>
        <Login/>
      </div>
      <Content msg="Bee" msg2="Pus"/>
    </div>
    
    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} Bobagi. All rights reserved.</p>
        <a href="https://www.linkedin.com/in/gustavoaperin/" target="_blank"><img src="/bobagiCursiveTransp.png" class="logo" style="margin-right: 20px;height: 2.4em;padding: 0;" alt="BeePos logo" /></a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-content{
  display: flex;
  flex-direction: column;
  background: radial-gradient(#FFD421, #a98d1a);
  padding-bottom: 1px;
  height: 100%;
}
.site-header, .site-footer {
  width: 100%; /* Make header and footer take full width */
  color: white; /* Text color, can be any color you prefer */
  text-align: center; /* Center the title */
  padding: 10px 0; /* Some padding */
  z-index: 100; /* Ensure it stays on top of other content */
  background: rgba(0, 0, 0, 0.68);
}

.site-header {
  top: 0; /* Stick to the top */
  position: sticky;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.site-header > h1{
margin: 10px 0px;
}

.site-footer {
  bottom: 0; /* Stick to the bottom */
  display: flex;
  align-items: center; /* Vertically center content */
  justify-content: space-between; /* Push content to the sides */
}

.footer-content {
  display: flex;
  width: 100%; /* Full width */
  justify-content: space-between;
  padding-left: 10px; /* Some padding */
}
.footer-content > p{
  cursor: default;
}

.logo {
  height: 9em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 10%;  /* This makes the image round */
    object-fit: cover;   /* This ensures the image covers the frame without distortion */
}
.logo:hover {
  filter: drop-shadow(0 0 1em yellow);
}
</style>