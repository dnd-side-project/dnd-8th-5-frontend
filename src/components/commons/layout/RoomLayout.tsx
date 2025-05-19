import { ReactNode } from 'react';
import { RoomHeader, RoomHeaderProps } from '@/components/addTime/header';
import { Wrapper } from './index.styles';

interface Props extends RoomHeaderProps {
  children: ReactNode;
}

export function RoomLayout({ title, currentStep, children }: Props) {
  return (
    <Wrapper>
      <RoomHeader title={title} currentStep={currentStep} />
      {children}
    </Wrapper>
  );
}
