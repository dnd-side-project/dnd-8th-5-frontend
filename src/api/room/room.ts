import { instance } from '../config/instance';

export const getRoomInfo = async (roomUUID: string) => {
  const { data } = await instance.get(`/api/room/${roomUUID}`);

  return data;
};
