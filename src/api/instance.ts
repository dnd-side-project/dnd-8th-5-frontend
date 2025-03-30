import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Sentry from '@sentry/react';
import { useTokenStore } from '@/stores';

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

export const instance: HttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    Sentry.captureException(
      `Error: ${error.message} - ${error.response?.status} - ${JSON.stringify(
        error.response?.data
      )}`
    );

    return Promise.reject(error);
  }
);

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
