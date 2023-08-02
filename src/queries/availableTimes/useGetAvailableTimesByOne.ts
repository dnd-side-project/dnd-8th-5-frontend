import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/QUERY_KEYS';
import { getAvailableTimesByOne } from '../../api/availableTimes';

export const useGetAvailableTimesByOne = (
  roomUUID: string,
  userName: string
) => {
  return useQuery([QUERY_KEYS.AVAILABLE_TIME.GET_AVAILABLE_TIMES_BY_ONE], () =>
    getAvailableTimesByOne(roomUUID, userName)
  );
};
