import { atom } from 'recoil';

export const emailState = atom<boolean>({
  key: 'emailState',
  default: false,
});
