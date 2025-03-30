import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface BottomButtonType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  isActivated: boolean;
  isBackgroundVisible?: boolean;
  isLanding?: boolean;
}
