import { useQuery } from '@tanstack/react-query';
import { getCandidateTimesInfo } from '@/api/result';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

export const useGetCandidateTimes = (
  roomUUID: string,
  sort: string,
  name: string
) => {
  return useQuery(
    [QUERY_KEYS.RESULT.GET_CANDIDATE_TIMES, roomUUID, sort, name],
    () => getCandidateTimesInfo(roomUUID, sort, name)
  );
};
