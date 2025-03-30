import { PostAuthParamsType, GetUserMeResponse } from '@/types/auth';
import { authInstance, instance } from './instance';

export const postUserInfo = async ({ roomUUID, form }: PostAuthParamsType) => {
  return await instance.post(
    `/guest/api/room/${roomUUID}/login`,
    JSON.stringify(form)
  );
};

export const getUserMe = async () => {
  return await authInstance
    .get<GetUserMeResponse>('/api/user/me')
    .then((res) => res.data);
};
