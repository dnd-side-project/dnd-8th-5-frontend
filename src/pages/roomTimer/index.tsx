import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { createRoomAtom } from '@/atoms/createRoomAtom';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';

import {
  BottomContainer,
  BottomHeaderText,
  BottomHeaderWrapper,
  CheckboxWrapper,
  DependingBox,
  MainContainer,
  RecommendBox,
  RecommendWrapper,
  TimerContainr,
  TimerWrapper,
} from './index.styles';
import Timer from '@/components/createRoom/timer';
import Checkbox from '@/components/createRoom/checkbox';
import BottomButton from '@/components/commons/bottomButton';

import { ROUTES } from '@/constants/ROUTES';
import { useCreateRoom } from '@/queries/room/useCreateRoom';
import { RoomLayout } from '@/components/commons/layout/RoomLayout';

type TimerType = { day: number; hour: number; minute: number };

const TIMER_BUTTONS: { label: string; value: TimerType }[] = [
  { label: '1일', value: { day: 1, hour: 0, minute: 0 } },
  { label: '6시간', value: { day: 0, hour: 6, minute: 0 } },
  { label: '3시간', value: { day: 0, hour: 3, minute: 0 } },
  { label: '1시간', value: { day: 0, hour: 1, minute: 0 } },
  { label: '30분', value: { day: 0, hour: 0, minute: 30 } },
  { label: '10분', value: { day: 0, hour: 0, minute: 10 } },
];

const RoomTimer = () => {
  const navigate = useNavigate();
  const [recoilRoom, setRecoilRoom] = useRecoilState(createRoomAtom);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(
    recoilRoom.timerType === 'checkbox'
  );

  const [day, setDay] = useState(
    recoilRoom.timerType === 'dial' && recoilRoom.timer && recoilRoom.timer?.day
      ? recoilRoom.timer.day
      : 0
  );
  const [hour, setHour] = useState(
    recoilRoom.timerType === 'dial' &&
      recoilRoom.timer &&
      recoilRoom.timer?.hour
      ? recoilRoom.timer.hour
      : 0
  );
  const [minute, setMinute] = useState(
    recoilRoom.timerType === 'dial' &&
      recoilRoom.timer &&
      recoilRoom.timer?.minute
      ? recoilRoom.timer.minute
      : 0
  );

  const setIsLinkShareBottomSheetOpened = useSetRecoilState(
    LinkShareBottomSheetState
  );

  const { mutate, data, isError, isSuccess, isLoading } = useCreateRoom();

  const handleClickRecommendBox = (label: string, value: TimerType) => {
    if (selectedButton === label) {
      setSelectedButton(null);
      setRecoilRoom((prev) => ({ ...prev, timer: null, timerType: null }));
      return;
    }
    setSelectedButton(label);
    setRecoilRoom((prev) => ({ ...prev, timer: value, timerType: 'button' }));
  };

  const allZero = day === 0 && hour === 0 && minute === 0;

  const handleClickCompleteButton = () => {
    if (day || minute || hour || !!selectedButton || isChecked) {
      mutate({
        title: recoilRoom.title,
        headCount: recoilRoom.headCount,
        dates: recoilRoom.dates,
        startTime: recoilRoom.startTime,
        endTime: recoilRoom.endTime,
        timer:
          recoilRoom.timerType === 'dial'
            ? { day, hour, minute }
            : recoilRoom.timer,
      });
    }
  };

  useEffect(() => {
    if (recoilRoom.timerType === 'button' && !!recoilRoom.timer) {
      if (recoilRoom.timer.day === 1) {
        setSelectedButton('1일');
        return;
      }
      if (recoilRoom.timer.hour === 6) {
        setSelectedButton('6시간');
        return;
      }
      if (recoilRoom.timer.hour === 3) {
        setSelectedButton('3시간');
        return;
      }
      if (recoilRoom.timer.hour === 1) {
        setSelectedButton('1시간');
        return;
      }
      if (recoilRoom.timer.minute === 30) {
        setSelectedButton('30분');
        return;
      }
      if (recoilRoom.timer.minute === 10) {
        setSelectedButton('10분');
        return;
      }
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate(`${ROUTES.CURRENT}/${data.roomUuid}`);
      setIsLinkShareBottomSheetOpened(true);
      return;
    }

    if (isError) {
      alert('약속 생성 중 오류가 발생했어요.');
      return;
    }
  }, [isError, isSuccess]);

  return (
    <RoomLayout title="일정 마감 시간 설정" currentStep="timer">
      <MainContainer>
        <TimerContainr>
          <TimerWrapper>
            <Timer
              day={day}
              hour={hour}
              minute={minute}
              setDay={setDay}
              setHour={setHour}
              setMinute={setMinute}
            />
          </TimerWrapper>
          {isChecked || !!selectedButton ? (
            <DependingBox value={3} />
          ) : (
            <DependingBox value={1} />
          )}
        </TimerContainr>
        <BottomContainer>
          <BottomHeaderWrapper>
            <BottomHeaderText>타이머 시간을 추천해 드려요</BottomHeaderText>
          </BottomHeaderWrapper>
          <RecommendWrapper>
            {TIMER_BUTTONS.map((item) => {
              return (
                <RecommendBox
                  key={item.label}
                  value={selectedButton === item.label}
                  onClick={() =>
                    handleClickRecommendBox(item.label, item.value)
                  }
                  isChecked={isChecked}
                >
                  {item.label}
                </RecommendBox>
              );
            })}
          </RecommendWrapper>
          <CheckboxWrapper>
            <Checkbox
              text={'타이머 등록 없이 여유롭게 일정을 받을래요'}
              value={isChecked}
              setValue={(value: boolean) => {
                if (value) {
                  setSelectedButton(null);
                  setRecoilRoom((prev) => ({
                    ...prev,
                    timer: null,
                    timerType: 'checkbox',
                  }));
                } else {
                  setRecoilRoom((prev) => ({
                    ...prev,
                    timer: null,
                    timerType: null,
                  }));
                }
                setIsChecked(value);
              }}
            />
          </CheckboxWrapper>
        </BottomContainer>
        <BottomButton
          type="button"
          onClick={handleClickCompleteButton}
          text="완료하기"
          isActivated={!allZero || !!selectedButton || isChecked}
          isLoading={isLoading}
        />
      </MainContainer>
    </RoomLayout>
  );
};

export default RoomTimer;
