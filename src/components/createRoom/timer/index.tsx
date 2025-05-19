import { getRange } from '@/utils/getRange';
import {
  MainContainer,
  StyledSlider,
  TextContainer,
  TimeText,
  GreyBox,
  SliderWrapper,
} from './index.styles';
import { useSetRecoilState } from 'recoil';
import { createRoomAtom } from '@/atoms/createRoomAtom';

interface SetTimer {
  day: number;
  hour: number;
  minute: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  setMinute: React.Dispatch<React.SetStateAction<number>>;
}

const Timer = ({ day, hour, minute, setDay, setHour, setMinute }: SetTimer) => {
  const setRecoilRoom = useSetRecoilState(createRoomAtom);

  const DAY_ARRAY = getRange(0, 6);
  const HOUR_ARRAY = getRange(0, 24);
  const MINUTE_ARRAY = getRange(0, 6, 10);

  const settings = (startEnd: string) => {
    const setting = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      afterChange: function (currentSlide: number) {
        if (startEnd === 'date') {
          setDay(DAY_ARRAY[currentSlide]);
        } else if (startEnd === 'hour') {
          setHour(HOUR_ARRAY[currentSlide]);
        } else if (startEnd === 'minute') {
          setMinute(MINUTE_ARRAY[currentSlide]);
        }
        setRecoilRoom((prev) => ({
          ...prev,
          timerType: 'dial',
        }));
      },
      centerMode: true,
      arrows: false,
      vertical: true,
      swipe: true,
      verticalSwiping: true,
      centerPadding: '7px',
      touchThreshold: 100,
      focusOnSelect: true,
      useTransform: false,
      transformEnabled: false,
      cssEase: 'ease-out',
      slide: '.slider-pic',
      edgeFriction: 0,
      focusOnChange: true,
      touchMove: true,
    };

    return setting;
  };

  return (
    <MainContainer>
      <GreyBox />
      <SliderWrapper>
        <StyledSlider {...settings('date')}>
          {DAY_ARRAY.map((value: number) => {
            return (
              <div key={value}>
                <TimeText>{value}</TimeText>
              </div>
            );
          })}
        </StyledSlider>
        <TextContainer>일</TextContainer>
      </SliderWrapper>

      <SliderWrapper>
        <StyledSlider {...settings('hour')}>
          {HOUR_ARRAY.map((value: number) => {
            return (
              <div key={value}>
                <TimeText>{value}</TimeText>
              </div>
            );
          })}
        </StyledSlider>
        <TextContainer>시간</TextContainer>
      </SliderWrapper>

      <SliderWrapper>
        <StyledSlider {...settings('minute')}>
          {MINUTE_ARRAY.map((value: number) => {
            return (
              <div key={value}>
                <TimeText>{value}</TimeText>
              </div>
            );
          })}
        </StyledSlider>
        <TextContainer>분</TextContainer>
      </SliderWrapper>
    </MainContainer>
  );
};

export default Timer;
