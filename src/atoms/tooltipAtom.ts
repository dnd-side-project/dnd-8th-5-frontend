import { atom } from 'recoil';

export const tooltipState = atom<boolean>({
  key: 'isTooltipShown',
  default: true,
});
