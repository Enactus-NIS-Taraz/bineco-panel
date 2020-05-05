import axios from "@/request/request";

export default {
  state: {
    status: "",
    token: {
      accessToken: localStorage.getItem("token") || ""
    },
    user: {}
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        axios({
          url: "login",
          data: {
            email,
            password
          },
          method: "POST"
        })
          .then(res => {
            const token = res.data.accessToken;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("authSuccess", res.data);
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
        commit("authLoading");
        axios({
          url: "register",
          data: user,
          method: "POST"
        })
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("authSuccess", token, user);
            resolve(res);
          })
          .catch(err => {
            commit("authError", err);
            localStorage.removeItem("token");
            reject(err);
          });
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
        accessTokenExpiredAt: data.accessTokenExpiredAt
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
      state.token = {};
      state.user = {};
      window.localStorage.removeItem("token");
    },
    devicesLoading(state) {
      state.status = "loading";
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token.accessToken),
    authStatus: state => state.status,
    accessToken: state => state.token.accessToken
  }
};
