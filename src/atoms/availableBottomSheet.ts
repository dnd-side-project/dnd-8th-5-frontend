import { atom } from 'recoil';

export const availableBottomSheetState = atom<boolean>({
  key: 'availableBottomSheet',
  default: false,
});
