import { atom } from 'recoil';

export const availableGuideState = atom<boolean>({
  key: 'availableGuide',
  default: true,
});
