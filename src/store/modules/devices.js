import axios from "@/request/request";

export default {
  state: {
    devicesStatus: "",
    devices: []
  },
  actions: {
    fetchDevices({ commit }) {
      return new Promise((resolve, reject) => {
        commit("devicesLoading");
        axios({
          url: "devices",
          method: "GET"
        })
          .then(res => {
            commit("devicesSuccess", res.data.devices);
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
    devicesError(state) {
      state.devicesStatus = "error";
    }
  },
  getters: {
    devices: state => state.devices
  }
};
