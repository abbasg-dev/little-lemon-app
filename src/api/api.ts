import axios, { AxiosRequestConfig } from "axios";
import { getUserToken } from "helpers/global";

const apiURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    Pragma: "no-cache",
    "Cache-control": "no-cache",
  },
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = getUserToken() ? getUserToken().token : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
    return config;
  },
  (error) => {
    console.error("Interceptor error:", error);
    return Promise.reject(error);
  }
);
export default api;
