import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Wrapper = styled.button`
  width: 90%;
  max-width: 335px;

  height: 52px;
  border-radius: 6px;
  margin: 0 auto;

  color: ${theme.colors.gray1};
  background: ${theme.colors.purple5};
  ${theme.typography.system_2_semibold};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 40px;
`;
