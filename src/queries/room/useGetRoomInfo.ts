import { useQuery } from '@tanstack/react-query';
import { getRoomInfoV2 } from '@/api/room';
import { queryKeys } from '@/queries/queryKey';

export const useGetRoomInfo = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.room.info(roomId),
    queryFn: () => getRoomInfoV2(roomId),
    enabled: !!roomId,
  });
};
