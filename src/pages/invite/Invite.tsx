import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userNameState } from '../../atoms/userNameAtoms';
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
} from './Invite.styles';
import calendar from '../../assets/images/calendar.png';
import { useEffect, useState } from 'react';
import { RoomTypes } from '../../types/roomInfo';
import { API } from '../../utils/API';

const Invite = () => {
  const { roomUUID } = useParams();
  const [userName, setUserName] = useRecoilState(userNameState);
  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: null,
    headCount: 0,
    participants: [''],
    dates: [''],
    startTime: null,
    endTime: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };
    getRoomInfo();
  }, []);

  const getParticipant = () => {
    const result: JSX.Element[] = [];
    const overCount = Number(room.participants.length) - 7;

    for (let i = 0; i < room.participants.length; i++) {
      if (i > 6) {
        result.push(<Participant>+{overCount}</Participant>);
        break;
      } else {
        result.push(<Participant>{room.participants[i]}</Participant>);
      }
    }

    return result;
  };

  const handleStartButtonClick = () => {
    const savedUserName = localStorage.getItem('name');
    const savedRoomUUID = localStorage.getItem('uuid');

    if ((savedUserName === '' || savedUserName === null) && userName === '') {
      navigate(`/login/${roomUUID}`);
    } else {
      if (roomUUID === savedRoomUUID) {
        navigate(`/current/${roomUUID}`);
      } else navigate(`/login/${roomUUID}`);
    }
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

      <BottomButton onClick={() => handleStartButtonClick()}>
        입장하기
      </BottomButton>
    </MainContainer>
  );
};

export default Invite;
