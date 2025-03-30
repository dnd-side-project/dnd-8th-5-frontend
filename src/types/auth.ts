export interface PostAuthType {
  name: string;
  password: string;
}

export interface PostAuthParamsType {
  roomUUID: string;
  form: PostAuthType;
}

export interface GetUserMeResponse {
  name: string;
  email: string;
  profileImage: string;
  thumbnailImage: string;
}
