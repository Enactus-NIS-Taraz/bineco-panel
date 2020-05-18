import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import devices from "./modules/devices";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    devices
  }
});
