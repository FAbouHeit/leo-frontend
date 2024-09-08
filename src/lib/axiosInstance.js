// lib/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Reads from .env.local
  withCredentials: true, // Ensures credentials (cookies, etc.) are sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
