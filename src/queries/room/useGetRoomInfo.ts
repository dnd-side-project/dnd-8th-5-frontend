import { getRoomInfo } from '../../api/room/room';
import { QUERY_KEYS } from '../../constants/QUERY_KEYS';
import { useQuery } from '@tanstack/react-query';

export const useGetRoomInfo = (roomUUID: string) => {
  return useQuery([QUERY_KEYS.ROOM.GET_ROOM_INFO], () => getRoomInfo(roomUUID));
};
