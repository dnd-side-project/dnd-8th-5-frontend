import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { createRoomAtom } from '@/atoms/createRoomAtom';

import {
  CheckBoxContainer,
  DependingBox,
  Divider,
  GreyBox,
  MainContainer,
  TimePickerContainer,
} from './index.styles';

import Checkbox from '@/components/createRoom/checkbox';
import Calendar from '@/components/createRoom/calendar';
import TimePicker from '@/components/createRoom/timePicker';
import BottomButton from '@/components/commons/bottomButton';
import { ROUTES } from '@/constants/ROUTES';
import { RoomLayout } from '@/components/commons/layout/RoomLayout';

const RoomCalendar = () => {
  const navigate = useNavigate();
  const [recoilRoom, setRecoilRoom] = useRecoilState(createRoomAtom);
  const [isCheckedBox, setIsCheckedBox] = useState<boolean>(
    recoilRoom.isOnlyDateSelect ? true : false
  );
  const [startTime, setStartTime] = useState<string>(
    recoilRoom.startTime ?? '09:00'
  );
  const [endTime, setEndTime] = useState<string>(recoilRoom.endTime ?? '18:00');

  const [, setMonth] = useState<string>('');

  const handleBottomButtonClick = () => {
    if (isCheckedBox) {
      setStartTime('09:00');
      setEndTime('09:00');
    }

    setRecoilRoom((prev) => ({
      ...prev,
      startTime: isCheckedBox ? null : startTime,
      endTime: isCheckedBox ? null : endTime,
    }));

    navigate(`${ROUTES.ROOM_TIMER}`);
  };

  useEffect(() => {
    if (isCheckedBox) {
      setRecoilRoom((prev) => ({
        ...prev,
        isOnlyDateSelect: true,
        startTime: null,
        endTime: null,
      }));
    } else {
      setRecoilRoom((prev) => ({
        ...prev,
        isOnlyDateSelect: false,
        startTime,
        endTime,
      }));
    }
  }, [isCheckedBox]);

  return (
    <RoomLayout title="날짜/시간대 선택" currentStep="date">
      <MainContainer>
        <Calendar setMonth={setMonth} />

        <Divider />

        <TimePickerContainer>
          <TimePicker setStartTime={setStartTime} setEndTime={setEndTime} />
          <GreyBox />
          {isCheckedBox ? <DependingBox /> : null}
        </TimePickerContainer>

        <CheckBoxContainer>
          <Checkbox
            text="시간 조율 없이 약속 날짜만 알고 싶어요"
            value={isCheckedBox}
            setValue={setIsCheckedBox}
          />
        </CheckBoxContainer>

        <BottomButton
          text="다음"
          isActivated={
            recoilRoom.dates.length > 0 &&
            (isCheckedBox || !!(startTime && endTime && startTime !== endTime))
          }
          onClick={handleBottomButtonClick}
        />
      </MainContainer>
    </RoomLayout>
  );
};

export default RoomCalendar;
