import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { SelectType } from '../tableArea/index.types';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 32px 0;
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  padding: 8px 0 16px 0;
  background: ${theme.colors.gray01};
  z-index: 1;
`;

export const ScrollWrapper = styled.div`
  height: 100%;
  padding: 0 0 100px 0;
  overflow: auto;
  overscroll-behavior: none;
`;

export const TableWrapper = styled.div`
  display: flex;
  padding: 44px 0 0 0;
`;

export const Date = styled.div`
  width: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray06};
  ${theme.typography.regular02};
  user-select: none;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  touch-action: none;
  overscroll-behavior: contain;
`;

export const Column = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;

  .mpr-designer-selection {
    border: none !important;
    background: none !important;
  }
`;

export const Select = styled.div<SelectType>`
  height: 28px;
  box-sizing: content-box;

  background: ${theme.colors.tableBackground};
  opacity: ${({ isValidDate }) => (isValidDate ? 1 : 0.45)};

  &.selected {
    background-color: ${({ selectedMethod }) =>
      selectedMethod === 'possible'
        ? `${theme.colors.purple06}`
        : `${theme.colors.orange02}`};
  }

  &:nth-of-type(even) {
    border-radius: 8px 8px 0 0;
    border-bottom: 1px dashed ${theme.colors.gray03};
  }

  &:nth-of-type(odd) {
    border-radius: 0 0 8px 8px;
    margin: 0 0 4px 0;
  }
`;

export const Divider = styled.div`
  display: flex;
  width: 1px;
  background: ${theme.colors.gray025};
  margin: 0px 32px 0 24px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 12px 0 0;
`;

export const Time = styled.div`
  width: 48px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: ${theme.colors.gray06};
  ${theme.typography.regular02};

  & + & {
    margin: 4px 0 0 0;
  }
`;
