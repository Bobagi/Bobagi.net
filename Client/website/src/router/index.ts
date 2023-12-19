// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/Register",
        name: "Register",
        component: () => import("@/views/vwRegister.vue"),
      },
      {
        path: "/Vuetify",
        name: "VuetifyDocs",
        component: () => import("@/views/VuetifyDocs.vue"),
      },
      {
        path: "Snowflake",
        name: "Snowflake",
        component: () => import("@/views/vwSnowflake.vue"),
      },
      {
        path: "/Herowars",
        name: "Herowars",
        component: () => import("@/views/vwHeroWars.vue"),
      },
      {
        path: "/Zomboid",
        name: "Zomboid",
        component: () => import("@/views/vwZomboid.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
