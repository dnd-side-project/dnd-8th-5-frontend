import styled from '@emotion/styled';
import theme from '../../styles/theme';
import loginBack from '../../assets/images/loginBack.png';

export const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  ${theme.typography.semibold01}
`;

export const Input = styled.input`
  width: 335px;
  height: 50px;
  margin-bottom: 10px;

  :focus {
    outline: none;
    border: 1px solid ${theme.colors.purple05};
  }
`;

export const MainContainer = styled.div`
  width: 375px;
  max-width: 375px;
  position: relative;
  left: 0;
  right: 0;
  height: 812px;
  background-image: url(${loginBack});
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  width: 375px;
  max-width: 375px;
  height: 405px;
  position: absolute;
  /* top: 359px; */
  bottom: 0px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-left: 21px;
  padding-top: 10px;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 25px;
`;

export const InputContnainer = styled.div`
  position: absolute;
  top: 77px;
  width: 335px;
  height: 79px;
`;

export const NameInput = styled.input<{ isPasswordError: boolean }>`
  width: 335px;
  height: 50px;
  border: 1px solid ${theme.colors.gray04};
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

export const PasswordInput = styled.input<{ isPasswordError: boolean }>`
  width: 335px;
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
  position: absolute;
  display: flex;
  justify-content: space-between;
  ${theme.typography.medium04}
  top: 197px;
  width: 335px;
`;

export const RightWrapper = styled.div`
  display: flex;
  /* position: absolute;
  right: 0px; */
`;

export const ImgWrapper = styled.div``;

export const TextWrapper = styled.div`
  padding-left: 6px;
`;

export const PasswordError = styled.div`
  /* position: absolute; */
  ${theme.typography.medium04}
  /* left: 0px; */
  color: #ed7c55;
`;

export const BottomButtonContainer = styled.div``;