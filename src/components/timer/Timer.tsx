import { Countdown } from '../../utils/getCountdown';
import { Span, TextWrapper, Time, Wrapper } from './Timer.styles';

interface dprops {
  deadLine: string;
}

const Timer = ({ deadLine }: dprops) => {
  const targetDate = new Date(deadLine);

  const [days, hours, minutes, seconds] = Countdown(targetDate);

  return (
    <Wrapper>
      <TextWrapper>
        <Span>일정 등록 기간이</Span>
        <Time>{`${days}일 ${hours}:${minutes}:${seconds}`}</Time>
        <Span>남았어요</Span>
      </TextWrapper>
    </Wrapper>
  );
};

export default Timer;
