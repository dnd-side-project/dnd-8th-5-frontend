import { useMutation } from '@tanstack/react-query';
import { postUserInfo } from '../../api/auth/auth';
import { PostAuthParamsType } from '../../types/auth';

export const usePostUserInfo = () => {
  return useMutation(({ roomUUID, form }: PostAuthParamsType) =>
    postUserInfo({ roomUUID, form })
  );
};
