import { useCallback, useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

  const { data } = useGetRoomInfo(roomUUID);
  const { mutate, isSuccess, isError } = usePostUserInfo();

  const onClickNext = () => {
    if (Number.isNaN(Number(form.password))) {
      alert('비밀번호는 숫자만 입력해주세요');
      return;
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
      }

      localStorage.setItem('userName', form.name);
      navigate(`${ROUTES.ADD_TIME}/${roomUUID}`);
    }

    if (isError) {
      setIsPasswordError(true);
    }
  }, [isSuccess, isError]);

  return (
    <MainContainer>
      <FormContainer>
        <HeaderContainer>
          <HeaderText>{data.title}</HeaderText>
        </HeaderContainer>
        <InputContnainer>
          <LoginComponent>
            <NameInput
              ref={inputNameRef}
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              maxLength={4}
              value={form.name}
              onChange={onChangeForm}
              isPasswordError={isPasswordError}
            ></NameInput>
            <PasswordInput
              ref={inputPasswordRef}
              type="password"
              pattern="[0-9]*"
              inputMode="numeric"
              name="password"
              autoComplete="current-password"
              placeholder="비밀번호 4자리를 설정하세요"
              value={form.password}
              onChange={onChangeForm}
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
              <img src={saveUserInfo ? checkedBox : uncheckedbox} />
            </ImgWrapper>
            <TextWrapper>정보 저장</TextWrapper>
          </RightWrapper>
        </CheckBoxContainer>
        <BottomButton
          onClick={onClickNext}
          text={'로그인'}
          isActivated={canGoNext}
        />
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
