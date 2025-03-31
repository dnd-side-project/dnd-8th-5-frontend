import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${theme.colors.purple05};
  overflow: auto;
`;

export const Logo = styled.img`
  width: 100%;
  height: 352px;
  object-fit: cover;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  border-radius: 10px 10px 0 0;
  padding: 32px 20px 124px 20px;
`;

export const HeaderText = styled.div`
  ${theme.typography.semibold01}
  margin: 0 0 16px 0;
`;

export const LoginComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NameInput = styled.input<{ isPasswordError: boolean }>`
  width: 100%;
  height: 50px;
  border: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  &::placeholder {
    color: ${theme.colors.gray03};
  }
  &:focus {
    border: 1px solid ${theme.colors.purple04};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  :focus {
    outline: none;
    border: 1px solid ${theme.colors.purple05};
  }
`;

export const PasswordInput = styled.input<{ isPasswordError: boolean }>`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${(props) => (props.isPasswordError ? '#ED7C55' : theme.colors.gray04)};
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  outline: none;
  &::placeholder {
    color: ${theme.colors.gray03};
  }
  &:focus {
    border: 1px solid ${theme.colors.purple04};
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${theme.typography.medium04}
  width: 100%;
`;

export const RightWrapper = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div``;

export const TextWrapper = styled.div`
  padding-left: 6px;
`;

export const PasswordError = styled.div`
  ${theme.typography.medium04}
  color: #ed7c55;
  padding-left: 40px;
`;
