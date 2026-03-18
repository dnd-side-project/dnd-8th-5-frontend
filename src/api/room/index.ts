import { CreateRoomResponse, GetRoomDetailResponse } from '@/models/room';
import { instance } from '../instance';
import { PostRoomTypes, DeleteParticipantTypes } from '@/types/roomInfo';

export const getRoomInfoV2 = (roomUUID: string) => {
  return instance.get<GetRoomDetailResponse>(`/guest/api/v2/room/${roomUUID}`);
};

export const createRoom = (payload: PostRoomTypes) => {
  return instance.post<CreateRoomResponse>(
    `/guest/api/room`,
    JSON.stringify(payload)
  );
};

export const deleteParticipants = (
  roomId: string,
  body: DeleteParticipantTypes
) => {
  return instance.delete(`/guest/api/room/${roomId}`, { data: body });
};
