import styled from '@emotion/styled';

export const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  font-family: 'Pretendard Semibold';
  font-weight: 600;
  font-display: swap;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 335px;
  height: 50px;
  margin-bottom: 10px;

  :focus {
    outline: none;
    border: 1px solid #6a7bff;
  }
`;
