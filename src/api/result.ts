import { GetAdjustmentResultRepsonse } from '@/models/result';
import { instance } from './instance';
import qs from 'qs';

export const getCandidateTimesInfo = async (
  roomId: string,
  sort: string,
  name: string[]
) => {
  return await instance.get<GetAdjustmentResultRepsonse>(
    `/api/room/${roomId}/adjustment-result`,
    {
      params: { sorted: sort, name },
      paramsSerializer: (params: string[]) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    }
  );
};
