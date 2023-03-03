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
import { useParams } from 'react-router-dom';
import { RoomTypes } from '../../types/roomInfo';

const Current = () => {
  const { roomId } = useParams();

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
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomId}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

  const { title, participants, headCount, deadLine } = room;

  return (
    <Wrapper>
      <Header title={title} />
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
        <Edit>
          <EditIcon src={edit} alt="edit" />
        </Edit>
        <BottomButtonCover>
          <BottomButton text="우선순위 보기" isActivated={true} />
        </BottomButtonCover>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Current;
