const apiUrl = process.env.VUE_APP_API_URL;
const apiVersion = process.env.VUE_APP_API_VERSION;

export default {
  apiUrl,
  apiVersion,
  apiBaseUrl: `${apiUrl}/api/${apiVersion}/`
};
