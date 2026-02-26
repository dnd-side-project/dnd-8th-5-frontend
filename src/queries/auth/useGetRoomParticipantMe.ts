import { postRoomParticipantMe } from '@/api/auth';
import { useQuery } from '@tanstack/react-query';

export const useGetRoomParticipantMe = (roomId: string) => {
  return useQuery({
    queryKey: [],
    queryFn: () => postRoomParticipantMe(roomId),
  });
};
