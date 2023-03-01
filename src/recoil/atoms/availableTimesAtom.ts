import { atom } from 'recoil';

export const availableTimesAtom = atom<string[]>({
  key: 'availableTimes',
  default: [],
});
