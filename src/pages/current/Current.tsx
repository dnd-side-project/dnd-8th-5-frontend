import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { useRecoilState } from 'recoil';
import { selectedMethodState } from '@/atoms/selectedMethodAtom';

import Timer from '@components/timer/Timer';
import Table from '@components/table/Table';
import Header from '@components/header/Header';
import ProgressBar from '@components/progressBar/ProgressBar';
import BottomButton from '@components/bottomButton/BottomButton';
import CurrentCalendar from '@components/currentCalendar/CurrentCalendar';
import ParticipantsBlock from '@components/participantsBlock/ParticipantsBlock';
import LinkShareBottomSheet from '@/components/linkShareBottomSheet/LinkShareBottomSheet';

import {
  Body,
  Border,
  BottomWrapper,
  Edit,
  EditIcon,
  Participants,
  Subtitle,
  TableWrapper,
  Title,
  Wrapper,
} from './Current.styles';
import edit from '@/assets/icons/edit.svg';
import { initialRoomInfoData } from '@/assets/data/initialRoomInfoData';

import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/ROUTES';
import { getFourChunks } from '@/utils/getFourChunks';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';

import { RoomTypes } from '@/types/roomInfo';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';

const Current = () => {
  const navigate = useNavigate();
  const { roomUUID } = useParams() as { roomUUID: string };
  const [, setSelectedMethod] = useRecoilState(selectedMethodState);
  const [isShareLinkBottomSheetOpened] = useRecoilState(
    LinkShareBottomSheetState
  );

  const [
    { title, headCount, participants, deadLine, dates, startTime, endTime },
    setRoomInfo,
  ] = useState<RoomTypes>(initialRoomInfoData);

  const { data, isError } = useGetRoomInfo(roomUUID);

  useEffect(() => {
    if (data) {
      setRoomInfo(data);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      navigate(`${ROUTES.ERROR}`);
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

  return (
    <Wrapper>
      <Header pageName={ROUTES.CURRENT} title={title} />
      <Body>
        {deadLine && <Timer deadLine={deadLine} />}
        <Title>실시간 참여 현황</Title>
        <Subtitle>참여하지 않은 친구들에게 메시지를 보내보세요!</Subtitle>

        {headCount ? (
          <ProgressBar headCount={headCount} participants={participants} />
        ) : null}

        <Participants>
          {participants &&
            participants.map((participant: string) => (
              <ParticipantsBlock key={participant} participant={participant} />
            ))}

          {headCount
            ? participants.length < headCount && (
                <ParticipantsBlock participant={'?'} />
              )
            : participants.length === 0 && (
                <ParticipantsBlock participant={'?'} />
              )}
        </Participants>
      </Body>

      <Border />

      <Body>
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
          <CurrentCalendar participants={participants} />
        )}
      </Body>
      <BottomWrapper>
        <Edit onClick={handleEditButtonClick}>
          <EditIcon src={edit} alt="edit" />
        </Edit>
        <BottomButton
          onClick={goToResult}
          text="우선순위 보기"
          isActivated={true}
        />
      </BottomWrapper>

      {isShareLinkBottomSheetOpened && <LinkShareBottomSheet />}
    </Wrapper>
  );
};

export default Current;
