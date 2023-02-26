import { useState } from 'react';
import './timer.css';
import {
  MainContainer,
  StyledSlider,
  TextContainer,
  TimeText,
  GreyBox,
} from './Timer.styles';

const Current = () => {
  const [day, setDay] = useState('09:00');
  const [hour, setHour] = useState('09:00');
  const [minute, setMinute] = useState('09:00');

  const DAY_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const HOUR_ARRAY = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const MINUTE_ARRAY = ['0', '10', '20', '30', '40', '50'];

  const settings = (startEnd: string) => {
    const setting = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 5,
      swipeToSlide: true,
      beforeChange: function (currentSlide: number) {
        if (startEnd === 'date') {
          setDay(DAY_ARRAY[currentSlide + 1]);
        } else if (startEnd === 'hour') {
          setHour(HOUR_ARRAY[currentSlide + 1]);
        } else if (startEnd === 'minute') {
          setMinute(MINUTE_ARRAY[currentSlide + 1]);
        }
      },
      centerMode: true,
      arrows: false,
      vertical: true,
      swipe: true,
      verticalSwiping: true,
      useTransform: false,
      centerPadding: '8px',
      touchThreshold: 100,
      cssEase: 'linear',
      focusOnSelect: true,
    };

    return setting;
  };

  return (
    <MainContainer>
      <GreyBox />
      <StyledSlider {...settings('start')}>
        {DAY_ARRAY.map((time: string) => {
          return (
            <div key={time}>
              <TimeText>{time}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>일</TextContainer>
      <StyledSlider {...settings('start')}>
        {HOUR_ARRAY.map((time: string) => {
          return (
            <div key={time}>
              <TimeText>{time}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>시간</TextContainer>
      <StyledSlider {...settings('end')}>
        {MINUTE_ARRAY.map((time: string) => {
          return (
            <div key={time}>
              <TimeText>{time}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>분</TextContainer>
    </MainContainer>
  );
};

export default Current;