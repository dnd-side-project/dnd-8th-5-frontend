import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { participant } from '@/types/roomInfo';

export const Wrapper = styled.div<participant>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 29px;

  border-radius: 4px;
  background: ${theme.colors.gray02};
  ${theme.typography.semibold06};

  color: ${({ participant }) =>
    participant === '?'
      ? `${theme.colors.gray04}`
      : `${theme.colors.purple06}`};

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
