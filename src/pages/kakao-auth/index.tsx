'use client';

import { useEffect } from 'react';
import { wrap } from '@suspensive/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getUserMe } from '@/api/auth';
import { useTokenStore, useUserStore } from '@/stores';

const KakaoAuth = wrap.Suspense({ fallback: null }).on(() => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { setUser } = useUserStore();
  const { setAccessToken } = useTokenStore();

  useEffect(() => {
    async function login() {
      const accessToken = searchParams.get('access_token');

      if (!accessToken) return;

      setAccessToken(accessToken);

      try {
        const user = await getUserMe();
        setUser({ ...user });
        navigate('/', { replace: true });
      } catch (err) {
        console.error('Login failed:', err);
      }
    }

    login();
  }, [searchParams, setAccessToken, setUser]);

  return null;
});

export default KakaoAuth;
