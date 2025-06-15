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

import { RoomTypes } from '@/types/roomInfo';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';
import { useScrollDetection } from '@/hooks/useScrollDirection';
import { Layout } from '@/components/commons/layout';
import { AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/commons/modal';
import { useDeleteParticipants } from '@/queries/room/useDeleteParticipants';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/QUERY_KEYS';

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

  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [selectedDeleteParticipant, setSelectedDeleteParticipant] = useState<
    string[]
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

  const handleParticipantClick = (participant: string) => {
    if (!isDeleteMode) return;

    if (selectedDeleteParticipant.includes(participant)) {
      setSelectedDeleteParticipant((prev) =>
        prev.filter((p) => p !== participant)
      );
    } else {
      setSelectedDeleteParticipant((prev) => [...prev, participant]);
    }
  };

  const handleDeleteClick = () => {
    if (selectedDeleteParticipant.length === 0) return;

    const body = {
      participantNames: selectedDeleteParticipant,
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
          setIsDeleteModalOpened(false);
          setIsDeleteMode(false);
          setSelectedDeleteParticipant([]);
        },
      }
    );
  };

  if (!data) return null;
  return (
    <>
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
                        setSelectedDeleteParticipant([]);
                      }}
                    >
                      취소
                    </EditParticipantButton>
                    <EditParticipantButton
                      disabled={selectedDeleteParticipant.length === 0}
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
                {participants &&
                  participants.map((participant: string) => (
                    <ParticipantsBlock
                      key={participant}
                      participant={participant}
                      isSelected={selectedDeleteParticipant.includes(
                        participant
                      )}
                      disabled={!isDeleteMode}
                      onClick={() => handleParticipantClick(participant)}
                    />
                  ))}

                {!isDeleteMode &&
                  (headCount
                    ? participants.length < headCount && (
                        <ParticipantsBlock participant={'?'} />
                      )
                    : participants.length === 0 && (
                        <ParticipantsBlock participant={'?'} />
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
                    participants={participants}
                  />
                </TableWrapper>
              ) : (
                <CurrentCalendar
                  defaultActiveStartDate={
                    data.dates?.[0] ? new Date(data.dates[0]) : new Date()
                  }
                  participants={participants}
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

          {isShareLinkBottomSheetOpened && <LinkShareBottomSheet />}
        </Wrapper>
      </Layout>

      {isDeleteModalOpened && (
        <AnimatePresence>
          <Modal
            title="선택한 인원을 삭제할까요?"
            subtitle={`삭제된 인원은 다시 복구할 수 없으며,\n참여 현황에서도 제외돼요.`}
            participants={selectedDeleteParticipant}
            onAction={handleDeleteClick}
            closeModal={() => setIsDeleteModalOpened(false)}
          />
        </AnimatePresence>
      )}
    </>
  );
};

export default Current;
