import axios from "axios";
import config from "@/config/config";

export default {
  state: {
    devices_status: "",
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
            console.log(res);
            const devices = res.data;
            commit("devicesSuccess", devices);
            resolve(res);
          })
          .catch(err => {
            commit("devicesError", err);
            reject(err);
          });
      });
    }
  },
  mutations: {
    devicesLoading(state) {
      state.devices_status = "loading";
    },
    devicesSuccess(state, data) {
      state.devices_status = "success";
      state.devices = data;
    },
    devicesEror(state) {
      state.devices_status = "error";
    }
  },
  getters: {
    getDevices: state => state.devices
  }
};
