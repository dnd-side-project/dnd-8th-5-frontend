import { ReactNode } from 'react';

export interface BottomSheetType {
  title: string;
  children: ReactNode;
  setIsBottomSheetOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
