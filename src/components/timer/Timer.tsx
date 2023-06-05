import { TimerTypes } from '../../types/roomInfo';
import { getCountdown } from '../../utils/getCountdown';
import { Span, TextWrapper, Time, Wrapper } from './Timer.styles';

const Timer = ({ deadLine, isTimeExpired }: TimerTypes) => {
  const targetDate = new Date(deadLine);
  const { days, hours, minutes, seconds } = getCountdown(targetDate);

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
