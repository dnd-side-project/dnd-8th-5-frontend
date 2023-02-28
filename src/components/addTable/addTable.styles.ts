import styled from '@emotion/styled';
import theme from '../../styles/theme';

interface Props {
  value: string;
  selectedMethod: string;
  isValidDate: boolean;
}

export const Wrapper = styled.div`
  width: 231px;
  overflow: hidden;

  border-radius: 5.5px;
  border: 1px solid ${theme.colors.gray03};
  color: ${theme.colors.gray06};
  ${theme.typography.medium02};
`;

export const Top = styled.div`
  display: flex;
  overflow: hidden;

  width: 100%;
  height: 37px;
  border-bottom: 1px solid ${theme.colors.gray03};
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const Blank = styled.div`
  width: 17px;
  height: 36px;
  overflow: hidden;

  border-right: 1px solid ${theme.colors.gray03};
`;

export const DateWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Date = styled.div`
  width: 70px;
  height: 36px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray06};
  ${theme.typography.medium04};

  & + & {
    width: 71px;
    border-left: 1px solid ${theme.colors.gray03};
  }
`;

export const TimeWrapper = styled.div`
  width: 17px;
  overflow: hidden;

  border-right: 1px solid ${theme.colors.gray03};
`;

export const Time = styled.div`
  width: 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  color: ${theme.colors.gray04};
  ${theme.typography.regular03};

  & + & {
    height: 37px;
    border-top: 1px solid ${theme.colors.gray03};
  }
`;

export const SelectWrapper = styled.div`
  width: 70px;
  overflow: hidden;

  & + & {
    width: 71px;
    border-left: 1px solid ${theme.colors.gray03};
  }
`;

export const Select = styled.div<Props>`
  height: 17px;
  box-sizing: content-box;
  overflow: hidden;

  /* background: ${({ isValidDate }) =>
    !isValidDate && `${theme.colors.gray02}`}; */

  &:nth-of-type(odd) {
    border-bottom: 1px dashed ${theme.colors.gray03};
  }

  &:nth-of-type(even) {
    height: 18px;
    border-bottom: 1px solid ${theme.colors.gray03};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
