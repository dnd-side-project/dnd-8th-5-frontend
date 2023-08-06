import { useCallback, useEffect, useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import line from '../../assets/images/line.png';
import TimePicker from '../../components/timePicker/TimePicker';
import Checkbox from '../../components/checkbox/CheckBox';
import BottomButton from '../../components/bottomButton/BottomButton';
import {
  BottomButtonContainer,
  CheckBoxContainer,
  DependingBox,
  Line,
  GreyBox,
  HeaderContainer,
  MainContainer,
  TimePickerContainer,
  TimePickerWrapper,
} from './RoomCalendar.styles';
import { useRecoilState } from 'recoil';
import { createRoomAtoms } from '../../atoms/createRoomAtoms';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/ROUTES';

const RoomCalendar = () => {
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('18:00');
  const [dates, setDates] = useState<string[]>([]);
  const [month, setMonth] = useState<string>('');
  const [weekLow, setWeekLow] = useState<number>(0);

  const [recoilRoom, setRecoilRoom] = useRecoilState(createRoomAtoms);

  const naviate = useNavigate();

  const handleNextClick = useCallback(async () => {
    if (isCheckedBox) {
      setStartTime('09:00');
      setEndTime('09:00');
    }

    setRecoilRoom((prev) => {
      return {
        ...prev,
        ['dates']: dates,
        ['startTime']: isCheckedBox ? null : startTime,
        ['endTime']: isCheckedBox ? null : endTime,
      };
    });

    naviate(`${ROUTES.ROOM_TIMER}`);
  }, [recoilRoom, startTime, endTime, dates, isCheckedBox]);

  useEffect(() => {
    const element = document.querySelector(
      '.rmdp-day-picker div'
    ) as HTMLElement;
    if (element) {
      setWeekLow(element.children.length);
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

      <TimePickerContainer weekLow={weekLow}>
        <TimePickerWrapper>
          <TimePicker
            startTime={startTime}
            endTime={endTime}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
        </TimePickerWrapper>
        <GreyBox />
        {isCheckedBox ? <DependingBox /> : null}
      </TimePickerContainer>
      <CheckBoxContainer weekLow={weekLow}>
        <Checkbox
          text="시간 조율 없이 약속 날짜만 알고 싶어요"
          value={isCheckedBox}
          setValue={setIsCheckedBox}
        />
      </CheckBoxContainer>
      <BottomButton
        onClick={handleNextClick}
        text="다음"
        isActivated={dates.length !== 0}
      />
    </MainContainer>
  );
};

export default RoomCalendar;
