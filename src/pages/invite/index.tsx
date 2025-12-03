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
  ParticipantsWrapper,
  Participant,
  BottomSubButton,
} from './index.styles';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { roomState } from '@/atoms/roomAtom';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { ROUTES } from '@/constants/ROUTES';
import { Helmet } from 'react-helmet-async';

import calendar from '@/assets/images/invite_calendar.webp';
import calendarXmas from '@/assets/images/invite_calendar_xmas.webp';

const isAfterXmas2025 = (() => {
  const now = new Date();
  const xmas2025 = new Date('2025-12-25T00:00:00'); // 로컬 시간 기준
  return now >= xmas2025;
})();

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
          <Participant
            key={room.participants[i].id}
            isAfterXmas2025={isAfterXmas2025}
          >
            +{overCount}
          </Participant>
        );
        break;
      } else {
        result.push(
          <Participant
            key={room.participants[i].id}
            isAfterXmas2025={isAfterXmas2025}
          >
            {room.participants[i].name}
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
    <>
      <Helmet>
        <title>{`${room.title} | 모두의 시간`}</title>
        <meta name="title" content={`${room.title} | 모두의 시간`} />
        <meta
          name="description"
          content="쉽고 빠른 약속시간 정하기, 모두의 시간"
        />
      </Helmet>

      <MainContainer isAfterXmas2025={isAfterXmas2025}>
        <HeaderWrapper>
          <Calendar src={isAfterXmas2025 ? calendar : calendarXmas} />
          <TitleWrapper>
            <Title>약속에 초대합니다</Title>
            <SubTitle>지금 바로 약속 시간을 조율해 보세요!</SubTitle>
          </TitleWrapper>
        </HeaderWrapper>

        <BoxWrapper>
          <UpperBoxWrapper>
            <RoomTitle>{room.title}</RoomTitle>
          </UpperBoxWrapper>
          <LowerBoxWrapper>
            <ParticipantsTitle>참여자</ParticipantsTitle>
            <ParticipantsWrapper>{getParticipant()}</ParticipantsWrapper>
          </LowerBoxWrapper>
        </BoxWrapper>

        <BottomButton onClick={handleStartButtonClick}>
          일정 등록하기
        </BottomButton>
        <BottomSubButton onClick={handleSubButtonClick}>
          등록 현황 보러 가기
        </BottomSubButton>
      </MainContainer>
    </>
  );
};

export default Invite;
