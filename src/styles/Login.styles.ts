import styled from '@emotion/styled';
import theme from '../styles/theme';

export const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  ${theme.typography.system_0_semibold}
`;

export const Input = styled.input`
  width: 335px;
  height: 50px;
  margin-bottom: 10px;

  :focus {
    outline: none;
    border: 1px solid ${theme.colors.purple5};
  }
`;
