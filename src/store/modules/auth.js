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
            const { email, firstName, lastName } = res.data;
            commit(
              "authSuccess",
              { token, expiredAt },
              { email, firstName, lastName }
            );
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
    authSuccess(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    authError(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token),
    authStatus: state => state.status
  }
};
