import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
