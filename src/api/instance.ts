import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});
