import { getAvailableTimeOverview } from '@/api/availableTimes';
import { useQuery } from '@tanstack/react-query';

export const useGetAvailableTimeOverview = ({
  roomId,
  participants,
}: {
  roomId: string;
  participants: string[];
}) => {
  return useQuery({
    queryKey: [
      `roomId=${roomId}`,
      `availableTimeOverview`,
      participants.join('&'),
    ],
    queryFn: () => getAvailableTimeOverview({ roomId, participants }),
    enabled: participants.length > 0,
    staleTime: 0,
    cacheTime: 0,
    keepPreviousData: true,
  });
};
