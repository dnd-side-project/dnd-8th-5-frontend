import { useState } from 'react';
import './timePicker.css';
import {
  MainContainer,
  StyledSlider,
  TextContainer,
  TimeText,
} from './TimePicker.styles';

interface Current {
  startTime: string;
  endTime: string;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
}

const Current = ({ startTime, endTime, setStartTime, setEndTime }: Current) => {
  const TIME_ARRAY = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
  ];

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
          setStartTime(TIME_ARRAY[currentSlide]);
        } else {
          console.log(currentSlide);
          setEndTime(TIME_ARRAY[currentSlide]);
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
      <StyledSlider {...settings('start')}>
        {TIME_ARRAY.map((time: string) => {
          return (
            <div key={time}>
              <TimeText>{time}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>부터</TextContainer>
      <StyledSlider {...settings('end')}>
        {TIME_ARRAY.map((time: string) => {
          return (
            <div key={time}>
              <TimeText>{time}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>까지</TextContainer>
    </MainContainer>
  );
};

export default Current;
