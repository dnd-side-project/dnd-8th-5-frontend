import theme from '../styles/theme';
import React, { useCallback, useRef, useState } from 'react';
import { HeaderText, LoginComponent, Input } from '../styles/Login.styles';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [uuid, setUuid] = useState<string>('');
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);

  const onChangeName = useCallback(
    (text: React.ChangeEvent<HTMLInputElement>) => {
      setName(text.target.value);
    },
    []
  );

  // The function that recognizes a uuid change and stores it in a state value
  const onChangeUuid = useCallback(
    (text: React.ChangeEvent<HTMLInputElement>) => {
      setUuid(text.target.value);
    },
    []
  );

  const onClickSaveUserInfo = () => {
    setSaveUserInfo((prev) => !prev);
  };

  const canGoNext = name && uuid.length === 4 ? true : false;

  const onClickNext = () => {
    if (saveUserInfo) {
      localStorage.setItem('name', name);
      localStorage.setItem('uuid', uuid);
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
          value={uuid}
          onChange={onChangeUuid}
          maxLength={4}
        ></Input>
      </LoginComponent>
      <img
        src={
          saveUserInfo
            ? require('../assets/icons/checkbox.png')
            : require('../assets/icons/checkedBox.png')
        }
      />
      <div onClick={onClickSaveUserInfo}>정보 저장</div>
      {canGoNext ? <button onClick={onClickNext}>다음</button> : null}
    </>
  );
};

export default Login;
