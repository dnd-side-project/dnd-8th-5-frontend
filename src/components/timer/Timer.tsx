import { Span, Time, Wrapper } from './Timer.styles';

const Timer = () => {
  return (
    <Wrapper>
      <Span>일정 등록 기간이</Span>
      <Time>2일 02:47:31</Time>
      <Span>남았어요</Span>
    </Wrapper>
  );
};

export default Timer;
