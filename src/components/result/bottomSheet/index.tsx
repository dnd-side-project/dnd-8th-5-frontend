import {
  Body,
  Content,
  Header,
  HeaderBar,
  Overlay,
  Title,
  Wrapper,
} from './index.styles';
import { BottomSheetType } from './index.types';

const BottomSheet = ({
  setIsBottomSheetOpened,
  title,
  children,
}: BottomSheetType) => {
  const closeModal = () => {
    setIsBottomSheetOpened(false);
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
