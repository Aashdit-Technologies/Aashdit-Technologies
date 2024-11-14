// api.js
import axios from "axios";
import useAuthStore from "../store/Store"; 

const api = axios.create({
  baseURL: "http://localhost:1111/hrms/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Authorization Token in Request:", token);
    } else {
      console.warn("No Authorization token found!");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearToken();
      sessionStorage.removeItem("token"); 
      window.location.href = "/"; 
    }
    return Promise.reject(error);
  }
);

export default api;
