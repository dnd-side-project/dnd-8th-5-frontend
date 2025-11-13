import { useInfiniteQuery } from '@tanstack/react-query';
import { getCandidateTimesInfo } from '@/api/result';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

const PAGE_SIZE = 5;

export const useGetCandidateTimesInfiniteQuery = ({
  roomId,
  sort,
  names,
}: {
  roomId: string;
  sort: string;
  names?: string[];
}) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.RESULT.GET_CANDIDATE_TIMES, roomId, sort, names],
    queryFn: async ({ pageParam = 1 }) => {
      return await getCandidateTimesInfo({
        roomId,
        sort,
        names,
        page: pageParam,
        size: PAGE_SIZE,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.hasNext ? nextPage : undefined;
    },
    enabled: !!roomId,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });
};
