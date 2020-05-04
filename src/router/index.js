import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

import Login from "@/views/Login";
import Register from "@/views/Register";
import Profile from "@/views/Profile";
import MapPage from "@/views/Map";
import Catalog from "@/views/Catalog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/map",
    name: "map",
    component: MapPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
