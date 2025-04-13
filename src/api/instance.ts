import axios from 'axios';
import * as Sentry from '@sentry/react';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_TEMPORARY_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

const FALLBACK_HOST_KEY = 'FALLBACK_HOST';

const addFallbackRoomId = (roomId: string) => {
  const ids = JSON.parse(localStorage.getItem(FALLBACK_HOST_KEY) || '[]');
  if (!ids.includes(roomId)) {
    ids.push(roomId);
    localStorage.setItem(FALLBACK_HOST_KEY, JSON.stringify(ids));
  }
};

const isFallbackRoom = (roomId: string) => {
  const ids = JSON.parse(localStorage.getItem(FALLBACK_HOST_KEY) || '[]');
  return ids.includes(roomId) || ids.some((id: string) => roomId.includes(id));
};

instance.interceptors.request.use(async (config) => {
  const roomId = config?.url?.replaceAll('/api/room/', '');

  if (roomId && isFallbackRoom(roomId)) {
    config.baseURL = import.meta.env.VITE_API_PATH;
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

    if (error.response?.status === 404) {
      const roomId = error.config?.url?.replaceAll('/api/room/', '');

      if (roomId) {
        addFallbackRoomId(roomId);
        return;
      }
    }

    return Promise.reject(error);
  }
);
