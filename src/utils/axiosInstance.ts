import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});

export default axiosInstance;
