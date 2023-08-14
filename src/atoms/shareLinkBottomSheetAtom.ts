import { atom } from 'recoil';

export const shareLinkBottomSheetState = atom<boolean>({
  key: 'shareLinkBottomSheet',
  default: false,
});
