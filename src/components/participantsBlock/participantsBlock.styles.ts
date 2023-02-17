import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 29px;

  border-radius: 4px;
  color: ${theme.color.purple5};
  background: ${theme.color.gray2};
  ${theme.typography.system_2_medium};
`;
