/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#FFD421",
          secondary: "#a98d1a",
          // primary: "#1867C0",
          // secondary: "#5CBBF6",
          background: "#000000",
          surface: "#000000",
          "primary-darken-1": "#3700B3",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        colors: {
          background: "#000000",
          surface: "#000000",
          primary: "#FFD421",
          "primary-darken-1": "#3700B3",
          secondary: "#a98d1a",
          "secondary-darken-1": "#018786",
          error: "#ffea00",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});
