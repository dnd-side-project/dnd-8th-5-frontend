import { instance } from './instance';

export const getCandidateTimesInfo = async (
  roomUUID: string,
  sort: string,
  name: string
) => {
  const { data } = await instance.get(
    `/api/room/${roomUUID}/adjustment-result?sorted=${sort}&${name}`
  );

  return data;
};
