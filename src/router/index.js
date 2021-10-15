import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import SeConnecter from "../views/SeConnecter.vue";
import FormInscription from "../views/FormInscription.vue";
import HomeConnected from "../views/HomeConnected.vue";
import EditProfile from "../views/EditProfile.vue";
import Profile from "../views/Profile.vue"

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
    alias: "/"
  },
  {
    path: "/edit-profile",
    name: "edit-profile",
    component: EditProfile,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
