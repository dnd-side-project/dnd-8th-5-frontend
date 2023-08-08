import { useCallback, useEffect, useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import line from '../../assets/images/line.png';
import TimePicker from '../../components/timePicker/TimePicker';
import Checkbox from '../../components/checkbox/CheckBox';
import BottomButton from '../../components/bottomButton/BottomButton';
import {
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

const RoomCalendar = () => {
  const navigate = useNavigate();

  const [isCheckedBox, setIsCheckedBox] = useState<boolean>(false);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('18:00');
  const [dates, setDates] = useState<string[]>([]);

  const [, setRecoilRoom] = useRecoilState(createRoomAtoms);

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
      navigate('/roomTimer');
    }
  };

  useEffect(() => {
    if (dates.length !== 0 && startTime !== endTime) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [dates, startTime, endTime]);

  return (
    <MainContainer>
      <HeaderContainer>
        <RoomHeader
          index={'1/2'}
          title={'날짜와 시간대를 정해볼까요?'}
          bottomSheet={false}
        />
      </HeaderContainer>

      <Calendar dates={dates} setDates={setDates} />

      <Line src={line} />
      <TimePickerContainer>
        <TimePickerWrapper>
          <TimePicker setStartTime={setStartTime} setEndTime={setEndTime} />
        </TimePickerWrapper>
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
        isActivated={isActivated}
        onClick={handleBottomButtonClick}
      />
    </MainContainer>
  );
};

export default RoomCalendar;
