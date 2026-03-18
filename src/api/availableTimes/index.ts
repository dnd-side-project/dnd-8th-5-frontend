import qs from 'qs';
import { authInstance, instance } from '../instance';
import { PutAvailableTimesParamsType } from '@/types/addTime';
import {
  GetAvailableTimesByOneResponse,
  GetAvailableTimeOverviewResponse,
} from '@/models/availableTimes';

export const putAvailableTimes = ({
  roomId,
  payload,
}: PutAvailableTimesParamsType) => {
  return authInstance.put(
    `/api/v1/rooms/${roomId}/time-blocks/available-time`,
    JSON.stringify(payload)
  );
};

export const getAvailableTimesByOne = (roomId: string) => {
  return authInstance
    .get<GetAvailableTimesByOneResponse>(
      `/api/v1/rooms/${roomId}/available-time`
    )
    .then((response) => response.data);
};

export const getAvailableTimeOverview = ({
  roomId,
  participants,
}: {
  roomId: string;
  participants: string[];
}) => {
  return instance.get<GetAvailableTimeOverviewResponse>(
    `/guest/api/room/${roomId}/available-time/overview`,
    {
      params: { participantNames: participants },
      paramsSerializer: (params: Record<string, any>) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    }
  );
};
