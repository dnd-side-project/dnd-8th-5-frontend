import Header from '../../components/header/Header';
import ParticipantsBlock from '../../components/participantsBlock/ParticipantsBlock';
import ProgressBar from '../../components/progressBar/ProgressBar';
import Table from '../../components/table/Table';
import BottomButton from '../../components/bottomButton/BottomButton';
import Timer from '../../components/timer/Timer';

import edit from '../../assets/icons/edit.svg';

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

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BottomSheetShare from '../../components/bottomSheetShare/BottomSheetShare';

import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CurrentCalendar from '../../components/currentCalendar/CurrentCalendar';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';
import { getFourChunks } from '../../utils/getFourChunks';
import { useAuth } from '../../hooks/useAuth';
import { useGetRoomInfo } from '../../queries/room/useGetRoomInfo';
import { RoomTypes } from '../../types/roomInfo';

import { initialRoomInfoData } from '../../assets/data/initialRoomInfoData';
import { ROUTES } from '../../constants/ROUTES';

const Current = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roomUUID } = useParams() as { roomUUID: string };
  const [, setSelectedMethod] = useRecoilState(selectedMethodState);
  const [isBottomSheetOpened, setIsBottomSheetOpened] =
    useState<boolean>(false);

  const [
    { title, headCount, participants, deadLine, dates, startTime, endTime },
    setRoomInfo,
  ] = useState<RoomTypes>(initialRoomInfoData);

  const { data } = useGetRoomInfo(roomUUID);

  useEffect(() => {
    if (data) {
      setRoomInfo(data);
    }
  }, [data]);

  useEffect(() => {
    if (location.state) {
      if (location.state.isRoomCreated) {
        setIsBottomSheetOpened(true);
      }
    } else {
      setIsBottomSheetOpened(false);
    }
  }, [location]);

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

          {headCount &&
            (participants.length < headCount ? (
              <ParticipantsBlock participant={'?'} />
            ) : null)}
        </Participants>
      </Body>

      <Border />

      <Body>
        <Title>실시간 조율 현황</Title>
        {isTableView ? (
          <TableWrapper>
            <Table
              dates={dates.length < 4 ? getFourChunks(dates) : dates}
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
          navigate={goToResult}
        />
      </BottomWrapper>

      {isBottomSheetOpened && <BottomSheetShare />}
    </Wrapper>
  );
};

export default Current;
