import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { useRecoilState } from 'recoil';
import { selectedMethodState } from '@/atoms/selectedMethodAtom';

import Timer from '@/components/current/timer';
import Table from '@/components/current/table';
import Header from '@/components/commons/header';
import ProgressBar from '@/components/current/progressBar';
import BottomButton from '@/components/commons/bottomButton';
import CurrentCalendar from '@/components/current/calendar';
import ParticipantsBlock from '@/components/current/participantBlock';
import LinkShareBottomSheet from '@/components/current/shareLinkBottomSheet';

import {
  Body,
  Section,
  Border,
  BottomWrapper,
  EditButton,
  Participants,
  Subtitle,
  TableWrapper,
  Title,
  Wrapper,
  TitleWrapper,
  EditParticipantButton,
  EditButtonWrapper,
  TimerWrapper,
} from './index.styles';
import plus from '@/assets/icons/current_plus.svg';
import { initialRoomInfoData } from '@/assets/data/initialRoomInfoData';

import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/ROUTES';
import { getFourChunks } from '@/utils/getFourChunks';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';

import { Participant, RoomTypes } from '@/types/roomInfo';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';
import { useScrollDetection } from '@/hooks/useScrollDirection';
import { Layout } from '@/components/commons/layout';
import { AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/commons/modal';
import { useDeleteParticipants } from '@/queries/room/useDeleteParticipants';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';
import { Helmet } from 'react-helmet-async';
import { useGetAvailableTimeOverview } from '@/queries/availableTimes/useGetAvailableTimeOverview';
import { useGetAvailableTimesByGroup } from '@/queries/availableTimes/useGetAvailableTimesByGroup';

const Current = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { roomUUID } = useParams() as { roomUUID: string };
  const [, setSelectedMethod] = useRecoilState(selectedMethodState);
  const [isShareLinkBottomSheetOpened] = useRecoilState(
    LinkShareBottomSheetState
  );
  const { scrollRef, isScrollUp, isScrollDown } = useScrollDetection();

  const [
    { title, headCount, participants, deadLine, dates, startTime, endTime },
    setRoomInfo,
  ] = useState<RoomTypes>(initialRoomInfoData);

  const { data, isError } = useGetRoomInfo(roomUUID);

  const [selectedParticipants, setSelectedParticipants] = useState<
    Participant[]
  >([]);
  const { data: timeInfo } = useGetAvailableTimesByGroup(
    roomUUID,
    selectedParticipants.length === 0
  );
  const { data: availableTimeOverview } = useGetAvailableTimeOverview({
    roomId: roomUUID,
    participants: selectedParticipants.map((p) => p.name),
  });

  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [selectedDeleteParticipants, setSelectedDeleteParticipants] = useState<
    Participant[]
  >([]);
  const [isDeleteModalOpened, setIsDeleteModalOpened] =
    useState<boolean>(false);

  const { mutate: deleteParticipants } = useDeleteParticipants();

  useEffect(() => {
    if (data) {
      setRoomInfo(data);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      navigate(ROUTES.ERROR);
    }
  }, [isError]);

  const isTableView = startTime !== null && endTime !== null;

  const handleEditButtonClick = () => {
    const isValidUser = useAuth(roomUUID as string);

    if (isValidUser) {
      setSelectedMethod('possible');
      navigate(`${ROUTES.ADD_TIME}/${roomUUID}`);
    } else {
      navigate(`${ROUTES.LOGIN}/${roomUUID}`);
    }
  };

  const goToResult = () => {
    navigate(`${ROUTES.RESULT}/${roomUUID}`);
  };

  const getFormattedDateArray = (dates: string[]) => {
    const newDates = dates.map((date) =>
      dayjs(date).locale('ko').format('YYYY-MM-DD dddd').toString()
    );

    return newDates;
  };
  const handleModeButtonToggle = () => {
    setIsDeleteMode((prev) => !prev);
  };

  const handleParticipantClickToDelete = (participant: Participant) => {
    if (!isDeleteMode) return;

    if (
      selectedDeleteParticipants.filter((p) => p.id === participant.id).length >
      0
    ) {
      setSelectedDeleteParticipants((prev) =>
        prev.filter((p) => p.id !== participant.id)
      );
    } else {
      setSelectedDeleteParticipants((prev) => [...prev, participant]);
    }
  };

  const handleParticipantClickToSelect = (participant: Participant) => {
    if (isDeleteMode) return;

    if (selectedParticipants.includes(participant)) {
      setSelectedParticipants((prev) =>
        prev.filter((p) => p.id !== participant.id)
      );
    } else {
      setSelectedParticipants((prev) => [...prev, participant]);
    }
  };

  const handleDeleteClick = () => {
    if (selectedDeleteParticipants.length === 0) return;

    const body = {
      participantIds: selectedDeleteParticipants.map((p) => p.id),
    };

    deleteParticipants(
      { roomId: roomUUID, body },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            QUERY_KEYS.ROOM.GET_ROOM_INFO,
            roomUUID,
          ]);
          queryClient.invalidateQueries([
            QUERY_KEYS.AVAILABLE_TIME.GET_AVAILABLE_TIMES_BY_GROUP,
            roomUUID,
          ]);
          queryClient.invalidateQueries([
            QUERY_KEYS.RESULT.GET_CANDIDATE_TIMES,
            roomUUID,
          ]);

          const savedUser = localStorage.getItem('userName');
          const isSavedUserDeleted =
            savedUser &&
            selectedDeleteParticipants.filter((p) => p.name === savedUser)
              .length > 0;

          if (isSavedUserDeleted) {
            localStorage.clear();
          }

          setIsDeleteModalOpened(false);
          setIsDeleteMode(false);
          setSelectedDeleteParticipants([]);
        },
      }
    );
  };

  if (!data) return null;
  return (
    <>
      <Helmet>
        <title>{`${title} - 실시간 참여 현황`}</title>
        <meta name="title" content={`${title} - 실시간 참여 현황`} />
        <meta
          name="description"
          content="실시간 참여 현황 | 쉽고 빠른 약속시간 정하기, 모두의 시간"
        />
      </Helmet>
      <Layout>
        <Wrapper ref={scrollRef}>
          <Header pageName={ROUTES.CURRENT} title={title} />

          <Body>
            {deadLine && (
              <TimerWrapper>
                <Timer deadLine={deadLine} />
              </TimerWrapper>
            )}

            <Section>
              <TitleWrapper>
                <Title>실시간 참여 현황</Title>
                {isDeleteMode ? (
                  <EditButtonWrapper>
                    <EditParticipantButton
                      onClick={() => {
                        setIsDeleteMode(false);
                        setSelectedDeleteParticipants([]);
                      }}
                    >
                      취소
                    </EditParticipantButton>
                    <EditParticipantButton
                      disabled={selectedDeleteParticipants.length === 0}
                      isDeleteMode={isDeleteMode}
                      onClick={() => setIsDeleteModalOpened(true)}
                    >
                      삭제
                    </EditParticipantButton>
                  </EditButtonWrapper>
                ) : (
                  <EditParticipantButton
                    isDeleteMode={isDeleteMode}
                    onClick={handleModeButtonToggle}
                  >
                    수정
                  </EditParticipantButton>
                )}
              </TitleWrapper>
              {isDeleteMode ? (
                <Subtitle isDeleteMode={isDeleteMode}>
                  삭제할 참여자를 선택해 주세요
                </Subtitle>
              ) : (
                <Subtitle isDeleteMode={isDeleteMode}>
                  참여하지 않은 친구들에게 메시지를 보내 보세요!
                </Subtitle>
              )}

              {headCount ? (
                <ProgressBar
                  headCount={headCount}
                  participants={participants}
                />
              ) : null}

              <Participants>
                {participants?.map((participant: Participant) => (
                  <ParticipantsBlock
                    key={participant.id}
                    participant={participant}
                    isDeleteMode={isDeleteMode}
                    isSelected={
                      isDeleteMode
                        ? selectedDeleteParticipants.filter(
                            (p) => p.id === participant.id
                          ).length > 0
                        : selectedParticipants.filter(
                            (p) => p.id === participant.id
                          ).length > 0
                    }
                    onClick={
                      isDeleteMode
                        ? () => handleParticipantClickToDelete(participant)
                        : () => handleParticipantClickToSelect(participant)
                    }
                  />
                ))}

                {!isDeleteMode &&
                  (headCount
                    ? participants.length < headCount && (
                        <ParticipantsBlock
                          participant={{ id: -1, name: '?' }}
                        />
                      )
                    : participants.length === 0 && (
                        <ParticipantsBlock
                          participant={{ id: -1, name: '?' }}
                        />
                      ))}
              </Participants>
            </Section>

            <Border />

            <Section>
              <Title>실시간 등록 현황</Title>
              {isTableView ? (
                <TableWrapper>
                  <Table
                    dates={
                      dates.length < 4
                        ? getFourChunks(getFormattedDateArray(dates))
                        : getFormattedDateArray(dates)
                    }
                    startTime={startTime}
                    endTime={endTime}
                    timeInfo={
                      selectedParticipants.length > 0
                        ? availableTimeOverview
                        : timeInfo
                    }
                    participants={
                      selectedParticipants.length > 0
                        ? selectedParticipants
                        : participants
                    }
                  />
                </TableWrapper>
              ) : (
                <CurrentCalendar
                  timeInfo={
                    selectedParticipants.length > 0
                      ? availableTimeOverview
                      : timeInfo
                  }
                  defaultActiveStartDate={
                    data.dates?.[0] ? new Date(data.dates[0]) : new Date()
                  }
                  participants={
                    selectedParticipants.length > 0
                      ? selectedParticipants
                      : participants
                  }
                />
              )}
            </Section>
          </Body>

          <BottomWrapper>
            <EditButton
              onClick={handleEditButtonClick}
              isScrollUp={isScrollUp}
              isScrollDown={isScrollDown}
            >
              <img src={plus} alt="일정 등록하기 버튼" />
              <span>등록하기</span>
            </EditButton>
          </BottomWrapper>

          <BottomButton
            onClick={goToResult}
            text="우선순위 보기"
            isActivated={true}
          />

          {isShareLinkBottomSheetOpened && (
            <LinkShareBottomSheet roomTitle={data.title} />
          )}
        </Wrapper>
      </Layout>

      {isDeleteModalOpened && (
        <AnimatePresence>
          <Modal
            title="선택한 인원을 삭제할까요?"
            subtitle={`삭제된 인원은 다시 복구할 수 없으며,\n참여 현황에서도 제외돼요.`}
            participants={selectedDeleteParticipants}
            onAction={handleDeleteClick}
            closeModal={() => setIsDeleteModalOpened(false)}
          />
        </AnimatePresence>
      )}
    </>
  );
};

export default Current;
