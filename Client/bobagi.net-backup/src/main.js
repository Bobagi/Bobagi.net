import { createApp } from 'vue'
import vuetify from './vuetify';
import './style.css'
import App from './App.vue'
import 'vuetify/styles';

createApp(App)
  .use(vuetify)
  .mount('#app');
