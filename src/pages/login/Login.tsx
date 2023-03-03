import { useCallback, useEffect, useState } from 'react';
import { HeaderText, LoginComponent } from './Login.styles';
import useInputs from '../../hooks/useFormInput';
import uncheckedbox from '../../assets/icons/uncheckdBox.png';
import checkedBox from '../../assets/icons/checkedBox.png';
import styled from '@emotion/styled';
import loginBack from '../../assets/images/loginBack.png';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import BottomButton from '../../components/bottomButton/BottomButton';
import postRoomInfo from '../../hooks/useAPI';
import { useMutation } from 'react-query';
import axios from 'axios';

const Login = () => {
  const [uuid, setUuid] = useState<string>('');
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);

  const { form, onChange } = useInputs({
    name: '',
    password: '',
  });

  const onClickSaveUserInfo = useCallback(() => {
    setSaveUserInfo((prev) => !prev);
  }, [saveUserInfo]);

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  useEffect(() => {
    setIsPasswordError(false);
  }, [form.name, form.password]);

  const onClickNext = async () => {
    try {
      const response = await axios.post(
        `/api/room/2660d1fc-233b-414c-9f63-6f3076f4d381/login`,
        form
      );
      console.log(response.data);

      if (saveUserInfo) {
        localStorage.setItem('name', form.name);
        localStorage.setItem('uuid', uuid);
      }
    } catch {
      setIsPasswordError(true);
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
            <NameInput
              type="text"
              name="name"
              placeholder="이름 입력"
              maxLength={4}
              value={form.name}
              onChange={onChange}
              isPasswordError={isPasswordError}
            ></NameInput>
            <PasswordInput
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="4자리 비밀번호 입력"
              value={form.password}
              onChange={onChange}
              maxLength={4}
              isPasswordError={isPasswordError}
            ></PasswordInput>
          </LoginComponent>
        </InputContnainer>
        <CheckBoxContainer>
          {isPasswordError ? (
            <PasswordError>비밀번호가 일치하지 않아요</PasswordError>
          ) : (
            <div />
          )}
          <RightWrapper onClick={onClickSaveUserInfo}>
            <ImgWrapper>
              <img src={saveUserInfo ? uncheckedbox : checkedBox} />
            </ImgWrapper>
            <TextWrapper>정보 저장</TextWrapper>
          </RightWrapper>
        </CheckBoxContainer>
        {/* <Link to="/roomCalendar"> */}
        <BottomButtonContainer
          onClick={() => {
            canGoNext ? onClickNext() : null;
          }}
        >
          <BottomButton text={'다음'} isActivated={canGoNext} />
        </BottomButtonContainer>
        {/* </Link> */}
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

export default Login;
