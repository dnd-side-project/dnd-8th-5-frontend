import {
  ButtonWrapper,
  ConfirmButton,
  NoButton,
  Overlay,
  Subtitle,
  Title,
  Wrapper,
} from './Popup.styles';
import { PopupTypes } from './Popup.types';

const Popup = ({ setIsPopupOpened, setIsConfirmed }: PopupTypes) => {
  const closePopup = () => {
    setIsPopupOpened(false);
  };

  const handleConfirmButtonClick = () => {
    setIsPopupOpened(false);
    setIsConfirmed(true);
  };

  return (
    <>
      <Overlay onClick={closePopup} />
      <Wrapper>
        <Title>약속을 확정할까요?</Title>
        <Subtitle>확정하면 일정 등록과 수정은 할 수 없어요</Subtitle>
        <ButtonWrapper>
          <NoButton>아니오</NoButton>
          <ConfirmButton onClick={handleConfirmButtonClick}>
            네. 확정할게요
          </ConfirmButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Popup;
