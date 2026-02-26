import { getAvailableTimeOverview } from '@/api/availableTimes';
import { queryKeys } from '@/queries/queryKey';
import { useQuery } from '@tanstack/react-query';

export const useGetAvailableTimeOverview = ({
  roomId,
  participants,
}: {
  roomId: string;
  participants: string[];
}) => {
  return useQuery({
    queryKey: queryKeys.room.availableTime.overview(roomId, participants),
    queryFn: () => getAvailableTimeOverview({ roomId, participants }),
    keepPreviousData: true,
  });
};
