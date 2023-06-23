import { atom } from 'recoil';

export const isTooltipShownState = atom<boolean>({
  key: 'isTooltipShown',
  default: true,
});
