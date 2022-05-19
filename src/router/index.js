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
  {
    path: "/a4",
    name: "a4",

    component: () => import("../views/a4.vue"),
  },
  {
    path: "/a5",
    name: "a5",

    component: () => import("../views/a5.vue"),
  },
  {
    path: "/a6",
    name: "a6",

    component: () => import("../views/a6.vue"),
  },
  {
    path: "/a7",
    name: "a7",

    component: () => import("../views/a7.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;