import styled from '@emotion/styled';
import RoomHeader from '../components/header/RoomHeader';
import Timer from '../components/timer/TImer';
import theme from '../styles/theme';

const TimerPage = () => {
  const RecommendArray = ['10분', '30분', '1시간', '3시간', '6시간', '하루'];
  return (
    <Main>
      <RoomHeader
        index={'2/2'}
        title={`언제까지 참여자들의\n일정을 받아볼까요?`}
      />
      <Timer />
      <BottomContainer>
        <BottomHeaderWrapper>
          <BottomHeaderText>타이머 시간을 추천해드려요</BottomHeaderText>
        </BottomHeaderWrapper>
        <RecommendWrapper>
          {RecommendArray.map((item: string) => {
            return <RecommendBox key={item}>{item}</RecommendBox>;
          })}
        </RecommendWrapper>
      </BottomContainer>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 375px;
  height: 812px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 332px;
  background-color: #f5f6ff;
`;

const BottomHeaderWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomHeaderText = styled.div`
  ${theme.typography.medium03}
`;

const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 335px;
  height: 94px;
  flex-wrap: wrap;
`;

const RecommendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 41px;
  background-color: ${theme.colors.gray01};
  border-radius: 6px;
  color: ${theme.colors.purple06};
  ${theme.typography.medium02};
`;

export default TimerPage;
