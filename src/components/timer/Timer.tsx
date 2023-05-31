import dayjs from 'dayjs';
import { deadLine } from '../../types/roomInfo';
import { getCountdown } from '../../utils/getCountdown';
import { Span, TextWrapper, Time, Wrapper } from './Timer.styles';
import { useState } from 'react';

const Timer = ({ deadLine }: deadLine) => {
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);

  const targetDate = new Date(deadLine);
  const [days, hours, minutes, seconds] = getCountdown(targetDate);

  return (
    <Wrapper>
      <TextWrapper isTimerExpired={isTimerExpired}>
        {isTimerExpired ? (
          <Span>일정 등록 기간이 종료됐어요!</Span>
        ) : (
          <>
            <Span>일정 등록 기간이</Span>
            <Time>{`${days}일 ${hours}:${minutes}:${seconds}`}</Time>
            <Span>남았어요</Span>
          </>
        )}
      </TextWrapper>
    </Wrapper>
  );
};

export default Timer;
