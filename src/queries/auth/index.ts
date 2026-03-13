import {
  getRoomParticipantMe,
  getUserMe,
  postRoomParticipant,
  postUserInfo,
} from '@/api/auth';
import { queryKeys } from '@/queries/queryKey';
import { useQuery, useMutation } from '@tanstack/react-query';
import { PostAuthParamsType } from '@/types/auth';

export const useGetRoomParticipantMe = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.room.participant.me(roomId),
    queryFn: () => getRoomParticipantMe(roomId),
  });
};

export const usePostRoomParticipant = () => {
  return useMutation({
    mutationFn: postRoomParticipant,
  });
};

export const usePostUserInfo = () => {
  return useMutation(({ roomUUID, form }: PostAuthParamsType) =>
    postUserInfo({ roomUUID, form })
  );
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: getUserMe,
  });
};
