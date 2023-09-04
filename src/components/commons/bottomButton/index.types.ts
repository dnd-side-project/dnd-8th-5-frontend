import { MouseEventHandler } from 'react';

export interface BottomButtonType {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  isActivated: boolean;
  isBackgroundVisible?: boolean;
  isLanding?: boolean;
}
