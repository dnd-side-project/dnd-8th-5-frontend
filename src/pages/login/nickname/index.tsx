import { useState, useRef } from 'react';
import { Layout } from '@/components/commons/layout';
import roomStart from '@/assets/images/room_info_bg.png';
import {
  Logo,
  MainContainer,
  Body,
  H1,
  InputWrapper,
  Form,
  Bottom,
  InputHelperText,
  ErrorMessage,
} from './index.styles';
import { useParams } from 'react-router-dom';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';

const MOCK_NAME = '김주현';

export default function LoginNickname() {
  const { roomId } = useParams() as { roomId: string };
  const { data: room } = useGetRoomInfo(roomId);

  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(MOCK_NAME);
  const [errorMessage, setErrorMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  if (!room) return;

  const handleEditClick = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleConfirmClick = () => {
    if (nickname.length >= 1 && nickname.length <= 4) {
      setIsEditing(false);
    }
  };

  return (
    <Layout>
      <MainContainer>
        <Logo src={roomStart} alt="room start logo" />
        <Body>
          <H1>{room.title}</H1>
          <Form>
            <InputWrapper>
              <div>
                {isEditing ? (
                  <input
                    ref={inputRef}
                    value={nickname}
                    onChange={(e) => {
                      if (e.target.value.length <= 4) {
                        setNickname(e.target.value);
                      }
                    }}
                    minLength={1}
                    maxLength={4}
                  />
                ) : (
                  <span>
                    <strong>{nickname}</strong>
                  </span>
                )}
                {!isEditing && <span>님으로 시작</span>}
              </div>
              {!isEditing && (
                <button
                  type="button"
                  onClick={isEditing ? handleConfirmClick : handleEditClick}
                >
                  변경
                </button>
              )}
              {isEditing && (
                <InputHelperText>{`${nickname.length}/4`}</InputHelperText>
              )}
            </InputWrapper>
            {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Bottom>
              <button type="submit">시작하기</button>
            </Bottom>
          </Form>
        </Body>
      </MainContainer>
    </Layout>
  );
}
