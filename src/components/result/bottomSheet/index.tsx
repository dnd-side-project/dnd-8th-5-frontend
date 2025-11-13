import { PropsWithChildren } from 'react';
import {
  Body,
  Content,
  Header,
  HeaderBar,
  Overlay,
  Title,
  Wrapper,
} from './index.styles';

export interface Props {
  title: string;
  closeBottomSheet: () => void;
}

const BottomSheet = ({
  title,
  closeBottomSheet,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Overlay onClick={closeBottomSheet} />
      <Wrapper>
        <Header>
          <HeaderBar />
        </Header>
        <Body>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </Body>
      </Wrapper>
    </>
  );
};

export default BottomSheet;
