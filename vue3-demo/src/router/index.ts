/*
 * @Descripttion:
 * @Author: niezihao
 * @Date: 2023-09-05 15:19:57
 * @LastEditors: niezihao
 * @LastEditTime: 2023-11-10 14:19:02
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component:HomeView,
      redirect:'/canvas',
      children:[
        {
          path: "/canvas",
          name: "canvas",
          component: () => import("../components/Canvas.vue"),
        },
        {
          path: "/watch",
          name: "watch",
          component: () => import("../components/Watch.vue"),
        },
        {
          path: "/demo",
          name: "demo",
          component: () => import("../components/Demo"),
        },
        {
          path: "/upload",
          name: "upload",
          component: () => import("../components/Upload.vue"),
        },
      ]
    },

 
  ],
});

export default router;
