import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { getCountdown } from '@/utils/getCountdown';
import { Span, TextWrapper, Time, Wrapper } from './Timer.styles';

export interface TimerTypes {
  deadLine: string;
}

const Timer = ({ deadLine }: TimerTypes) => {
  const [isTimeExpired, setIsTimeExpired] = useState<boolean>(false);

  const targetDate = dayjs(deadLine).format('YYYY-MM-DD HH:mm:00');
  const { days, hours, minutes, seconds } = getCountdown(targetDate);

  useEffect(() => {
    if (!isTimeExpired) {
      const now = dayjs();
      const end = dayjs(deadLine);

      if (end.diff(now) < 1000) {
        setIsTimeExpired(true);
      }
    }
  }, [seconds, isTimeExpired]);

  return (
    <Wrapper>
      {isTimeExpired ? (
        '일정 등록 기간이 종료됐어요 !'
      ) : (
        <TextWrapper isTimerExpired={isTimeExpired}>
          <Span>일정 등록 기간이</Span>
          <Time>{`${days}일 ${hours}:${minutes}:${seconds}`}</Time>
          <Span>남았어요</Span>
        </TextWrapper>
      )}
    </Wrapper>
  );
};

export default Timer;
