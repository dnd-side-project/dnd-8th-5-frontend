import { instance } from '../config/instance';

export const putAvailableTimes = async (roomUUID: string) => {
  const { data } = await instance.get(`/api/room/${roomUUID}/available-time`);

  return data;
};

export const getAvailableTimesByOne = async (
  roomUUID: string,
  userName: string
) => {
  const { data } = await instance.get(
    `/api/room/${roomUUID}/available-time?name=${userName}`
  );

  return data;
};

export const getAvailableTimesByGroup = async (roomUUID: string) => {
  const { data } = await instance.get(
    `/api/room/${roomUUID}/available-time/group`
  );

  return data;
};
