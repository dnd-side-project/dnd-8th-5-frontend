import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  BottomButton,
  MainContainer,
  HeaderWrapper,
  Calendar,
  TitleWrapper,
  Title,
  SubTitle,
  BoxWrapper,
  UpperBoxWrapper,
  LowerBoxWrapper,
  RoomTitle,
  ParticipantsTitle,
  ParticipantsWraaper,
  Participant,
  BottomSubButton,
} from './Invite.styles';
import calendar from '../../assets/images/calendar.png';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { roomState } from '../../atoms/roomAtoms';
import { useGetRoomInfo } from '../../queries/room/useGetRoomInfo';
import { ROUTES } from '../../constants/ROUTES';

const Invite = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const [room, setRoom] = useRecoilState(roomState);

  const navigate = useNavigate();

  const { data } = useGetRoomInfo(roomUUID);

  useEffect(() => {
    if (data) {
      setRoom(data);
    }
  }, [data]);

  const getParticipant = () => {
    const result: JSX.Element[] = [];
    const overCount = Number(room.participants.length) - 7;

    for (let i = 0; i < room.participants.length; i++) {
      if (i > 6) {
        result.push(
          <Participant key={room.participants[i]}>+{overCount}</Participant>
        );
        break;
      } else {
        result.push(
          <Participant key={room.participants[i]}>
            {room.participants[i]}
          </Participant>
        );
      }
    }

    return result;
  };

  const handleStartButtonClick = () => {
    const isValidUser = useAuth(roomUUID as string);

    if (isValidUser) {
      navigate(`${ROUTES.ADD_TIME}/${roomUUID}`);
    } else {
      localStorage.clear();
      navigate(`${ROUTES.LOGIN}/${roomUUID}`);
    }
  };

  const handleSubButtonClick = () => {
    navigate(`${ROUTES.CURRENT}/${roomUUID}`);
  };

  return (
    <MainContainer>
      <HeaderWrapper>
        <Calendar src={calendar} />
        <TitleWrapper>
          <Title>약속에 초대합니다</Title>
          <SubTitle>지금 바로 약속시간을 조율해보세요!</SubTitle>
        </TitleWrapper>
      </HeaderWrapper>
      <BoxWrapper>
        <UpperBoxWrapper>
          <RoomTitle>{room.title}</RoomTitle>
        </UpperBoxWrapper>
        <LowerBoxWrapper>
          <ParticipantsTitle>참여자</ParticipantsTitle>
          <ParticipantsWraaper>{getParticipant()}</ParticipantsWraaper>
        </LowerBoxWrapper>
      </BoxWrapper>

      <BottomButton onClick={handleStartButtonClick}>
        일정 등록하기
      </BottomButton>
      <BottomSubButton onClick={handleSubButtonClick}>
        등록 현황 보러가기
      </BottomSubButton>
    </MainContainer>
  );
};

export default Invite;
