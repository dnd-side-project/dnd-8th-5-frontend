import { useCallback, useEffect, useState, useRef, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Sentry from '@Sentry/react';

import {
  FormContainer,
  HeaderContainer,
  HeaderText,
  InputContnainer,
  LoginComponent,
  MainContainer,
  NameInput,
  PasswordInput,
  CheckBoxContainer,
  PasswordError,
  RightWrapper,
  ImgWrapper,
  TextWrapper,
} from './index.styles';
import BottomButton from '@/components/commons/bottomButton';

import useInputs from '@/hooks/useFormInput';
import useInputScroll from '@/hooks/useInputScroll';

import { ROUTES } from '@/constants/ROUTES';
import checkedBox from '@/assets/icons/checkedBox.png';
import uncheckedbox from '@/assets/icons/uncheckdBox.png';

import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { usePostUserInfo } from '@/queries/auth/usePostUserInfo';

const Login = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const { data: room } = useGetRoomInfo(roomUUID);

  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  useInputScroll(inputNameRef);
  useInputScroll(inputPasswordRef);

  const { form, onChangeForm } = useInputs({
    name: '',
    password: '',
  });

  const onClickSaveUserInfo = useCallback(() => {
    setSaveUserInfo((prev) => !prev);
  }, [saveUserInfo]);

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const navigate = useNavigate();

  const { mutate, isSuccess, isError } = usePostUserInfo();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number.isNaN(Number(form.password))) {
      alert('비밀번호는 숫자만 입력해주세요');
      Sentry.captureMessage(`Password is not a number`);
      return;
    }

    if (saveUserInfo) {
      Sentry.captureMessage(`Save user info`);
    }

    if (canGoNext) {
      mutate({ roomUUID, form });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      if (saveUserInfo) {
        localStorage.setItem('name', form.name);
        localStorage.setItem('uuid', String(roomUUID));
        Sentry.captureMessage(`Login success`);
      }

      localStorage.setItem('userName', form.name);
      navigate(`${ROUTES.ADD_TIME}/${roomUUID}`, { replace: true });
    }

    if (isError) {
      setIsPasswordError(true);
      Sentry.captureMessage(`Password error`);
    }
  }, [isSuccess, isError]);

  return (
    <MainContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <HeaderContainer>
          <HeaderText>{room?.title}</HeaderText>
        </HeaderContainer>
        <InputContnainer>
          <LoginComponent>
            <NameInput
              autoComplete="off"
              ref={inputNameRef}
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              maxLength={4}
              value={form.name}
              onChange={onChangeForm}
              isPasswordError={isPasswordError}
            />
            <PasswordInput
              autoComplete="off"
              ref={inputPasswordRef}
              type="password"
              pattern="[0-9]*"
              inputMode="numeric"
              name="password"
              placeholder="비밀번호 4자리를 설정하세요"
              value={form.password}
              onChange={onChangeForm}
              maxLength={4}
              isPasswordError={isPasswordError}
            />
          </LoginComponent>
        </InputContnainer>
        <CheckBoxContainer>
          {isPasswordError ? (
            <PasswordError>비밀번호가 일치하지 않아요</PasswordError>
          ) : (
            <div />
          )}
          <RightWrapper
            id="save-user-info-button"
            onClick={onClickSaveUserInfo}
          >
            <ImgWrapper>
              <img src={saveUserInfo ? checkedBox : uncheckedbox} />
            </ImgWrapper>
            <TextWrapper>정보 저장</TextWrapper>
          </RightWrapper>
        </CheckBoxContainer>
        <BottomButton
          id="login-button"
          type="submit"
          text={'로그인'}
          isActivated={canGoNext}
        />
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
