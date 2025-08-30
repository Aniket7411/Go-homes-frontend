// src/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({

  baseURL: "https://go-homes-backend.onrender.com/api",
  // baseURL: "https://go-homes.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add auth token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
