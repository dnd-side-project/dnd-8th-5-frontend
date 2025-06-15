import { useQuery } from '@tanstack/react-query';
import { getRoomInfoV2 } from '@/api/room';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

export const useGetRoomInfo = (roomUUID: string) => {
  return useQuery([QUERY_KEYS.ROOM.GET_ROOM_INFO, roomUUID], () =>
    getRoomInfoV2(roomUUID)
  );
};
