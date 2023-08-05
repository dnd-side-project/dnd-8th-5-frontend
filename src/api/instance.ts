import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});
