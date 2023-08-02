import { atom } from 'recoil';

export const resetButtonState = atom<boolean>({
  key: 'resetButton',
  default: false,
});
