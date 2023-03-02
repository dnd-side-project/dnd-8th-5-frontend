import { useState } from 'react';
import Current from '../timePicker/TimePicker';
import './setTimer.css';
import {
  MainContainer,
  StyledSlider,
  TextContainer,
  TimeText,
  GreyBox,
} from './SetTimer.styles';

interface SetTimer {
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  setMinute: React.Dispatch<React.SetStateAction<string>>;
}

const SetTimer = ({ setDay, setHour, setMinute }: SetTimer) => {
  const DAY_ARRAY = ['0', '1', '2', '3', '4', '5'];
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
      <StyledSlider {...settings('date')}>
        {DAY_ARRAY.map((value: string) => {
          return (
            <div key={value}>
              <TimeText>{value}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>일</TextContainer>
      <StyledSlider {...settings('hour')}>
        {HOUR_ARRAY.map((value: string) => {
          return (
            <div key={value}>
              <TimeText>{value}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>시간</TextContainer>
      <StyledSlider {...settings('minute')}>
        {MINUTE_ARRAY.map((value: string) => {
          return (
            <div key={value}>
              <TimeText>{value}</TimeText>
            </div>
          );
        })}
      </StyledSlider>
      <TextContainer>분</TextContainer>
    </MainContainer>
  );
};

export default SetTimer;
