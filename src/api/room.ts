import { instance } from './instance';
import { PostRoomTypes } from '@/types/roomInfo';

export const getRoomInfo = async (roomUUID: string) => {
  const response = await instance.get(`/api/room/${roomUUID}`);
  return response.data;
};

export const createRoom = async (payload: PostRoomTypes) => {
  const response = await instance.post(`/api/room`, JSON.stringify(payload));

  return response.data;
};
