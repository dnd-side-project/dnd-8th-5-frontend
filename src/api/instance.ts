import axios, { AxiosResponse } from 'axios';
import * as Sentry from '@sentry/react';
import { useTokenStore } from '@/stores';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  return config;
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

authInstance.interceptors.request.use((config) => {
  const { accessToken } = useTokenStore.getState();
  const token = accessToken;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    Sentry.captureException(
      `Error: ${error.message} - ${error.response?.status} - ${JSON.stringify(
        error.response?.data
      )}`
    );

    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;

    const errorData = error.response.data;
    if (errorData.status === 401) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await getNewAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

async function getNewAccessToken() {
  const response = await axios.post<{ accessToken: string }>(
    `/oauth2/reissue-token`,
    null,
    {
      baseURL: import.meta.env.VITE_API_PATH,
      withCredentials: true,
    }
  );

  const { accessToken } = response.data;
  const { setAccessToken } = useTokenStore.getState();
  setAccessToken(accessToken);
  return accessToken;
}
