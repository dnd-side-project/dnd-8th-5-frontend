import qs from 'qs';
import { instance } from './instance';
import { PutAvailableTimesParamsType } from '@/types/addTime';
import {
  GetAvailableTimesByOneResponse,
  GetAvailableTimesByGroupResponse,
  GetAvailableTimeOverviewResponse,
} from '@/models/availableTimes';

export const putAvailableTimes = async ({
  roomId,
  payload,
}: PutAvailableTimesParamsType) => {
  return await instance.put(
    `/api/room/${roomId}/available-time`,
    JSON.stringify(payload)
  );
};

export const getAvailableTimesByOne = async (
  roomId: string,
  userName: string
) => {
  return await instance.get<GetAvailableTimesByOneResponse>(
    `/api/room/${roomId}/available-time?name=${userName}`
  );
};

export const getAvailableTimesByGroup = async (roomId: string) => {
  return await instance.get<GetAvailableTimesByGroupResponse>(
    `/api/room/${roomId}/available-time/group`
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
    `/api/room/${roomId}/available-time/overview`,
    {
      params: { participantNames: participants },
      paramsSerializer: (params: string[]) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    }
  );
};
