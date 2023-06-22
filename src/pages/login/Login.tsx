import { useCallback, useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import BottomButton from '../../components/bottomButton/BottomButton';
import { API } from '../../utils/API';

import uncheckedbox from '../../assets/icons/uncheckdBox.png';
import checkedBox from '../../assets/icons/checkedBox.png';

import { RoomTypes } from '../../types/roomInfo';

const Login = () => {
  const { roomUUID } = useParams();
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: null,
    headCount: 0,
    participants: [''],
    dates: [''],
    startTime: null,
    endTime: null,
  });

  const { form, onChange } = useInputs({
    name: '',
    password: '',
  });

  const onClickSaveUserInfo = useCallback(() => {
    setSaveUserInfo((prev) => !prev);
  }, [saveUserInfo]);

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const navigate = useNavigate();

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };
    getRoomInfo();
    setIsPasswordError(false);
  }, [form.name, form.password]);

  const onClickNext = async () => {
    try {
      if (Number.isNaN(Number(form.password))) {
        alert('비밀번호는 숫자만 입력해주세요');
        return;
      }
      await API.post(`/api/room/${roomUUID}/login`, form);

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
              <img src={saveUserInfo ? checkedBox : uncheckedbox} />
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
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
