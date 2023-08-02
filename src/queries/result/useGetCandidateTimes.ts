import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/QUERY_KEYS';
import { getCandidateTimesInfo } from '../../api/result';

export const useGetCandidateTimes = (
  roomUUID: string,
  sort: string,
  name: string
) => {
  return useQuery([QUERY_KEYS.RESULT.GET_CANDIDATE_TIMES], () =>
    getCandidateTimesInfo(roomUUID, sort, name)
  );
};
