// services/apis.js
import axios from "axios";
import { authStorage } from "./auth.storage";

// uncomment لو المشروع محتاج refresh
// import { refreshToken } from "./refresh.token";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = authStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // JSON vs FormData
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else if (config.data && typeof config.data === "object") {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error?.response?.status === 401 && !original._retry) {
      original._retry = true;
      // return refreshToken(original);
    }

    return Promise.reject(error);
  },
);

export default api;
