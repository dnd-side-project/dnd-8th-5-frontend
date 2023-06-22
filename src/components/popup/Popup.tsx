import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../utils/API';
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

const Popup = ({
  selectedTimeId,
  setIsPopupOpened,
  setIsConfirmed,
}: PopupTypes) => {
  const { roomUUID } = useParams();
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const closePopup = () => {
    setIsPopupOpened(false);
  };

  const handleConfirmButtonClick = () => {
    setIsPopupOpened(false);
    setIsConfirmed(true);

    const payload = {
      candidateDateTimeId: parseInt(selectedTimeId),
      participantName: localStorage.getItem('name'),
    };

    console.log(payload);

    const makeConfirm = async () => {
      const savedUserName = localStorage.getItem('name');
      const savedRoomUUID = localStorage.getItem('uuid');

      if ((savedUserName === '' || savedUserName === null) && userName === '') {
        navigate(`/login/${roomUUID}`);
      } else {
        if (roomUUID === savedRoomUUID) {
          await API.post(
            `/api/room/${roomUUID}/adjustment-result/confirmation`,
            JSON.stringify(payload)
          );
        } else navigate(`/login/${roomUUID}`);
      }
    };

    makeConfirm();
  };

  return (
    <>
      <Overlay onClick={closePopup} />
      <Wrapper>
        <Title>약속을 확정할까요?</Title>
        <Subtitle>확정하면 일정 등록과 수정은 할 수 없어요</Subtitle>
        <ButtonWrapper>
          <NoButton onClick={closePopup}>아니오</NoButton>
          <ConfirmButton onClick={handleConfirmButtonClick}>
            네. 확정할게요
          </ConfirmButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Popup;
