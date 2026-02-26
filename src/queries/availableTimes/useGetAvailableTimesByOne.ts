import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/queries/queryKey';
import { getAvailableTimesByOne } from '@/api/availableTimes';

export const useGetAvailableTimesByOne = (
  roomUUID: string,
  userName: string
) => {
  return useQuery({
    queryKey: queryKeys.room.availableTime.byOne(roomUUID, userName),
    queryFn: () => getAvailableTimesByOne(roomUUID, userName),
  });
};
