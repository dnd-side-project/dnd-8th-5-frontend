import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import BottomButton from '../../components/bottomButton/BottomButton';
import Checkbox from '../../components/checkbox/CheckBox';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import Timer from '../../components/setTimer/SetTimer';
import { recoilRoomState } from '../../recoil/recoilRoomState';
import {
  BottomButtonContainer,
  BottomContainer,
  BottomHeaderText,
  BottomHeaderWrapper,
  CheckboxWrapper,
  DependingBox,
  HeaderContainer,
  MainContainer,
  RecommendBox,
  RecommendWrapper,
  TimerContainr,
  TImerWrapper,
} from './Timer.styles';

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

  const [recoilRoom, setRecoilRoom] = useRecoilState(recoilRoomState);

  console.log('recoil room ti', recoilRoom);

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
    <MainContainer>
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
      <BottomButtonContainer>
        <BottomButton text="완료하기" isActivated={true} />
      </BottomButtonContainer>
    </MainContainer>
  );
};

export default TimerPage;
