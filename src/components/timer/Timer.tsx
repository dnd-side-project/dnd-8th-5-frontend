import { useEffect, useState } from 'react';
import { Span, Time, Wrapper } from './Timer.styles';

const Timer = () => {
  const deadLine = new Date('2023-02-22 18:00:00');
  const now = new Date();

  console.log(deadLine, now);

  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(30);

  // useEffect(() => {
  //   const countdown = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(countdown);
  //       } else {
  //         setMinutes(minutes - 1);
  //         setSeconds(59);
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(countdown);
  // }, [minutes, seconds]);

  return (
    <Wrapper>
      <Span>일정 등록 기간이</Span>
      <Time>{`2일 02:0${minutes}:${seconds}`}</Time>
      <Span>남았어요</Span>
    </Wrapper>
  );
};

export default Timer;
