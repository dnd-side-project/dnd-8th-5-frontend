import { useNavigate, useParams } from 'react-router-dom';
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
import { useGetRoomInfo } from '@/queries/room';
import { ROUTES } from '@/constants/routes';
import { Helmet } from 'react-helmet-async';

import calendar from '@/assets/images/invite_calendar.webp';
import { Layout } from '@/components/commons/layout';
import { useGetRoomParticipantMe } from '@/queries/auth';
import { AxiosError } from 'axios';

export default function Invite() {
  const navigate = useNavigate();
  const { roomId } = useParams() as { roomId: string };
  const {
    data: participantData,
    isLoading: isLoadingParticipantData,
    error: participantError,
  } = useGetRoomParticipantMe(roomId);

  const { data: roomData } = useGetRoomInfo(roomId);

  const participants = roomData?.participants ?? [];
  const visibleParticipants = participants.slice(0, 7);
  const overCount = participants.length - 7;

  const handleStartButtonClick = () => {
    if (isLoadingParticipantData) return;

    if (participantData?.name) {
      navigate(ROUTES.ADD_TIME(roomId));
      return;
    }

    const error = participantError as AxiosError;

    if (error?.response?.status === 403) {
      navigate(ROUTES.LOGIN_NICKNAME(roomId));
      return;
    }

    navigate(ROUTES.LOGIN(roomId));
  };

  return (
    <>
      <Helmet>
        <title>{`${roomData?.title} | 모두의 시간`}</title>
        <meta name="title" content={`${roomData?.title} | 모두의 시간`} />
        <meta
          name="description"
          content="쉽고 빠른 약속시간 정하기, 모두의 시간"
        />
      </Helmet>

      <Layout>
        <MainContainer>
          <HeaderWrapper>
            <Calendar src={calendar} />
            <TitleWrapper>
              <Title>약속에 초대합니다</Title>
              <SubTitle>지금 바로 약속 시간을 조율해 보세요!</SubTitle>
            </TitleWrapper>
          </HeaderWrapper>

          <BoxWrapper>
            <UpperBoxWrapper>
              <RoomTitle>{roomData?.title || ''}</RoomTitle>
            </UpperBoxWrapper>
            <LowerBoxWrapper>
              <ParticipantsTitle>참여자</ParticipantsTitle>
              <ParticipantsWrapper>
                {visibleParticipants.map((p) => (
                  <Participant key={p.id}>{p.name}</Participant>
                ))}
                {overCount > 0 && (
                  <Participant key="overflow">+{overCount}</Participant>
                )}
              </ParticipantsWrapper>
            </LowerBoxWrapper>
          </BoxWrapper>

          <BottomButton onClick={handleStartButtonClick}>
            일정 등록하기
          </BottomButton>
          <BottomSubButton onClick={() => navigate(ROUTES.CURRENT(roomId))}>
            등록 현황 보러 가기
          </BottomSubButton>
        </MainContainer>
      </Layout>
    </>
  );
}
