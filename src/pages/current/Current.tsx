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
import { useParams } from 'react-router-dom';
import { CurrentTypes } from '../../types/current';
import { goToResult } from '../../utils/navigate';
import { useRecoilState } from 'recoil';
import { roomState } from '../../atoms/roomAtoms';

const Current = () => {
  const { roomUuid } = useParams();

  const [room, setRoom] = useRecoilState(roomState);

  const [current, setCurrent] = useState<CurrentTypes>({
    availableDateTimes: [
      {
        availableDate: '',
        availableTimeInfos: [
          {
            time: '',
            count: 0,
          },
        ],
      },
    ],
  });

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUuid}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

  const { title, participants, headCount, deadLine } = room;

  useEffect(() => {
    const getCurrent = async () => {
      const { data } = await API.get(
        `/api/room/${roomUuid}/available-time/group`
      );
      setCurrent(data);
    };

    getCurrent();
  }, []);

  return (
    <Wrapper>
      <Header title={title} />
      <Body>
        {deadLine && <Timer deadLine={deadLine} />}
        <Title>실시간 참여 현황</Title>
        <Subtitle>참여하지 않은 친구들에게 메시지를 보내보세요!</Subtitle>

        {headCount && (
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
          <BottomButton
            navigate={goToResult}
            text="우선순위 보기"
            isActivated={true}
          />
        </BottomButtonCover>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Current;
