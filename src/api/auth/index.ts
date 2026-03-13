import {
  PostUserInfoResponse,
  PostAuthParamsType,
  GetUserMeResponse,
} from '@/types/auth';
import { authInstance, instance } from '../instance';
import { GetRoomParticipantMeResponse } from '@/models/auth';

export const postUserInfo = async ({ roomUUID, form }: PostAuthParamsType) => {
  return await instance.post<PostUserInfoResponse>(
    `/guest/api/v1/room/${roomUUID}/login`,
    JSON.stringify(form)
  );
};

export const getUserMe = async () => {
  return await authInstance
    .get<GetUserMeResponse>('/api/v1/users/me')
    .then((res) => res.data);
};

export const postRoomParticipant = (roomId: string, name: string) => {
  return authInstance.post(`/api/room/${roomId}/participants`, { name });
};

export const getRoomParticipantMe = (roomId: string) => {
  return authInstance
    .get<GetRoomParticipantMeResponse>(
      `/api/v1/rooms/${roomId}/participants/me`
    )
    .then((res) => res.data);
};
