import { instance } from '../config/instance';
import { PostRoomTypes } from '../../types/roomInfo';

export const getRoomInfo = async (roomUUID: string) => {
  return await instance.get(`/api/room/${roomUUID}`);
};

export const createRoom = async (payload: PostRoomTypes) => {
  const { data } = await instance.post(`/api/room`, JSON.stringify(payload));

  return data;
};
