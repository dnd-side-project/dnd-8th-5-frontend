import Header from '../../components/header/Header';
import ParticipantsBlock from '../../components/participantsBlock/ParticipantsBlock';
import ProgressBar from '../../components/progressBar/ProgressBar';
import Table from '../../components/table/Table';
import BottomButton from '../../components/bottomButton/BottomButton';
import Timer from '../../components/timer/Timer';

import current from '../../assets/data/current.json';
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

const Current = () => {
  const { roomUuid } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();

  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: '',
    headCount: 0,
    participants: [''],
    dates: [''],
    startTime: '',
    endTime: '',
  });

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

  const { title, participants, headCount, deadLine } = room;

  const [isAvailableBottomSheet, setIsAvailableBottomSheet] =
    useState<boolean>(false);

  const handleEditButtonClick = () => {
    if (localStorage.getItem('name') && localStorage.getItem('uuid')) {
      navigate(`/addTime/${roomUuid}`);
    } else {
      navigate(`/Login/${roomUuid}`);
    }
  };

  return (
    <Wrapper>
      <Header pageName="current" />
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
        <TableWrapper>
          <Table room={room} current={current} />
        </TableWrapper>
      </Body>
      <BottomWrapper>
        <Edit onClick={handleEditButtonClick}>
          <EditIcon src={edit} alt="edit" />
        </Edit>
        <BottomButtonCover>
          <BottomButton text="우선순위 보기" isActivated={true} />
        </BottomButtonCover>
      </BottomWrapper>
      {isAvailableBottomSheet ? <BottomSheetShare roomUuid={roomUuid} /> : null}
    </Wrapper>
  );
};

export default Current;
