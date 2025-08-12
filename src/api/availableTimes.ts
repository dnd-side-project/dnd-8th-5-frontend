import { instance } from './instance';
import { PutAvailableTimesParamsType } from '@/types/addTime';
import qs from 'qs';

export const putAvailableTimes = async ({
  roomUUID,
  payload,
}: PutAvailableTimesParamsType) => {
  const { data } = await instance.put(
    `/api/room/${roomUUID}/available-time`,
    JSON.stringify(payload)
  );

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

export const getAvailableTimeOverview = async ({
  roomId,
  participants,
}: {
  roomId: string;
  participants: string[];
}) => {
  const response = await instance.get(
    `/api/room/${roomId}/available-time/overview`,
    {
      params: { participantNames: participants },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    }
  );

  return response.data;
};
