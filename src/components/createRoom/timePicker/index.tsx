import { useRecoilValue } from 'recoil';
import './index.css';
import {
  MainContainer,
  StyledSlider,
  TextContainer,
  TimerWrapper,
  TimeText,
} from './index.styles';
import { getTimeRangeInTimePicker } from '@/utils/getRange';
import { createRoomAtom } from '@/atoms/createRoomAtom';

interface Current {
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

const TimePicker = ({ setStartTime, setEndTime }: Current) => {
  const recoilRoom = useRecoilValue(createRoomAtom);

  const START_TIME_ARRAY = getTimeRangeInTimePicker(
    recoilRoom.startTime ?? '09:00'
  );
  const END_TIME_ARRAY = getTimeRangeInTimePicker(
    recoilRoom.endTime ?? '18:00'
  );

  const settings = (startEnd: string) => {
    const setting = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      afterChange: function (currentSlide: number) {
        if (startEnd === 'start') {
          setStartTime(START_TIME_ARRAY[currentSlide]);
        } else {
          setEndTime(END_TIME_ARRAY[currentSlide]);
        }
      },
      centerMode: true,
      arrows: false,
      vertical: true,
      swipe: true,
      verticalSwiping: true,
      useTransform: false,
      centerPadding: '7px',
      touchThreshold: 100,
      cssEase: 'linear',
      focusOnSelect: true,
    };

    return setting;
  };

  return (
    <MainContainer>
      <TimerWrapper>
        <StyledSlider {...settings('start')}>
          {START_TIME_ARRAY.map((time: string) => (
            <TimeText key={time}>{time}</TimeText>
          ))}
        </StyledSlider>
        <TextContainer>부터</TextContainer>
      </TimerWrapper>

      <TimerWrapper>
        <StyledSlider {...settings('end')}>
          {END_TIME_ARRAY.map((time: string) => (
            <TimeText key={time}>{time}</TimeText>
          ))}
        </StyledSlider>
        <TextContainer>까지</TextContainer>
      </TimerWrapper>
    </MainContainer>
  );
};

export default TimePicker;
