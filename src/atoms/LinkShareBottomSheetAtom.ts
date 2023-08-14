import { atom } from 'recoil';

export const LinkShareBottomSheetState = atom<boolean>({
  key: 'shareLinkBottomSheet',
  default: false,
});
