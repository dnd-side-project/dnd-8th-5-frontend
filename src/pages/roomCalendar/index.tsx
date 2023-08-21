import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { createRoomAtom } from '@/atoms/createRoomAtom';

import {
  CheckBoxContainer,
  DependingBox,
  GreyBox,
  HeaderContainer,
  MainContainer,
  TimePickerContainer,
  TimePickerWrapper,
} from './index.styles';

import Checkbox from '@components/checkbox/CheckBox';
import Calendar from '@components/calendar/Calendar';
import RoomHeader from '@components/roomHeader/RoomHeader';
import TimePicker from '@components/timePicker/TimePicker';
import BottomButton from '@components/bottomButton/BottomButton';
import { ROUTES } from '../../constants/ROUTES';

const RoomCalendar = () => {
  const navigate = useNavigate();

  const [isCheckedBox, setIsCheckedBox] = useState<boolean>(false);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('18:00');
  const [dates, setDates] = useState<string[]>([]);
  const [, setMonth] = useState<string>('');
  const [numCalendarLows, setNumCalendarLows] = useState<number>(0);

  const [, setRecoilRoom] = useRecoilState(createRoomAtom);

  const handleBottomButtonClick = () => {
    if (isCheckedBox) {
      setStartTime('09:00');
      setEndTime('09:00');
    }

    setRecoilRoom((prev) => ({
      ...prev,
      dates: dates,
      startTime: isCheckedBox ? null : startTime,
      endTime: isCheckedBox ? null : endTime,
    }));

    if (isActivated) {
      navigate(`${ROUTES.ROOM_TIMER}`);
    }
  };

  useEffect(() => {
    if (dates.length !== 0 && startTime !== endTime) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [dates, startTime, endTime]);

  useEffect(() => {
    const element = document.querySelector(
      '.rmdp-day-picker div'
    ) as HTMLElement;
    if (element) {
      setNumCalendarLows(element.children.length);
    }
  });

  return (
    <MainContainer>
      <HeaderContainer>
        <RoomHeader
          index={'1/2'}
          title={'날짜와 시간대를 정해볼까요?'}
          bottomSheet={false}
        />
      </HeaderContainer>

      <Calendar dates={dates} setDates={setDates} setMonth={setMonth} />

      <TimePickerContainer numCalendarLows={numCalendarLows}>
        <TimePickerWrapper>
          <TimePicker setStartTime={setStartTime} setEndTime={setEndTime} />
        </TimePickerWrapper>
        <GreyBox />
        {isCheckedBox ? <DependingBox /> : null}
      </TimePickerContainer>
      <CheckBoxContainer numCalendarLows={numCalendarLows}>
        <Checkbox
          text="시간 조율 없이 약속 날짜만 알고 싶어요"
          value={isCheckedBox}
          setValue={setIsCheckedBox}
        />
      </CheckBoxContainer>
      <BottomButton
        text="다음"
        isActivated={isActivated}
        onClick={handleBottomButtonClick}
      />
    </MainContainer>
  );
};

export default RoomCalendar;
