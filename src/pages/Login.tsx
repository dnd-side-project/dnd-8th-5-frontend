import theme from '../styles/theme';
import React, { useCallback, useRef, useState } from 'react';
import { HeaderText, LoginComponent, Input } from '../styles/Login.style';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);
  const [availableNext, setAvailableNext] = useState<boolean>(false);

  const onChangeName = useCallback(
    (text: React.ChangeEvent<HTMLInputElement>) => {
      setName(text.target.value);
    },
    []
  );

  // The function that recognizes a Password change and stores it in a state value
  const onChangePassword = useCallback(
    (text: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(text.target.value);
    },
    []
  );

  const onClickSaveUserInfo = () => {
    setSaveUserInfo((prev) => !prev);
  };

  const canGoNext = name && password.length === 4 ? true : false;

  const onClickNext = () => {
    if (saveUserInfo) {
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
    }

    try {
      null;
    } catch {
      null;
    }
  };

  return (
    <>
      <HeaderText>{title}</HeaderText>
      <LoginComponent>
        <Input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={onChangeName}
        ></Input>
        <Input
          type="password"
          placeholder="4자리 비밀번호 입력"
          value={password}
          onChange={onChangePassword}
          maxLength={4}
        ></Input>
      </LoginComponent>
      <img src="../assets/icons/checkbox.png" />
      <div onClick={onClickSaveUserInfo}>정보 저장</div>
      {canGoNext ? <button onClick={onClickNext}>다음</button> : null}
    </>
  );
};

export default Login;
