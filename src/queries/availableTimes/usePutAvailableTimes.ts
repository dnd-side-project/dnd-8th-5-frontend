import { useMutation } from '@tanstack/react-query';
import { putAvailableTimes } from '../../api/availableTimes/availableTimes';

export const usePutAvailableTimes = (roomUUID: string) => {
  return useMutation(() => putAvailableTimes(roomUUID));
};
