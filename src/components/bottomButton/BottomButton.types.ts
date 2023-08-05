import { MouseEventHandler } from 'react';

export interface BottomButtonType {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  navigate?: any;
  text: string;
  isActivated: boolean;
  background?: boolean;
}
