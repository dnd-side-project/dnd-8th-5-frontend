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
    keepPreviousData: true,
  });
};
