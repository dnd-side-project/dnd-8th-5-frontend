import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { participant } from '../../types/roomInfo';

export const Wrapper = styled.div<participant>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 29px;

  border-radius: 4px;
  background: ${theme.colors.gray2};
  ${theme.typography.system_2_medium};

  color: ${({ participant }) =>
    participant === '?' ? `${theme.colors.gray4}` : `${theme.colors.purple5}`};

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
