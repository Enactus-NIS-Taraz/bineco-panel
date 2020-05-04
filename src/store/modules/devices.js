import axios from "axios";
import config from "@/config/config";

export default {
  state: {
    devicesStatus: "",
    devices: []
  },
  actions: {
    getDevices({ commit }) {
      return Promise((resolve, reject) => {
        commit("devicesLoading");
        axios({
          url: config.apiBaseUrl + "devices",
          method: "GET"
        })
          .then(res => {
            const devices = res.data;
            commit("devicesSuccess", devices);
            resolve(res);
          })
          .catch(err => {
            commit("devicesError");
            reject(err);
          });
      });
    }
  },
  mutations: {
    devicesLoading(state) {
      state.devicesStatus = "loading";
    },
    devicesSuccess(state, data) {
      state.devicesStatus = "success";
      state.devices = data;
    },
    devicesEror(state) {
      state.devicesStatus = "error";
    }
  },
  getters: {
    getDevices: state => state.devices
  }
};
