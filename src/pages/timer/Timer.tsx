import { useState, useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import BottomButton from '../../components/bottomButton/BottomButton';
import Checkbox from '../../components/checkbox/CheckBox';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import Timer from '../../components/setTimer/SetTimer';
import {
  recoilRoomState,
  recoilRoomInfoState,
} from '../../recoil/recoilRoomState';
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
import postRoomInfo from '../../hooks/useAPI';
import { useMutation } from 'react-query';

const TimerPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const RecommendArray = ['10분', '30분', '1시간', '3시간', '6시간', '하루'];
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isClickedRecommend, setIsClickedRecommend] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [recoilRoom, setRecoilRoom] = useRecoilState(recoilRoomState);
  const recoilRoomInfoStates = useRecoilValue(recoilRoomInfoState);

  interface recoilRoom {
    headCount: number;
    dates: [];
    startTime: string;
    endTime: string;
    timer: {
      day: number;
      hour: number;
      minute: number;
    };
    title: string;
  }

  useEffect(() => {
    if (
      day ||
      minute ||
      hour ||
      isClickedRecommend.indexOf(true) >= 0 ||
      isChecked
    ) {
      mutate(recoilRoom);
    }
  }, [recoilRoom]);

  const onClickRecommendBox = useCallback(
    (idx: number) => {
      setIsClickedRecommend((prev) =>
        prev.map((element, index) => {
          return index === idx ? !element : false;
        })
      );
    },
    [isClickedRecommend]
  );

  const { mutate, isLoading, isError, error, isSuccess } =
    useMutation(postRoomInfo);

  const onSetRecoilState = useCallback(() => {
    const allZero = day === 0 && hour === 0 && minute === 0;

    let recommendDay = day;
    let recommendHour = hour;
    let recommendMinute = minute;

    if (isClickedRecommend[0]) {
      recommendDay = 0;
      recommendHour = 0;
      recommendMinute = 10;
    } else if (isClickedRecommend[1]) {
      recommendDay = 0;
      recommendHour = 0;
      recommendMinute = 30;
    } else if (isClickedRecommend[2]) {
      recommendDay = 0;
      recommendHour = 1;
      recommendMinute = 0;
    } else if (isClickedRecommend[3]) {
      recommendDay = 0;
      recommendHour = 3;
      recommendMinute = 0;
    } else if (isClickedRecommend[4]) {
      recommendDay = 0;
      recommendHour = 6;
      recommendMinute = 0;
    } else if (isClickedRecommend[5]) {
      recommendDay = 1;
      recommendHour = 0;
      recommendMinute = 0;
    }

    setRecoilRoom((prev) => {
      return {
        ...prev,
        ['timer']: {
          day:
            isChecked || allZero
              ? null
              : isClickedRecommend.indexOf(true) >= 0
              ? recommendDay
              : day,
          hour:
            isChecked || allZero
              ? null
              : isClickedRecommend.indexOf(true) >= 0
              ? recommendHour
              : hour,
          minute:
            isChecked || allZero
              ? null
              : isClickedRecommend.indexOf(true) >= 0
              ? recommendMinute
              : minute,
        },
      };
    });
  }, [
    day,
    hour,
    minute,
    isChecked,
    recoilRoom,
    isClickedRecommend,
    recoilRoom,
    recoilRoomInfoStates,
  ]);

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
          <Timer setDay={setDay} setHour={setHour} setMinute={setMinute} />
        </TImerWrapper>
        {isChecked || isClickedRecommend.indexOf(true) >= 0 ? (
          <DependingBox value={3} />
        ) : (
          <DependingBox value={1} />
        )}
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
                value={isClickedRecommend[index]}
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
      <BottomButtonContainer onClick={onSetRecoilState}>
        <BottomButton text="완료하기" isActivated={true} />
      </BottomButtonContainer>
    </MainContainer>
  );
};

export default TimerPage;
