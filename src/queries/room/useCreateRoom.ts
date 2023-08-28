import { useMutation } from '@tanstack/react-query';
import { createRoom } from '@/api/room';
import { PostRoomTypes } from '@/types/roomInfo';

export const useCreateRoom = () => {
  return useMutation((payload: PostRoomTypes) => createRoom(payload));
};
