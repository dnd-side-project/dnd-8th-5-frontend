import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.button<{ isActivated: boolean }>`
  width: calc(100% - 40px);
  max-width: 375px;
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
