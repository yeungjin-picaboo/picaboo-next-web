import axios from 'axios';

const nestjsApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NESTJS_API_URL}/api/`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});

export default nestjsApi;
