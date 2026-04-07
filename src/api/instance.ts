import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as Sentry from '@sentry/react';

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
