import { CreateRoomResponse, GetRoomDetailResponse } from '@/models/room';
import { instance } from './instance';
import { PostRoomTypes, DeleteParticipantTypes } from '@/types/roomInfo';

export const getRoomInfoV2 = async (roomUUID: string) => {
  const response = await instance.get<GetRoomDetailResponse>(
    `/api/v2/room/${roomUUID}`
  );
  return response;
};

export const createRoom = async (payload: PostRoomTypes) => {
  return await instance.post<CreateRoomResponse>(
    `/api/room`,
    JSON.stringify(payload)
  );
};

export const deleteParticipants = async (
  roomId: string,
  body: DeleteParticipantTypes
) => {
  return await instance.delete(`/api/room/${roomId}`, { data: body });
};
