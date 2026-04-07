import { deleteParticipants } from '@/api/room';
import { DeleteParticipantTypes } from '@/types/roomInfo';
import { useMutation } from '@tanstack/react-query';

interface DeleteParticipantsArgs {
  roomId: string;
  body: DeleteParticipantTypes;
}

export const useDeleteParticipants = () => {
  return useMutation({
    mutationFn: ({ roomId, body }: DeleteParticipantsArgs) =>
      deleteParticipants(roomId, body),
  });
};
