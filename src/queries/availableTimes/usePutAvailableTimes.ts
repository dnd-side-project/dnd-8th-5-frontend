import { useMutation } from '@tanstack/react-query';
import { putAvailableTimes } from '@/api/availableTimes';
import { PutAvailableTimesParamsType } from '@/types/addTime';

export const usePutAvailableTimes = () => {
  return useMutation(({ roomUUID, payload }: PutAvailableTimesParamsType) =>
    putAvailableTimes({ roomUUID, payload })
  );
};
