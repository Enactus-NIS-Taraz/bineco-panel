import axios from "axios";
import config from "@/config/config";

export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        axios({
          url: config.apiBaseUrl + "login",
          data: {
            email,
            password
          },
          method: "POST"
        })
          .then(res => {
            console.log(res);
            const token = res.data.accessToken;
            const expiredAt = res.data.accessTokenExpiredAt;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            const { email, firstName, lastName, id } = res.data;
            commit("authSuccess", {
              token,
              expiredAt,
              email,
              firstName,
              lastName,
              id
            });
            resolve(res);
          })
          .catch(err => {
            commit("authError");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("authRequest");
        axios({
          url: config.apiBaseUrl + "register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("authSuccess", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("authError", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  mutations: {
    authLoading(state) {
      state.status = "loading";
    },
    authSuccess(state, data) {
      state.status = "success";
      state.token = {
        accessToken: data.accessToken,
        accessTokenExpiredAt: data.expiredAt
      };
      state.user = {
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName
      };
    },
    authError(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = {};
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token),
    authStatus: state => state.status
  }
};
