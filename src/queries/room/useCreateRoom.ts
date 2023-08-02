import { useMutation } from '@tanstack/react-query';
import { createRoom } from '../../api/room/room';
import { PostRoomTypes } from '../../types/roomInfo';

export const useCreateRoom = (payload: PostRoomTypes) => {
  return useMutation(() => createRoom(payload));
};
