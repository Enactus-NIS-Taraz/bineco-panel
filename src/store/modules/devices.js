import request from "@/request/request";

export default {
  state: {
    devicesStatus: "",
    devices: []
  },
  actions: {
    fetchDevices({ commit }) {
      return new Promise((resolve, reject) => {
        commit("devicesLoading");
        request({
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
    },
    deleteDevice(ctx, deviceId) {
      return new Promise((resolve, reject) => {
        request({
          url: "devices/" + deviceId,
          method: "DELETE"
        })
          .then(res => resolve(res))
          .catch(err => reject(err));
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
