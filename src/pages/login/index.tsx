import { useEffect, useState, useRef, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Sentry from '@sentry/react';

import {
  FormContainer,
  HeaderText,
  MainContainer,
  Input,
  Logo,
  FormWrapper,
  LoginButton,
  BorderWrapper,
  Border,
  KakaoLoginButton,
  ErrorMessage,
  InputWrapper,
} from './index.styles';

import useInputs from '@/hooks/useFormInput';
import useInputScroll from '@/hooks/useInputScroll';

import { ROUTES } from '@/constants/ROUTES';

import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { usePostUserInfo } from '@/queries/auth/usePostUserInfo';
import { Layout } from '@/components/commons/layout';

import loginBg from '@/assets/images/login_bg.webp';
import kakao from '@/assets/icons/kakao.svg';

const Login = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const { data: room } = useGetRoomInfo(roomUUID);

  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  useInputScroll(inputNameRef);
  useInputScroll(inputPasswordRef);

  const { form, onChangeForm } = useInputs({
    name: '',
    password: '',
  });

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const navigate = useNavigate();

  const { mutate, isSuccess, isError } = usePostUserInfo();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number.isNaN(Number(form.password))) {
      alert('비밀번호는 숫자만 입력해주세요');
      return;
    }

    if (saveUserInfo) {
      Sentry.captureMessage(`Save user info`);
      alert('비밀번호는 숫자만 입력해 주세요');
      return;
    }

    if (canGoNext) {
      mutate({ roomUUID, form: { ...form, name: form.name.trim() } });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      if (saveUserInfo) {
        localStorage.setItem('name', form.name);
        localStorage.setItem('uuid', String(roomUUID));
      }

      localStorage.setItem('userName', form.name);
      navigate(`${ROUTES.ADD_TIME}/${roomUUID}`, { replace: true });
    }

    if (isError) {
      setIsPasswordError(true);
    }
  }, [isSuccess, isError]);

  return (
    <Layout>
      <MainContainer>
        <Logo src={loginBg} />
        <FormContainer>
          <HeaderText>{room?.title?.slice(0, 15)}</HeaderText>
          <FormWrapper onSubmit={handleFormSubmit}>
            <Input
              autoComplete="off"
              ref={inputNameRef}
              type="text"
              name="name"
              placeholder="이름 입력"
              maxLength={5}
              value={form.name}
              onChange={onChangeForm}
              isError={isNameError}
            />
            <InputWrapper>
              <Input
                autoComplete="off"
                ref={inputPasswordRef}
                type="password"
                pattern="[0-9]*"
                inputMode="numeric"
                name="password"
                placeholder="4자리 비밀번호 입력"
                value={form.password}
                onChange={onChangeForm}
                maxLength={4}
                isError={isPasswordError}
              />
              {isNameError && (
                <ErrorMessage>이름을 4자리 이내로 입력해 주세요</ErrorMessage>
              )}
              {isPasswordError && (
                <ErrorMessage>비밀번호가 일치하지 않아요</ErrorMessage>
              )}
            </InputWrapper>
            <LoginButton type="submit">로그인</LoginButton>
          </FormWrapper>

          <BorderWrapper>
            <Border />
            <span>또는</span>
            <Border />
          </BorderWrapper>

          <KakaoLoginButton
            onClick={() =>
              (window.location.href = `${
                import.meta.env.VITE_API_PATH
              }/oauth2/authorization/kakao`)
            }
          >
            <img src={kakao} alt="카카오 로고" />
            카카오 로그인
          </KakaoLoginButton>
        </FormContainer>
      </MainContainer>
    </Layout>
  );
};

export default Login;
