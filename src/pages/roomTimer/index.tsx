import { useState, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { createRoomAtom } from '@/atoms/createRoomAtom';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';

import {
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
} from './index.styles';
import Timer from '@/components/createRoom/timer';
import Checkbox from '@/components/createRoom/checkbox';
import RoomHeader from '@/components/createRoom/header';
import BottomButton from '@/components/commons/bottomButton';

import { ROUTES } from '@/constants/ROUTES';
import { useCreateRoom } from '@/queries/room/useCreateRoom';
import { Layout } from '@/components/commons/layout';

const RoomTimer = () => {
  const navigate = useNavigate();
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

  const [room, setRoom] = useRecoilState(createRoomAtom);
  const [, setIsLinkShareBottomSheetOpened] = useRecoilState(
    LinkShareBottomSheetState
  );

  const { mutate, data, isError, isSuccess } = useCreateRoom();

  const handleCreateRoom = useCallback(() => {
    if (
      day ||
      minute ||
      hour ||
      isClickedRecommend.indexOf(true) >= 0 ||
      isChecked
    ) {
      mutate(room);
    }
  }, [day, minute, hour, isClickedRecommend, isChecked, mutate, room]);

  useEffect(() => {
    if (isError) {
      confirm('오류가 발생했습니다.\n처음부터 다시 시도해 주세요.');
      navigate(`${ROUTES.LANDING}`);
    }

    if (isSuccess && data) {
      navigate(`${ROUTES.CURRENT}/${data.roomUuid}`);
      setIsLinkShareBottomSheetOpened(true);
    }
  }, [isError, isSuccess, data]);

  useEffect(() => {
    setIsClickedRecommend((prev) =>
      prev.map(() => {
        return false;
      })
    );
  }, [isChecked]);

  const handleClickRecommendBox = useCallback(
    (idx: number) => {
      setIsClickedRecommend((prev) =>
        prev.map((element, index) => {
          return index === idx ? !element : false;
        })
      );
    },
    [isClickedRecommend]
  );

  const allZero = day === 0 && hour === 0 && minute === 0;

  const handleClickCompleteButton = useCallback(() => {
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

    setRoom((prev) => {
      return {
        ...prev,
        ['timeLimit']: isChecked
          ? 0
          : recommendDay * 24 * 60 + recommendHour * 60 + recommendMinute,
      };
    });

    handleCreateRoom();
  }, [
    day,
    hour,
    minute,
    isClickedRecommend,
    isChecked,
    setRoom,
    handleCreateRoom,
  ]);

  return (
    <Layout>
      <MainContainer>
        <HeaderContainer>
          <RoomHeader
            index={'2/2'}
            title={`언제까지 참여자들의\n일정을 받아 볼까요?`}
            bottomSheet={false}
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
                  onClick={() => handleClickRecommendBox(index)}
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

        <BottomButton
          onClick={handleClickCompleteButton}
          text="완료하기"
          isActivated={
            !allZero || isClickedRecommend.indexOf(true) >= 0 || isChecked
          }
        />
      </MainContainer>
    </Layout>
  );
};

export default RoomTimer;
