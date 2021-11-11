import { createRouter, createWebHistory } from "vue-router";
const home = () => import('@/views/home/index.vue');
const photoList = () => import('@/views/photo/list.vue');
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/photo/list",
    name: "photoList",
    component: photoList,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
