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

import edit from '../assets/icons/edit.svg';

const Current = () => {
  const { participants, headCount } = room;

  return (
    <Wrapper>
      <Header title={room.title} />
      <Body>
        <Timer deadLine={room.deadLine} />
        <Title>실시간 참여 현황</Title>
        <Subtitle>참여하지 않은 친구들에게 메시지를 보내보세요!</Subtitle>
        <Proportion>
          <Span>{participants.length}</Span> / {headCount}
        </Proportion>
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
          <BottomButton text="우선순위 보기" />
        </BottomButtonCover>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 108px;

  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
`;

const Border = styled.div`
  width: 100%;
  height: 8px;

  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;

  background: ${theme.colors.gray02};
`;

const Title = styled.div`
  margin-top: 32px;

  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

const Subtitle = styled.div`
  margin-top: 6px;

  color: ${theme.colors.gray05};
  ${theme.typography.medium04};
`;

const Proportion = styled.div`
  margin-top: 42px;
  margin-bottom: 4px;
  margin-left: auto;

  color: ${theme.colors.gray05};
  ${theme.typography.medium05};
`;

const Span = styled.span`
  color: ${theme.colors.purple06};
  ${theme.typography.medium05};
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
  overflow-y: hidden;

  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  height: 156px;
  margin: 0 auto;
  padding: 0 20px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BottomButtonCover = styled.div`
  width: 100%;
  max-width: 375px;
  height: 90px;
  margin: 0 auto;

  background: ${theme.colors.gray01};
  border-top: 2px solid ${theme.colors.gray02};

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Edit = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50px;

  background: ${theme.colors.gray01};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: 0 0 0 auto;
`;

const EditIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default Current;
