import styled from '@emotion/styled';
import Header from '../components/commons/header/Header';
import ParticipantsBlock from '../components/participantsBlock/ParticipantsBlock';
import ProgressBar from '../components/progressBar/ProgressBar';
import Timer from '../components/timer/Timer';
import theme from '../styles/theme';

import room from '../assets/data/room.json';

const Current = () => {
  return (
    <Wrapper>
      <Header title={room.title} />
      <Timer />
      <Title>실시간 참여 현황</Title>
      <ProgressBar
        headCount={room.headCount}
        participants={room.participants}
      />
      <Subtitle>참여하지 않은 친구들에게 메시지를 보내보세요!</Subtitle>
      {room.participants.map((participant) => (
        <ParticipantsBlock participant={participant} />
      ))}
      <Title>실시간 조율 현황</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  overflow: auto;
`;

const Title = styled.div`
  color: ${theme.color.gray7};
  ${theme.typography.system_1_semibold};
`;

const Subtitle = styled.div`
  color: ${theme.color.gray5};
  ${theme.typography.system_1_regular};
`;

export default Current;
