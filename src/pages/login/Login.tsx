import { useCallback, useEffect, useState, useRef } from 'react';
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
  BottomButtonContainer,
} from './Login.styles';
import useInputs from '../../hooks/useFormInput';
import useInputScroll from '../../hooks/useInputScroll';
import { useNavigate, useParams } from 'react-router-dom';
import BottomButton from '../../components/bottomButton/BottomButton';

import uncheckedbox from '../../assets/icons/uncheckdBox.png';
import checkedBox from '../../assets/icons/checkedBox.png';

import { RoomTypes } from '../../types/roomInfo';
import { useGetRoomInfo } from '../../queries/room/useGetRoomInfo';
import { usePostUserInfo } from '../../queries/auth/usePostUserInfo';

import { initialRoomInfoData } from '../../assets/data/initialRoomInfoData';

const Login = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomTypes>(initialRoomInfoData);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  useInputScroll(inputNameRef);
  useInputScroll(inputPasswordRef);

  const { form, onChange } = useInputs({
    name: '',
    password: '',
  });

  const onClickSaveUserInfo = useCallback(() => {
    setSaveUserInfo((prev) => !prev);
  }, [saveUserInfo]);

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const navigate = useNavigate();

  const { data } = useGetRoomInfo(roomUUID);
  const { mutate } = usePostUserInfo();

  useEffect(() => {
    if (data) {
      setRoom(data);
    }
  }, [data]);

  const onClickNext = async () => {
    try {
      if (Number.isNaN(Number(form.password))) {
        alert('비밀번호는 숫자만 입력해주세요');
        return;
      }

      mutate({ roomUUID, form });

      if (saveUserInfo) {
        localStorage.setItem('name', form.name);
        localStorage.setItem('uuid', String(roomUUID));
      }

      localStorage.setItem('userName', form.name);
      navigate(`/add/${roomUUID}`);
    } catch {
      setIsPasswordError(true);
      null;
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <HeaderContainer>
          <HeaderText>{room.title}</HeaderText>
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
              onChange={onChange}
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
              <img src={saveUserInfo ? checkedBox : uncheckedbox} />
            </ImgWrapper>
            <TextWrapper>정보 저장</TextWrapper>
          </RightWrapper>
        </CheckBoxContainer>
        <BottomButton
          onClick={() => {
            canGoNext ? onClickNext() : null;
          }}
          text={'로그인'}
          isActivated={canGoNext}
          background={false}
        />
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
