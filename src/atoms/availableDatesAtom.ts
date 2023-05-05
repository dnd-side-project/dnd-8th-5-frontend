import { atom } from 'recoil';

export const availableDatesState = atom<string[]>({
  key: 'availableDates',
  default: [],
});
