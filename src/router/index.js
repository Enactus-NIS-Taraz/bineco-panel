import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

import MainLayout from "@/views/layouts/Main";
import EmptyLayout from "@/views/layouts/Empty";
import UserLayout from "@/views/layouts/User";

import Home from "@/views/home/Home";

import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

import DevicesMap from "@/views/devices/Map";
import DevicesTable from "@/views/devices/Table";

import User from "@/views/user/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        name: "home",
        component: Home
      },
      {
        path: "devices",
        name: "devices",
        component: EmptyLayout,
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
        path: "user",
        name: "user",
        component: UserLayout,
        children: [
          {
            path: "",
            component: User
          }
        ]
      }
    ]
  },
  {
    path: "/auth",
    component: EmptyLayout,
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
