import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getCandidateTimesInfo } from '@/api/result';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

export const useGetCandidateTimes = (
  roomUUID: string,
  sort: string,
  names: string[]
) => {
  return useQuery(
    [QUERY_KEYS.RESULT.GET_CANDIDATE_TIMES, roomUUID, sort, names],
    () => getCandidateTimesInfo(roomUUID, sort, names)
  );
};

export const useGetCandidateTimesInfiniteQuery = (
  roomId: string,
  page: number
) => {
  return useInfiniteQuery({
    queryKey: [],
    queryFn: ({ pageParam = 0 }) => {
      return;
    },
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
  });
};
