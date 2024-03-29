import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const BottomButtonContainer = styled.div<{
  isBackgroundVisible: boolean;
}>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 412px;
  ${({ isBackgroundVisible }) =>
    isBackgroundVisible &&
    css`
      background: ${theme.colors.gray01};
      border-top: 2px solid ${theme.colors.gray02};
    `};

  z-index: 100;
`;

export const Wrapper = styled.button<{
  isActivated: boolean;
  isLanding: boolean;
}>`
  width: calc(100% - 40px);
  max-width: ${({ isLanding }) => (isLanding ? '375px' : '412px')};
  height: 52px;
  margin: 0 auto;

  border-radius: 6px;

  ${theme.typography.semibold03};
  color: ${({ isActivated }) =>
    isActivated ? theme.colors.gray01 : theme.colors.gray06};
  background: ${({ isActivated }) =>
    isActivated ? theme.colors.purple06 : theme.colors.gray03};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 28px;
`;
