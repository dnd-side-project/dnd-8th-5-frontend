import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  display: inline-block;
  margin-bottom: 60px;

  overflow: hidden;
  color: ${theme.colors.gray06};
  ${theme.typography.medium02};

  border-radius: 5.5px;
  border: 1px solid ${theme.colors.currentTableBorder};
`;

export const Top = styled.div`
  display: flex;

  height: 36px;
  border-bottom: 1px solid ${theme.colors.currentTableBorder};

  overflow: hidden;
`;

export const Bottom = styled.div`
  display: flex;

  width: 100%;
`;

export const Blank = styled.div`
  width: 22px;
  height: 36px;

  border-right: 1px solid ${theme.colors.currentTableBorder};
  border-bottom: 1px solid ${theme.colors.currentTableBorder};
`;

export const DateWrapper = styled.div`
  display: flex;

  height: 36px;
`;

export const Date = styled.div<{ isBlank: boolean }>`
  width: 88px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray06};
  ${theme.typography.medium02};
  overflow: hidden;

  background: ${({ isBlank }) =>
    isBlank ? theme.colors.gray02 : theme.colors.gray01};

  border-left: 1px solid ${theme.colors.currentTableBorder};

  &:first-of-type {
    border-left: none;
  }
`;

export const TimeWrapper = styled.div`
  width: 22px;
  border-right: 1px solid ${theme.colors.currentTableBorder};
`;

export const Time = styled.div`
  width: 22px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray04};
  ${theme.typography.regular02};

  & + & {
    border-top: 1px solid ${theme.colors.currentTableBorder};
  }
`;

export const SelectWrapper = styled.div`
  width: 88px;

  & + & {
    border-left: 1px solid ${theme.colors.currentTableBorder};
  }
`;

export const Select = styled.div<{ count: number; total: number }>`
  width: 88px;
  height: 19px;
  box-sizing: content-box;

  background-color: ${({ count, total }) =>
    count === -1
      ? theme.colors.gray02
      : total === 0
      ? 0
      : `rgba( 106, 123, 255,  ${count / total})`};

  &:nth-of-type(odd) {
    border-bottom: 1px dashed ${theme.colors.currentTableBorder};
  }

  &:nth-of-type(even) {
    border-bottom: 1px solid ${theme.colors.currentTableBorder};
  }

  &:first-of-type {
    padding-top: 1px;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
