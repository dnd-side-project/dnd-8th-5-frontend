import { instance } from './instance';
import qs from 'qs';

export const getCandidateTimesInfo = async (
  roomId: string,
  sort: string,
  name: string[]
) => {
  const { data } = await instance.get(`/api/room/${roomId}/adjustment-result`, {
    params: { sorted: sort, name },
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: 'repeat' }),
  });

  return data;
};
