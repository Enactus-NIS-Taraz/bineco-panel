import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

import Home from "@/views/Home";

import AuthLayout from "@/views/auth/Layout";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

import DevicesLayout from "@/views/devices/Layout";
import DevicesMap from "@/views/devices/Map";
import DevicesTable from "@/views/devices/Table";

import UserLayout from "@/views/user/Layout";
import Profile from "@/views/user/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/auth",
    component: AuthLayout,
    meta: {
      onlyNotAuth: true
    },
    children: [
      {
        path: "login",
        component: Login
      },
      {
        path: "register",
        component: Register
      }
    ]
  },
  {
    path: "/devices",
    name: "devices",
    component: DevicesLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "map",
        component: DevicesMap
      },
      {
        path: "table",
        component: DevicesTable
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: UserLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "profile",
        component: Profile
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    store.getters.isLoggedIn &&
    to.matched.some(record => record.meta.onlyNotAuth)
  ) {
    next("/");
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
