import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: inline-block;

  overflow: hidden;
  color: ${theme.colors.gray6};
  ${theme.typography.system_1_medium};

  border-radius: 5.5px;
  border: 1px solid ${theme.colors.gray3};
`;

export const Top = styled.div`
  display: flex;

  height: 36px;
  border-bottom: 1px solid ${theme.colors.gray3};
`;

export const Bottom = styled.div`
  display: flex;

  width: 100%;
`;

export const Blank = styled.div`
  width: 22px;
  height: 36px;

  border-right: 1px solid ${theme.colors.gray3};
  border-bottom: 1px solid ${theme.colors.gray3};
`;

export const DateWrapper = styled.div`
  display: flex;

  height: 36px;
`;

export const Date = styled.div`
  width: 88px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray6};
  ${theme.typography.system_1_medium};

  & + & {
    border-left: 1px solid ${theme.colors.gray3};
  }
`;

export const TimeWrapper = styled.div`
  width: 22px;
  border-right: 1px solid ${theme.colors.gray3};
`;

export const Time = styled.div`
  width: 22px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray4};
  ${theme.typography.system_1_regular};

  & + & {
    border-top: 1px solid ${theme.colors.gray3};
  }
`;

export const SelectWrapper = styled.div`
  width: 88px;

  & + & {
    border-left: 1px solid ${theme.colors.gray3};
  }
`;

export const Select = styled.div<{ opacity: number }>`
  width: 88px;
  height: 19px;
  box-sizing: content-box;

  background: ${theme.colors.purple2};
  background-color: ${({ opacity }) => `rgba( 106, 123, 255,  ${opacity})`};

  &:nth-of-type(odd) {
    border-bottom: 1px dashed ${theme.colors.gray3};
  }

  &:nth-of-type(even) {
    border-bottom: 1px solid ${theme.colors.gray3};
  }

  &:first-of-type {
    padding-top: 1px;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
