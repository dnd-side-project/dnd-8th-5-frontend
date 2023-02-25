import { useState } from 'react';
import { HeaderText, LoginComponent, Input } from '../styles/login.styles';
import useInputs from '../hooks/useFormInput';
import checkbox from '../assets/icons/checkbox.png';
import checkedBox from '../assets/icons/checkedBox.png';

const Login = () => {
  const [uuid, setUuid] = useState<string>('');
  const [title, setTitle] = useState<string>('이멤버 리멤버 연말파티');
  const [saveUserInfo, setSaveUserInfo] = useState<boolean>(false);

  const { form, onChange, reset } = useInputs({
    name: '',
    password: '',
  });

  const onClickSaveUserInfo = () => {
    setSaveUserInfo((prev) => !prev);
  };

  const canGoNext = form.name && form.password.length === 4 ? true : false;

  const onClickNext = () => {
    if (saveUserInfo) {
      localStorage.setItem('name', form.name);
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
          name="name"
          placeholder="이름 입력"
          maxLength={4}
          value={form.name}
          onChange={onChange}
        ></Input>
        <Input
          type="password"
          name="password"
          placeholder="4자리 비밀번호 입력"
          value={form.password}
          onChange={onChange}
          maxLength={4}
        ></Input>
      </LoginComponent>
      <img src={saveUserInfo ? checkbox : checkedBox} />
      <div onClick={onClickSaveUserInfo}>정보 저장</div>
      {canGoNext ? <button onClick={onClickNext}>다음</button> : null}
    </>
  );
};

export default Login;
