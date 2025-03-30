import axios from 'axios';
import * as Sentry from '@sentry/react';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    Sentry.captureException(
      `Error: ${error.message} - ${error.response?.status} - ${JSON.stringify(
        error.response?.data
      )}`
    );
    return Promise.reject(error);
  }
);
