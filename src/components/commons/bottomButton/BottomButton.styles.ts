import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  width: 90%;
  height: 52px;
  border-radius: 6px;
  margin: 0 auto;

  color: ${theme.colors.gray1};
  background: ${theme.colors.purple5};
  ${theme.typography.system_2_semibold};

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  bottom: 38px;
  z-index: 2;
`;
