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
        path: "/",
        name: "Register",
        component: () => import("@/views/vwRegister.vue"),
      },
      {
        path: "/",
        name: "VuetifyDocs",
        component: () => import("@/views/VuetifyDocs.vue"),
      },
      {
        path: "/",
        name: "Snowflake",
        component: () => import("@/views/vwSnowflake.vue"),
      },
      {
        path: "/",
        name: "Herowars",
        component: () => import("@/views/vwHeroWars.vue"),
      },
      {
        path: "/",
        name: "Zomboid",
        component: () => import("@/views/vwZomboid.vue"),
      },
      {
        path: '/:catchAll(.*)',
        component: () => import("@/views/vwPageNotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
