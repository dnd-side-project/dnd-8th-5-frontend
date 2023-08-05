export interface PostAuthType {
  name: string;
  password: string;
}

export interface PostAuthParamsType {
  roomUUID: string;
  form: PostAuthType;
}
