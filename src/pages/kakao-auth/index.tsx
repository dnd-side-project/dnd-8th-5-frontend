import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getUserMe, getRoomParticipantMe } from '@/api/auth';
import { useTokenStore, useUserStore } from '@/stores';
import { ROUTES } from '@/constants/routes';

export default function KakaoAuth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { setUser } = useUserStore();
  const { setAccessToken } = useTokenStore();

  useEffect(() => {
    async function login() {
      const accessToken = searchParams.get('access_token');
      const roomId = searchParams.get('room_uuid');

      if (!roomId) {
        alert('로그인 중 오류가 발생했어요.');
        navigate('/', { replace: true });
        return;
      }

      if (!accessToken) {
        alert('로그인 중 오류가 발생했어요. 다시 시도해 주세요.');
        navigate(ROUTES.LOGIN(roomId), { replace: true });
        return;
      }

      setAccessToken(accessToken);

      try {
        const user = await getUserMe();
        setUser({ ...user });

        const isParticipant = await getRoomParticipantMe(roomId)
          .then(() => true)
          .catch(() => false);

        navigate(
          isParticipant
            ? ROUTES.ADD_TIME(roomId)
            : ROUTES.LOGIN_NICKNAME(roomId),
          { replace: true }
        );
      } catch {
        alert('로그인 중 오류가 발생했어요. 다시 시도해 주세요.');
        navigate(ROUTES.LOGIN(roomId), { replace: true });
      }
    }

    login();
  }, [searchParams, setAccessToken, setUser]);

  return null;
}
