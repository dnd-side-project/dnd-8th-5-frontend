import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 4px 0;

  color: ${theme.colors.orange03};
  background: ${theme.colors.orange01};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 0 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  ${theme.typography.regular02};
`;

export const Time = styled.span`
  ${theme.typography.semibold03};
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;
