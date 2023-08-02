import { useQuery } from '@tanstack/react-query';
import { getRoomInfo } from '../../api/room/room';
import { QUERY_KEYS } from '../../constants/QUERY_KEYS';

export const useGetRoomInfo = (roomUUID: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROOM.GET_ROOM_INFO, roomUUID],
    queryFn: () => getRoomInfo(roomUUID),
  });
};
