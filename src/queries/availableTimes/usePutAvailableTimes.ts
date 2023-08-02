import { useMutation } from '@tanstack/react-query';
import { PutAvailableTimesParamsType } from '../../types/addTime';
import { putAvailableTimes } from '../../api/availableTimes';

export const usePutAvailableTimes = () => {
  return useMutation(({ roomUUID, payload }: PutAvailableTimesParamsType) =>
    putAvailableTimes({ roomUUID, payload })
  );
};
