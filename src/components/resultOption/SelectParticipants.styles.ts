import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  column-gap: 6px;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 28px;
`;

export const Button = styled.div`
  width: 243px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  ${theme.typography.semibold04};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  cursor: pointer;
`;

export const ParticipantWrapper = styled.div<{ isSelected: boolean }>`
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
  width: 87px;
  margin-left: 2px;

  display: flex;
  align-items: center;

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
