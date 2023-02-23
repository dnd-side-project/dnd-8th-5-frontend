import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Wrapper = styled.button`
  width: calc(100% - 40px);
  max-width: 375px;
  height: 52px;
  margin: 0 auto;

  border-radius: 6px;

  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};
  ${theme.typography.semibold03};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 28px;
`;
