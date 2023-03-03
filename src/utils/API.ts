import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});
