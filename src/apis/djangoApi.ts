import axios from 'axios';

const djangoApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});

export default djangoApi;
