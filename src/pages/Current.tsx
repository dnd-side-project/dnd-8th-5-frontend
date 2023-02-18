import styled from '@emotion/styled';
import Header from '../components/commons/header/Header';
import ParticipantsBlock from '../components/participantsBlock/ParticipantsBlock';
import ProgressBar from '../components/progressBar/ProgressBar';
import Timer from '../components/timer/Timer';
import theme from '../styles/theme';

import room from '../assets/data/room.json';
import current from '../assets/data/current.json';

import BottomButton from '../components/commons/bottomButton/BottomButton';
import Table from '../components/table/Table';

const Current = () => {
  return (
    <Wrapper>
      <Header title={room.title} />
      <Body>
        <Timer />
        <Title>실시간 참여 현황</Title>
        <Subtitle>참여하지 않은 친구들에게 메시지를 보내보세요!</Subtitle>
        <Proportion>1/7</Proportion>
        <ProgressBar
          headCount={room.headCount}
          participants={room.participants}
        />
        <Participants>
          {room.participants.map((participant) => (
            <ParticipantsBlock key={participant} participant={participant} />
          ))}
          <ParticipantsBlock participant="?" />
        </Participants>
      </Body>

      <Body>
        <Title>실시간 조율 현황</Title>
        <TableWrapper>
          <Table room={room} current={current} />
        </TableWrapper>
      </Body>
      <BottomButtonCover>
        <BottomButton text="우선순위 보기" />
      </BottomButtonCover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  margin: 0 auto;
  /* margin-top: 30px; */

  border: 1px solid grey;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  width: 100%;

  padding: 0 20px;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 32px;

  color: ${theme.colors.gray7};
  ${theme.typography.system_1_semibold};
`;

const Subtitle = styled.div`
  margin-top: 6px;

  color: ${theme.colors.gray5};
  ${theme.typography.system_1_regular};
`;

const Proportion = styled.span`
  margin-top: 42px;
  margin-bottom: 4px;
  margin-left: auto;

  color: ${theme.colors.gray5};
  ${theme.typography.system_2_medium};
`;

const Participants = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  column-gap: 5px;
`;

const TableWrapper = styled.div`
  margin-top: 26px;
  margin-bottom: 10px;

  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BottomButtonCover = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 8px;

  position: sticky;
  bottom: 0;
  z-index: 2;

  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.06);
`;

export default Current;
