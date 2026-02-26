import { useQuery, useMutation } from '@tanstack/react-query';
import { createRoom, getRoomInfoV2, deleteParticipants } from '@/api/room';
import { queryKeys } from '@/queries/queryKey';
import { DeleteParticipantTypes } from '@/types/roomInfo';

export const useGetRoomInfo = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.room.info(roomId),
    queryFn: () => getRoomInfoV2(roomId),
    enabled: !!roomId,
  });
};

export const useCreateRoom = () => {
  return useMutation({
    mutationFn: createRoom,
  });
};

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
