import axios from "axios";
import { message } from "ant-design-vue";

axios.defaults.headers.common["Content-Type"] = "application/json";

const key = "request";
axios.interceptors.request.use(
  config => {
    message.loading({ content: "Please wait", key });
    return config;
  },
  err => {
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  res => {
    message.success({ content: "Success", key });
    return res;
  },
  err => {
    message.error({ content: "Error", key });
    return Promise.reject(err);
  }
);

export default axios;
