import axios from "axios";
import config from "@/config/config";
import { message } from "ant-design-vue";

const instance = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { "Content-Type": "application/json" }
});

const key = "request";
instance.interceptors.request.use(
  config => {
    message.loading({ content: "Please wait", key });
    return config;
  },
  err => {
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  res => {
    message.success({ content: "Success", key });
    return res;
  },
  err => {
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

export default instance;
