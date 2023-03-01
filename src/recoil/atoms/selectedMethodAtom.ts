import { atom } from 'recoil';

export const selectedMethodAtom = atom<string>({
  key: 'selectedMethod',
  default: 'possible',
});
