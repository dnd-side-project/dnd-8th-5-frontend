import { useState, useRef, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { useGetRoomInfo } from '@/queries/room';
import { usePostRoomParticipant } from '@/queries/auth';
import { ROUTES } from '@/constants/routes';
import { useGetUserInfo } from '@/queries/auth';

export default function LoginNickname() {
  const navigate = useNavigate();
  const { roomId } = useParams() as { roomId: string };
  const { data: room } = useGetRoomInfo(roomId);
  const { data: userInfo } = useGetUserInfo();
  const { mutate: postName, isLoading: isLoadingPostName } =
    usePostRoomParticipant();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  if (!room) return null;

  const handleEditClick = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleConfirmClick = () => {
    if (name.length >= 1 && name.length <= 4) {
      setIsEditing(false);
    }
  };

  const handleSubmit = () => {
    if (isLoadingPostName) return;

    postName(
      { roomId, name: name.trim() },
      {
        onSuccess: () => {
          navigate(ROUTES.ADD_TIME(roomId));
        },
        onError: () => {
          setErrorMessage('참여 중 에러가 발생했어요.');
        },
      }
    );
  };

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
    }
  }, [userInfo]);

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
                    value={name}
                    onChange={(e) => {
                      if (e.target.value.length <= 4) {
                        setName(e.target.value);
                      }
                    }}
                    minLength={1}
                    maxLength={4}
                  />
                ) : (
                  <span>
                    <strong>{name}</strong>
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
                <InputHelperText>{`${name.length}/4`}</InputHelperText>
              )}
            </InputWrapper>
            {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Bottom>
              <button type="submit" onSubmit={handleSubmit}>
                시작하기
              </button>
            </Bottom>
          </Form>
        </Body>
      </MainContainer>
    </Layout>
  );
}
