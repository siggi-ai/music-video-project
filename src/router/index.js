import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/a1",
    name: "a1",

    component: () => import("../views/a1.vue"),
  },
  {
    path: "/a2",
    name: "a2",

    component: () => import("../views/a2.vue"),
  },
  {
    path: "/a3",
    name: "a3",

    component: () => import("../views/a3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;