import { useEffect } from 'react';
import {
  Body,
  Content,
  Header,
  HeaderBar,
  Overlay,
  Title,
  Wrapper,
} from './BottomSheet.styles';
import { BottomSheetType } from './BottomSheet.types';

const BottomSheet = ({
  setIsBottomSheetOpened,
  title,
  children,
}: BottomSheetType) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = () => {
    setIsBottomSheetOpened(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Overlay onClick={closeModal} />
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
