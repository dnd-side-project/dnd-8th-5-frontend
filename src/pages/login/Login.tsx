import { useState } from 'react';
import { HeaderText, LoginComponent } from './Login.styles';
import useInputs from '../../hooks/useFormInput';
import uncheckedbox from '../../assets/icons/uncheckdBox.png';
import checkedBox from '../../assets/icons/checkedBox.png';
import styled from '@emotion/styled';
import loginBack from '../../assets/images/loginBack.png';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import BottomButton from '../../components/bottomButton/BottomButton';

const Login = () => {
  const [uuid, setUuid] = useState<string>('');
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);

  const { form, onChange, reset } = useInputs({
    name: '',
    password: '',
  });

  const onClickSaveUserInfo = () => {
    setSaveUserInfo((prev) => !prev);
  };

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const onClickNext = () => {
    if (saveUserInfo) {
      localStorage.setItem('name', form.name);
      localStorage.setItem('uuid', uuid);
    }

    try {
      null;
    } catch {
      null;
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <HeaderContainer>
          <HeaderText>{title}</HeaderText>
        </HeaderContainer>
        <InputContnainer>
          <LoginComponent>
            <Input
              type="text"
              name="name"
              placeholder="이름 입력"
              maxLength={4}
              value={form.name}
              onChange={onChange}
            ></Input>
            <Input
              type="password"
              name="password"
              placeholder="4자리 비밀번호 입력"
              value={form.password}
              onChange={onChange}
              maxLength={4}
            ></Input>
          </LoginComponent>
        </InputContnainer>
        <CheckBoxContainer
          onClick={() => {
            canGoNext ? onClickSaveUserInfo : null;
          }}
        >
          <ImgWrapper>
            <img src={saveUserInfo ? uncheckedbox : checkedBox} />
          </ImgWrapper>
          <TextWrapper>정보 저장</TextWrapper>
        </CheckBoxContainer>
        <Link to="/roomCalendar">
          <BottomButtonContainer onClick={onClickNext}>
            <BottomButton text={'다음'} isActivated={canGoNext} />
          </BottomButtonContainer>
        </Link>
      </FormContainer>
    </MainContainer>
  );
};

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

export const Input = styled.input`
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

export const CheckBoxContainer = styled.div`
  position: absolute;
  display: flex;
  ${theme.typography.medium04}
  top: 197px;
  right: 20px;
`;

export const ImgWrapper = styled.div``;

export const TextWrapper = styled.div`
  padding-left: 6px;
`;

export const BottomButtonContainer = styled.div``;

export default Login;
