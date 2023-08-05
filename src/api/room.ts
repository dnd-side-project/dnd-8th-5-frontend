import { instance } from './instance';
import { PostRoomTypes } from '../types/roomInfo';

export const getRoomInfo = async (roomUUID: string) => {
  const { data } = await instance.get(`/api/room/${roomUUID}`);

  return data;
};

export const createRoom = async (payload: PostRoomTypes) => {
  const { data } = await instance.post(`/api/room`, JSON.stringify(payload));

  return data;
};
