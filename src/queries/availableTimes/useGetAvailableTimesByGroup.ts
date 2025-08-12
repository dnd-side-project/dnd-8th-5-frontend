import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';
import { getAvailableTimesByGroup } from '@/api/availableTimes';

export const useGetAvailableTimesByGroup = (
  roomUUID: string,
  enabled = false
) => {
  return useQuery(
    [QUERY_KEYS.AVAILABLE_TIME.GET_AVAILABLE_TIMES_BY_GROUP, roomUUID],
    () => getAvailableTimesByGroup(roomUUID),
    {
      enabled,
    }
  );
};
