export interface PostUserInfoResponse {
  accessToken: string;
  accessTokenExpireTime: string;
}

export interface PostAuthType {
  name: string;
  password: string;
}

export interface PostAuthParamsType {
  roomId: string;
  body: PostAuthType;
}

export interface GetUserMeResponse {
  name: string;
  email: string;
  profileImage: string;
  thumbnailImage: string;
}

export interface PostRoomParticipantRequest {
  roomId: string;
  name: string;
}
