import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 116px;
  height: 30px;
  border-radius: 43px;
  margin-right: 9px;
  overflow: visible;

  background: ${theme.colors.gray02};
  ${theme.typography.semibold04};

  display: flex;
  align-items: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ActiveButton = styled.div<{ selectedMethod: string }>`
  width: 60px;
  height: 30px;
  border-radius: 43px;
  background: ${theme.colors.gray01};

  display: flex;
  align-items: center;
  justify-content: center;

  filter: ${({ selectedMethod }) =>
    selectedMethod === 'possible'
      ? `drop-shadow(0px 0px 13px rgba(106, 123, 255, 0.26))`
      : `drop-shadow(0px 0px 13px rgba(117, 40, 15, 0.26))`};

  backface-visibility: hidden;
  transform: translateZ(0);
`;

export const ActiveText = styled.span<{
  value: string;
  selectedMethod: string;
}>`
  color: ${({ selectedMethod }) =>
    selectedMethod === 'possible'
      ? ` ${theme.colors.purple06}`
      : ` ${theme.colors.orange02}`};
`;

export const InactiveButton = styled.div<{ selectedMethod: string }>`
  width: 56px;
  height: 30px;

  padding-left: ${({ selectedMethod }) =>
    selectedMethod === 'possible' ? '5px' : '16px'};

  display: flex;
  align-items: center;
`;

export const InActiveText = styled.span<{ value: string }>`
  color: ${theme.colors.gray04};
`;
