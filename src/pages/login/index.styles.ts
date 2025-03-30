import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${theme.colors.purple05};
  overflow: auto;
  overscroll-behavior: none;
`;

export const Logo = styled.img`
  width: 100%;
  height: 352px;
  object-fit: cover;
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 412px;
  padding: 32px 20px 40px 20px;
  background: white;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px 0 0 0;
  gap: 8px;
  ${theme.typography.medium02}
  &::placeholder {
    color: ${theme.colors.gray04};
  }
`;

export const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Pretendard';
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 6px;
  outline: none;
  border: 1px solid
    ${({ isError = false }) =>
      isError ? theme.colors.orange02 : theme.colors.gray04};

  &::placeholder {
    color: ${theme.colors.gray03};
  }
  &:focus {
    border: 1px solid ${theme.colors.purple04};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -22px;
  left: 0;
  ${theme.typography.medium04}
  color: ${theme.colors.orange02};
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  border-radius: 6px;
  color: white;
  background: ${theme.colors.purple06};
  ${theme.typography.medium02}
  cursor: pointer;
`;

export const BorderWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 24px 0;
  span {
    flex-shrink: 0;
    ${theme.typography.medium05}
    color: ${theme.colors.gray05};
  }
`;

export const Border = styled.div`
  display: flex;
  flex: 1;
  height: 1px;
  background: ${theme.colors.gray03};
`;

export const KakaoLoginButton = styled.button`
  position: relative;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #fee502;
  color: ${theme.colors.gray08};
  ${theme.typography.medium02};

  img {
    position: absolute;
    left: 18px;
  }
`;
