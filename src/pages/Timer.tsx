import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import Checkbox from '../components/checkbox/CheckBox';
import RoomHeader from '../components/roomHeader/RoomHeader';
import Timer from '../components/timer/TImer';
import theme from '../styles/theme';

const TimerPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const RecommendArray = ['10분', '30분', '1시간', '3시간', '6시간', '하루'];
  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickRecommendBox = useCallback(
    (idx: number) => {
      setIsClicked((prev) =>
        prev.map((element, index) => {
          return index === idx ? !element : false;
        })
      );
    },
    [isClicked]
  );

  return (
    <Main>
      <HeaderContainer>
        <RoomHeader
          index={'2/2'}
          title={`언제까지 참여자들의\n일정을 받아볼까요?`}
        />
      </HeaderContainer>
      <TimerContainr>
        <TImerWrapper>
          <Timer />
        </TImerWrapper>
        {isChecked ? <DependingBox value={3} /> : <DependingBox value={1} />}
      </TimerContainr>
      <BottomContainer>
        <BottomHeaderWrapper>
          <BottomHeaderText>타이머 시간을 추천해드려요</BottomHeaderText>
        </BottomHeaderWrapper>
        <RecommendWrapper>
          {RecommendArray.map((item: string, index: number) => {
            return (
              <RecommendBox
                onClick={() => onClickRecommendBox(index)}
                key={item}
                value={isClicked[index]}
                isChecked={isChecked}
              >
                {item}
              </RecommendBox>
            );
          })}
        </RecommendWrapper>
        <CheckboxWrapper>
          <Checkbox
            text={'타이머 등록 없이 여유롭게 일정을 받을래요'}
            value={isChecked}
            setValue={setIsChecked}
          />
        </CheckboxWrapper>
      </BottomContainer>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 375px;
  height: 100%;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  width: 333px;
  height: 116px;
  margin-bottom: 34px;
`;

const TimerContainr = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 0px;
`;

const TImerWrapper = styled.div`
  position: absolute;
  background-color: white;
  z-index: 2;
`;

const DependingBox = styled.div<{ value: number }>`
  width: 100%;
  height: 190px;
  background-color: rgba(256, 256, 256, 0.6);
  z-index: ${(props) => props.value};
`;

const BottomContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 332px;
  background-color: #f5f6ff;
  margin-top: 71px;
  z-index: 2;
`;

const BottomHeaderWrapper = styled.div`
  position: absolute;
  width: 170px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  z-index: 2;
`;

const BottomHeaderText = styled.div`
  z-index: 2;
  ${theme.typography.medium03}
`;

const RecommendWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 335px;
  height: 94px;
  top: 62px;
  flex-wrap: wrap;
  z-index: 2;
`;

const RecommendBox = styled.div<{ value: boolean; isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 41px;
  background-color: ${(props) =>
    props.value ? theme.colors.purple05 : 'white'};
  border-radius: 6px;
  color: ${(props) => (props.value ? 'white' : theme.colors.purple06)};
  color: ${(props) => (props.isChecked ? theme.colors.gray03 : 'none')};
  ${theme.typography.medium02};
  margin-bottom: 12px;
  pointer-events: ${(props) => (props.isChecked ? 'none' : null)};
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  top: 180px;
`;
export default TimerPage;
