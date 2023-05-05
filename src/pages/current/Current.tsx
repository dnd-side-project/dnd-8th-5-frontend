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
  BottomButtonCover,
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
import { API } from '../../utils/API';
import { useNavigate, useParams } from 'react-router-dom';

import BottomSheetShare from '../../components/bottomSheetShare/BottomSheetShare';

import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { roomState } from '../../atoms/roomAtoms';
import CurrentCalendar from '../../components/currentCalendar/CurrentCalendar';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';
import { userNameState } from '../../atoms/userNameAtoms';

const Current = () => {
  const { roomUUID } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();

  const [room, setRoom] = useRecoilState(roomState);
  const [currentRoomState, setCurrentRoomState] = useState({
    availableDateTimes: [
      {
        availableDate: '',
        availableTimeInfos: [
          {
            time: null,
            count: 0,
          },
        ],
      },
    ],
  });

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [userName, setUserName] = useRecoilState(userNameState);

  useEffect(() => {
    if (state !== null) {
      const { isRoomCreator } = state;
      setIsAvailableBottomSheet(isRoomCreator);
    }

    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

  useEffect(() => {
    const getCurrentRoomInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time/group`
      );
      setCurrentRoomState(data);
    };

    getCurrentRoomInfo();
  }, []);

  const { availableDateTimes } = currentRoomState;

  const {
    title,
    dates,
    participants,
    headCount,
    deadLine,
    startTime,
    endTime,
  } = room;

  const [isAvailableBottomSheet, setIsAvailableBottomSheet] =
    useState<boolean>(false);

  const handleEditButtonClick = () => {
    if (
      (localStorage.getItem('name') === '' ||
        localStorage.getItem('name') === null) &&
      userName === ''
    ) {
      navigate(`/Login/${roomUUID}`);
    } else {
      setSelectedMethod('possible');
      navigate(`/add/${roomUUID}`);
    }
  };

  const goToResult = () => {
    navigate(`/result/${roomUUID}`);
  };

  return (
    <Wrapper>
      <Header pageName="current" title={title} />
      <Body>
        {deadLine && <Timer deadLine={deadLine} />}
        <Title>실시간 참여 현황</Title>
        <Subtitle>참여하지 않은 친구들에게 메시지를 보내보세요!</Subtitle>

        {!headCount && (
          <ProgressBar headCount={headCount} participants={participants} />
        )}
        <Participants>
          {participants.map((participant: string) => (
            <ParticipantsBlock key={participant} participant={participant} />
          ))}
          <ParticipantsBlock participant={'?'} />
        </Participants>
      </Body>

      <Border />

      <Body>
        <Title>실시간 조율 현황</Title>
        {startTime !== null && endTime !== null ? (
          <TableWrapper>
            <Table
              dates={dates}
              startTime={startTime}
              endTime={endTime}
              participants={participants}
            />
          </TableWrapper>
        ) : (
          <CurrentCalendar
            availableDateTimes={availableDateTimes}
            participants={participants}
          />
        )}
      </Body>
      <BottomWrapper>
        <Edit onClick={handleEditButtonClick}>
          <EditIcon src={edit} alt="edit" />
        </Edit>
        <BottomButtonCover>
          <BottomButton
            onClick={goToResult}
            text="우선순위 보기"
            isActivated={true}
            navigate={goToResult}
          />
        </BottomButtonCover>
      </BottomWrapper>

      {isAvailableBottomSheet ? <BottomSheetShare roomUuid={roomUUID} /> : null}
    </Wrapper>
  );
};

export default Current;
