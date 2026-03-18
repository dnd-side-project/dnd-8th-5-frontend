import {
  getRoomParticipantMe,
  getUserMe,
  postRoomParticipant,
  postUserInfo,
} from '@/api/auth';
import { queryKeys } from '@/queries/queryKey';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetRoomParticipantMe = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.room.participant.me(roomId),
    queryFn: () => getRoomParticipantMe(roomId),
    staleTime: 0,
    cacheTime: 0,
  });
};

export const usePostRoomParticipant = () => {
  return useMutation({
    mutationFn: postRoomParticipant,
  });
};

export const usePostUserInfo = () => {
  return useMutation(postUserInfo);
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: getUserMe,
  });
};
