import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const Bottom = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 28px;
`;

export const Button = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  border-radius: 6px;
  ${theme.typography.semibold04};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  cursor: pointer;
`;

export const ParticipantBlock = styled.div<{ isSelected: boolean }>`
  height: 36px;
  padding: 8px 20px;
  border-radius: 38px;
  ${theme.typography.medium04};
  cursor: pointer;

  border: 1px solid ${theme.colors.gray03};
  color: ${theme.colors.gray06};
  background: ${theme.colors.gray01};

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.colors.gray01};
      color: ${theme.colors.gray01};
      background: ${theme.colors.purple06};
    `}
`;

export const Refresh = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
`;

export const RefreshIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 2px;
`;

export const RefreshButton = styled.div`
  ${theme.typography.semibold04}
  color: ${theme.colors.gray06};
`;
