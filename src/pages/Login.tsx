import theme from '../styles/theme';
import React, { useCallback, useRef, useState } from 'react';
import { HeaderText, LoginComponent, Input } from '../styles/Login.style';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);

  const onChangeName = useCallback((text: any) => {
    setName(text.target.value);
  }, []);

  // The function that recognizes a Password change and stores it in a state value
  const onChangePassword = useCallback((text: any) => {
    setPassword(text.target.value);
  }, []);

  const handleClickSaveUserInfo = () => {
    setSaveUserInfo((prev) => !prev);
  };

  localStorage.setItem('name', name);
  localStorage.setItem('password', password);

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
          type="text"
          placeholder="4자리 비밀번호 입력"
          value={password}
          onChange={onChangePassword}
        ></Input>
      </LoginComponent>
      <img src="../assets/icons/checkbox.png" />
      <div onClick={handleClickSaveUserInfo}>정보 저장</div>
    </>
  );
};

export default Login;
