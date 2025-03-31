import { ReactNode } from 'react';
import { Wrapper } from './index.styles';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
