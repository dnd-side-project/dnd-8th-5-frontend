import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 32px;
  padding: 4px 0;

  background: ${theme.colors.orange01};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 291px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: ${theme.colors.orange03};
  ${theme.typography.regular01};
`;

export const Time = styled.span`
  color: ${theme.colors.orange03};
  ${theme.typography.semibold03};
`;
