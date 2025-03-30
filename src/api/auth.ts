import { PostAuthParamsType, GetUserMeResponse } from '@/types/auth';
import { authInstance, instance } from './instance';

export const postUserInfo = async ({ roomUUID, form }: PostAuthParamsType) => {
  const { data } = await instance.post(
    `/api/room/${roomUUID}/login`,
    JSON.stringify(form)
  );

  return data;
};

export const getUserMe = async () => {
  return await authInstance
    .get<GetUserMeResponse>('/api/user/me')
    .then((res) => res.data);
};
