import { useQuery } from '@tanstack/react-query';
import { getRoomInfoV2 } from '@/api/room';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

export const useGetRoomInfo = (roomId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROOM.GET_ROOM_INFO, roomId],
    queryFn: () => getRoomInfoV2(roomId),
    enabled: !!roomId,
  });
};
