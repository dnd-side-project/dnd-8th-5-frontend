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
import { RoomTypes } from '../../types/roomInfo';

import BottomSheetShare from '../../components/bottomSheetShare/BottomSheetShare';

import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { roomState } from '../../atoms/roomAtoms';
import CurrentCalendar from '../../components/currentCalendar/CurrentCalendar';

const Current = () => {
  const { roomUuid } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();

  const [room, setRoom] = useRecoilState(roomState);
  const [currentRoomState, setCurrentRoomState] = useState<any>([]);

  useEffect(() => {
    if (state !== null) {
      const { isRoomCreator } = state;
      setIsAvailableBottomSheet(isRoomCreator);
    }

    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUuid}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

  useEffect(() => {
    const getCurrentRoomInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUuid}/available-time/group`
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
      localStorage.getItem('name') &&
      localStorage.getItem('uuid') === roomUuid
    ) {
      navigate(`/add/${roomUuid}`);
    } else {
      navigate(`/Login/${roomUuid}`);
    }
  };

  const goToResult = () => {
    navigate(`/result/${roomUuid}`);
  };

  return (
    <Wrapper>
      <Header pageName="current" title={title} />
      <Body>
        {deadLine && <Timer deadLine={deadLine} />}
        <Title>????????? ?????? ??????</Title>
        <Subtitle>???????????? ?????? ??????????????? ???????????? ???????????????!</Subtitle>

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
        <Title>????????? ?????? ??????</Title>

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
            text="???????????? ??????"
            isActivated={true}
            navigate={goToResult}
          />
        </BottomButtonCover>
      </BottomWrapper>

      {isAvailableBottomSheet ? <BottomSheetShare roomUuid={roomUuid} /> : null}
    </Wrapper>
  );
};

export default Current;
