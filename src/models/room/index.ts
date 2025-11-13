export interface GetRoomDetailResponse {
  title: string;
  deadLine: string | null;
  headCount: number | null;
  participants: Participant[];
  dates: string[];
  startTime: string | null;
  endTime: string | null;
}

export interface Participant {
  id: number;
  name: string;
}

export interface CreateRoomResponse {
  roomUuid: string;
}
