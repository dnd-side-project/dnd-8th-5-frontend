import { useCallback, useState } from 'react';
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
import { recoilRoomAtoms } from '../../atoms/recoilRoomAtoms';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const RoomCalendar = () => {
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('18:00');
  const [dates, setDates] = useState<string[]>([]);

  const [recoilRoom, setRecoilRoom] = useRecoilState(recoilRoomAtoms);

  const onSetRecoilState = useCallback(() => {
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
  }, [recoilRoom, startTime, endTime, dates, isCheckedBox]);

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
      <Link to="/roomTimer">
        <BottomButton
          onClick={onSetRecoilState}
          text="다음"
          isActivated={true}
          background={false}
        />
      </Link>
    </MainContainer>
  );
};

export default RoomCalendar;
