import {
  getAvailableTimeOverview,
  getAvailableTimesByOne,
  putAvailableTimes,
} from '@/api/availableTimes';
import { queryKeys } from '@/queries/queryKey';
import { useQuery, useMutation } from '@tanstack/react-query';
import { PutAvailableTimesParamsType } from '@/types/addTime';

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

export const useGetAvailableTimesByOne = (
  roomUUID: string,
  userName: string
) => {
  return useQuery({
    queryKey: queryKeys.room.availableTime.byOne(roomUUID, userName),
    queryFn: () => getAvailableTimesByOne(roomUUID, userName),
  });
};

export const usePutAvailableTimes = () => {
  return useMutation(({ roomId, payload }: PutAvailableTimesParamsType) =>
    putAvailableTimes({ roomId, payload })
  );
};
