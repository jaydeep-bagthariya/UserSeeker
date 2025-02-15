import { API_BASE_URL } from "@/constants";
import { authService } from "./authService";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Add token to request headers
axiosInstance.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Global Error Handling (optional)
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
