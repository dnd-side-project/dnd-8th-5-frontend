import {
  getRoomParticipantMe,
  postRoomParticipant,
  postUserInfo,
} from '@/api/auth';
import { queryKeys } from '@/queries/queryKey';
import { useQuery, useMutation } from '@tanstack/react-query';
import { PostAuthParamsType } from '@/types/auth';

export const useGetRoomParticipantMe = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.room.auth.participantMe(roomId),
    queryFn: () => getRoomParticipantMe(roomId),
  });
};

export const usePostRoomParticipant = () => {
  return useMutation({
    mutationFn: ({ roomId, nickname }: { roomId: string; nickname: string }) =>
      postRoomParticipant(roomId, nickname),
  });
};

export const usePostUserInfo = () => {
  return useMutation(({ roomUUID, form }: PostAuthParamsType) =>
    postUserInfo({ roomUUID, form })
  );
};
