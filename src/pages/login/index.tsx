import { useState, useRef, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  FormContainer,
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

import { ROUTES } from '@/constants/routes';

import { usePostUserInfo } from '@/queries/auth';
import { Layout } from '@/components/commons/layout';

import loginBg from '@/assets/images/login_bg.webp';
import kakao from '@/assets/icons/kakao.svg';
import { useTokenStore } from '@/stores';

const Login = () => {
  const { roomId } = useParams() as { roomId: string };

  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  useInputScroll(inputNameRef);
  useInputScroll(inputPasswordRef);

  const { setAccessToken } = useTokenStore();

  const { form, onChangeForm } = useInputs({
    name: '',
    password: '',
  });

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const navigate = useNavigate();

  const { mutate: postLogin, error } = usePostUserInfo();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number.isNaN(Number(form.password))) {
      alert('비밀번호는 숫자만 입력해주세요');
      return;
    }

    if (canGoNext) {
      postLogin(
        {
          roomUUID: roomId,
          form: { ...form, name: form.name.trim() },
        },
        {
          onSuccess: (response) => {
            setAccessToken(response.accessToken);
            navigate(ROUTES.ADD_TIME(roomId), { replace: true });
          },
          onError: () => {
            setIsPasswordError(true);
          },
        }
      );
    }
  };

  return (
    <Layout>
      <MainContainer>
        <Logo src={loginBg} />
        <FormContainer>
          <KakaoLoginButton
            onClick={() =>
              (window.location.href = `${
                import.meta.env.VITE_OAUTH_BASE_URL ||
                import.meta.env.VITE_API_PATH
              }/oauth2/authorization/kakao?roomUuid=${roomId}`)
            }
          >
            <img src={kakao} alt="카카오 로고" />
            카카오 로그인
          </KakaoLoginButton>

          <BorderWrapper>
            <Border />
            <span>또는</span>
            <Border />
          </BorderWrapper>

          <FormWrapper onSubmit={handleFormSubmit}>
            <Input
              autoComplete="off"
              ref={inputNameRef}
              type="text"
              name="name"
              placeholder="이번 약속에서만 쓸 이름 입력"
              maxLength={5}
              value={form.name}
              onChange={onChangeForm}
              isError={!!error}
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
              {!!error && (
                <ErrorMessage>이름을 4자리 이내로 입력해 주세요</ErrorMessage>
              )}
              {isPasswordError && (
                <ErrorMessage>비밀번호가 일치하지 않아요</ErrorMessage>
              )}
            </InputWrapper>
            <LoginButton type="submit">비회원 로그인</LoginButton>
          </FormWrapper>
        </FormContainer>
      </MainContainer>
    </Layout>
  );
};

export default Login;
