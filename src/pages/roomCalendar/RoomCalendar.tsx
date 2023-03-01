import styled from '@emotion/styled';
import Calendar from '../../components/calendar/Calendar';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import theme from '../../styles/theme';
import line from '../../assets/images/line.png';
import TimePicker from '../../components/timePicker/TimePicker';
import Checkbox from '../../components/checkbox/CheckBox';
import { useState } from 'react';

const RoomCalendar = () => {
  const [isCheckedBox, setIsCheckedBox] = useState(false);

  return (
    <MainContainer>
      <HeaderContainer>
        <RoomHeader index={'1/2'} title={'날짜와 시간대를 정해볼까요?'} />
      </HeaderContainer>
      <Calendar />
      <Line src={line} />
      <TimePickerContainer>
        <TimePickerWrapper>
          <TimePicker />
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
    </MainContainer>
  );
};

export const MainContainer = styled.div`
  width: 375px;
  max-width: 375px;
  position: relative;
  left: 0;
  right: 0;
  height: 812px;
  background-color: ${theme.colors.gray06};
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 78px;
  left: 20px;
`;

export const Line = styled.img`
  position: absolute;
  top: 507px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

export const TimePickerContainer = styled.div`
  position: absolute;
  top: 520px;
  left: 0px;
  z-index: 1;
`;

export const TimePickerWrapper = styled.div`
  position: absolute;
  z-index: 3;
`;

export const GreyBox = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${theme.colors.gray02};
  width: 335px;
  height: 48px;
  top: 42px;
  left: 20px;
`;

export const DependingBox = styled.div`
  position: absolute;
  z-index: 4;
  background-color: rgba(256, 256, 256, 0.6);
  width: 335px;
  left: 20px;
  height: 130px;
`;

export const CheckBoxContainer = styled.div`
  position: absolute;
  top: 659px;
  left: 20px;
  margin: 0 auto;
`;

export default RoomCalendar;
