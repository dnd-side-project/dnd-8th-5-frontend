import { postRoomParticipantMe } from '@/api/auth';
import { queryKeys } from '@/queries/queryKey';
import { useQuery } from '@tanstack/react-query';

export const useGetRoomParticipantMe = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.room.auth.participantMe(roomId),
    queryFn: () => postRoomParticipantMe(roomId),
  });
};
