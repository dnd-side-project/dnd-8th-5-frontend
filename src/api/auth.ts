import { PostAuthParamsType } from '../types/auth';
import { instance } from './instance';

export const postUserInfo = async ({ roomUUID, form }: PostAuthParamsType) => {
  const { data } = await instance.post(
    `/api/room/${roomUUID}/login`,
    JSON.stringify(form)
  );

  return data;
};
