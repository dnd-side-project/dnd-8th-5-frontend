import {
  PostUserInfoResponse,
  PostAuthParamsType,
  GetUserMeResponse,
  PostRoomParticipantRequest,
} from '@/types/auth';
import { authInstance, instance } from '../instance';
import { GetRoomParticipantMeResponse } from '@/models/auth';

export const postUserInfo = ({ roomId, body }: PostAuthParamsType) => {
  return instance.post<PostUserInfoResponse>(
    `/guest/api/v1/room/${roomId}/login`,
    body
  );
};

export const getUserMe = () => {
  return authInstance
    .get<GetUserMeResponse>('/api/v1/users/me')
    .then((response) => response.data);
};

export const postRoomParticipant = ({
  roomId,
  name,
}: PostRoomParticipantRequest) => {
  return authInstance.post(`/api/room/${roomId}/participants`, { name });
};

export const getRoomParticipantMe = (roomId: string) => {
  return authInstance
    .get<GetRoomParticipantMeResponse>(
      `/api/v1/rooms/${roomId}/participants/me`
    )
    .then((res) => res.data);
};
