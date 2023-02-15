import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Timer = () => {
  return (
    <Wrapper>
      <Span>일정 등록 기간이</Span>
      <Time>2일 02:47:31</Time>
      <Span>남았어요</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 4px 6px;

  background: #fdf2ee;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  color: #fb7547;
  ${theme.typography.system_1_regular}
`;

const Time = styled.span`
  margin: 0 10px;
  color: #fb7547;
  ${theme.typography.system_2_semibold}
`;
export default Timer;
