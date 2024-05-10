import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NapView from "@/views/NapView.vue";
import PaymentView from "@/views/PaymentView.vue";
import THTView from "@/views/THTView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: HomeView,
    },
    {
      path: "/Nap",
      name: "Nap",
      component: NapView,
    },
    {
      path:"/Nap/Payment",
      name:"Payment",
      component:PaymentView,
    },
    {
      path:"/Nap/Payment/Tim-hieu-them",
      name:"Tim-hieu-them",
      component:THTView,
    },
    // {
    //   path:"/Bill",
    //   name:"Bill",
    //   component:BillView,
    // },
  ],
});

export default router;
