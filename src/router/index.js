import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import SeConnecter from "../views/SeConnecter.vue";
import FormInscription from "../views/FormInscription.vue";
import HomeConnected from "../views/HomeConnected.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/seconnecter",
    name: "SeConnecter",
    component: SeConnecter,
  },
  {
    path: "/formulaire-inscription",
    name: "formulaire-inscription",
    component: FormInscription,
  },
  {
    path: "/connected",
    name: "HomeConnected",
    component: HomeConnected,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
