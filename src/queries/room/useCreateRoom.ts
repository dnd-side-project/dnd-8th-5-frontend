import { useMutation } from '@tanstack/react-query';
import { createRoom } from '@/api/room';

export const useCreateRoom = () => {
  return useMutation({
    mutationFn: createRoom,
  });
};
