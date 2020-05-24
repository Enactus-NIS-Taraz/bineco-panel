import axios from "axios";
import config from "@/config/config";
import store from "@/store/index";
import router from "@/router/index";
import { message } from "ant-design-vue";

const request = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { "Content-Type": "application/json" }
});

const key = "request";
request.interceptors.request.use(
  config => {
    config.headers["Authorization"] = store.getters.accessToken;
    message.loading({ content: "Please wait", key });
    return config;
  },
  err => {
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  res => {
    message.success({ content: "Success", key });
    return res;
  },
  err => {
    if (err.response.status === 401) {
      store.commit("logout");
      router.push("/auth/login");
    }
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

const requestWithoutProgress = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: store.getters.accessToken
  }
});

requestWithoutProgress.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      store.commit("logout");
      router.push("/auth/login");
    }
    return Promise.reject(err);
  }
);

export { request, requestWithoutProgress };
