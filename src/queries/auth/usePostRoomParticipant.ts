import { postRoomParticipant } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

export const usePostRoomParticipant = () => {
  return useMutation({
    mutationFn: ({ roomId, nickname }: { roomId: string; nickname: string }) =>
      postRoomParticipant(roomId, nickname),
  });
};
