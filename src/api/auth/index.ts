import {
  PostUserInfoResponse,
  PostAuthParamsType,
  GetUserMeResponse,
  PostRoomParticipantRequest,
} from '@/types/auth';
import { authInstance, instance } from '../instance';
import { GetRoomParticipantMeResponse } from '@/models/auth';

export const postUserInfo = ({ roomUUID, form }: PostAuthParamsType) => {
  return instance.post<PostUserInfoResponse>(
    `/guest/api/v1/room/${roomUUID}/login`,
    JSON.stringify(form)
  );
};

export const getUserMe = async () => {
  const res = await authInstance.get<GetUserMeResponse>('/api/v1/users/me');
  return res.data;
};

export const postRoomParticipant = ({
  roomId,
  name,
}: PostRoomParticipantRequest) => {
  return authInstance.post(`/api/room/${roomId}/participants`, { name });
};

export const getRoomParticipantMe = async (roomId: string) => {
  const res = await authInstance.get<GetRoomParticipantMeResponse>(
    `/api/v1/rooms/${roomId}/participants/me`
  );
  return res.data;
};
