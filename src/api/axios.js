import { default as axios } from "axios";
import { axiosConfig } from "./config";

const api = axios.create(axiosConfig);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
