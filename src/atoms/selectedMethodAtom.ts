import { atom } from 'recoil';

export const selectedMethodState = atom<string>({
  key: 'selectedMethod',
  default: 'possible',
});
