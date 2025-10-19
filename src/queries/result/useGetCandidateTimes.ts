import { useQuery } from '@tanstack/react-query';
import { getCandidateTimesInfo } from '@/api/result';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

export const useGetCandidateTimes = (
  roomId: string,
  sort: string,
  names: string[]
) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.RESULT.GET_CANDIDATE_TIMES,
      roomId,
      sort,
      names.sort((a, b) => a.localeCompare(b, 'ko-KR')),
    ],
    queryFn: () => getCandidateTimesInfo(roomId, sort, names),
    enabled: !!roomId,
  });
};
