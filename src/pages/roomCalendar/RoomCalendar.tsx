import { useState } from 'react';
import styled from '@emotion/styled';
import Calendar from '../../components/calendar/Calendar';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import theme from '../../styles/theme';
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

const RoomCalendar = () => {
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('09:00');

  const newStartTime = new Date(`1900-01-01 ${startTime}`);
  const newEndTime = new Date(`1900-01-01 ${endTime}`);

  const canGoNext = newStartTime < newEndTime;

  console.log(startTime, endTime, canGoNext);

  return (
    <MainContainer>
      <HeaderContainer>
        <RoomHeader index={'1/2'} title={'날짜와 시간대를 정해볼까요?'} />
      </HeaderContainer>
      <Calendar />
      <Line src={line} />
      <TimePickerContainer>
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
      <CheckBoxContainer>
        <Checkbox
          text="시간 조율 없이 약속 날짜만 알고 싶어요"
          value={isCheckedBox}
          setValue={setIsCheckedBox}
        />
      </CheckBoxContainer>
      <div>
        {startTime}
        {canGoNext}
        {endTime}
      </div>
      <BottomButtonContainer>
        <BottomButton text="다음" isActivated={canGoNext} />
      </BottomButtonContainer>
    </MainContainer>
  );
};

export default RoomCalendar;
