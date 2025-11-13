import qs from 'qs';
import { GetAdjustmentResultRepsonse } from '@/models/result';
import { PageableResponse } from '@/models/common';
import { GetCandidateTimesParams } from '@/types/result';
import { instance } from './instance';

export const getCandidateTimesInfo = async ({
  roomId,
  sort,
  names,
  page,
  size,
}: GetCandidateTimesParams) => {
  return await instance.get<PageableResponse<GetAdjustmentResultRepsonse>>(
    `/api/v1/room/${roomId}/adjustment-results`,
    {
      params: { sort, participantNames: names, page, size },
      paramsSerializer: (params: Record<string, any>) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    }
  );
};
