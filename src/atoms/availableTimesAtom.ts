import { atom } from 'recoil';

export const availableTimesState = atom<string[]>({
  key: 'availableTimes',
  default: [],
});
