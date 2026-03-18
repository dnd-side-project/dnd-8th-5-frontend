import qs from 'qs';
import { authInstance, instance } from '../instance';
import { PutAvailableTimesParamsType } from '@/types/addTime';
import {
  GetAvailableTimesByOneResponse,
  GetAvailableTimeOverviewResponse,
} from '@/models/availableTimes';

export const putAvailableTimes = async ({
  roomId,
  payload,
}: PutAvailableTimesParamsType) => {
  return await authInstance.put(
    `/api/v1/rooms/${roomId}/time-blocks/available-time`,
    JSON.stringify(payload)
  );
};

export const getAvailableTimesByOne = async (roomId: string) => {
  return await authInstance.get<GetAvailableTimesByOneResponse>(
    `/api/room/${roomId}/available-time`
  );
};

export const getAvailableTimeOverview = async ({
  roomId,
  participants,
}: {
  roomId: string;
  participants: string[];
}) => {
  return await instance.get<GetAvailableTimeOverviewResponse>(
    `/guest/api/room/${roomId}/available-time/overview`,
    {
      params: { participantNames: participants },
      paramsSerializer: (params: Record<string, any>) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    }
  );
};
