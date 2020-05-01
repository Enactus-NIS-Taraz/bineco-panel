import Vue from "vue";
import VueRouter from "vue-router";
//import store from "@/store/index.js";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/login",
//     name: "login",
//     component: Login
//   },
//   {
//     path: "/register",
//     name: "register",
//     component: Register
//   },
//   {
//     path: "/secure",
//     name: "secure",
//     component: Secure,
//     meta: {
//       requiresAuth: true
//     }
//   }
// ];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// export default router;
