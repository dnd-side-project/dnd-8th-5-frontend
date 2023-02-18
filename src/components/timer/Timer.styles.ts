import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 4px 31.5px;

  background: #fdf2ee;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 270px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: #fb7547;
  ${theme.typography.system_1_regular}
`;

export const Time = styled.span`
  margin: 0 10px;
  color: #fb7547;
  ${theme.typography.system_2_semibold}
`;
