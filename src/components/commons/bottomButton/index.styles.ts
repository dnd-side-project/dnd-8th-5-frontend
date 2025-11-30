import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const BottomButtonContainer = styled.div<{
  isBackgroundVisible: boolean;
}>`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 412px;
  height: 90px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 412px;
  padding: 14px 0 0 0;
  z-index: 3;
  ${({ isBackgroundVisible }) =>
    isBackgroundVisible &&
    css`
      background: white;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 12%);
    `};
`;

export const Wrapper = styled.button<{
  isActivated: boolean;
  isLanding: boolean;
}>`
  position: relative;
  width: calc(100% - 40px);
  max-width: ${({ isLanding }) => (isLanding ? '375px' : '462px')};
  height: 52px;
  margin: 0 auto;

  border-radius: 6px;

  ${theme.typography.medium01};
  color: ${({ isActivated }) =>
    isActivated ? theme.colors.gray01 : theme.colors.gray06};
  background: ${({ isActivated }) =>
    isActivated ? theme.colors.purple06 : theme.colors.gray03};

  display: flex;
  align-items: center;
  justify-content: center;
`;
