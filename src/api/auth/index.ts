import { PostAuthParamsType, GetUserMeResponse } from '@/types/auth';
import { authInstance, instance } from '../instance';
import { GetRoomParticipantMeResponse } from '@/models/auth';

export const postUserInfo = async ({ roomUUID, form }: PostAuthParamsType) => {
  return await instance.post(
    `/guest/api/room/${roomUUID}/login`,
    JSON.stringify(form)
  );
};

export const getUserMe = async () => {
  return await authInstance
    .get<GetUserMeResponse>('/api/v1/users/me')
    .then((res) => res.data);
};

export const postRoomParticipant = (roomId: string, name: string) => {
  return instance.post(`/api/room/${roomId}/participants`, { name });
};

export const postRoomParticipantMe = (roomId: string) => {
  return instance.get<GetRoomParticipantMeResponse>(
    `/api/v1/rooms/${roomId}/participants/me`
  );
};
