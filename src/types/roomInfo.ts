export interface participant {
  participant: string;
}

export interface currentParticipants {
  headCount: number | null;
  participants: string[];
}

export interface RoomTypes {
  title: string;
  participants: string[];
  headCount: number | null;
  deadLine: string | null;
  dates: string[];
  startTime: string | null;
  endTime: string | null;
}

export interface PostRoomTypes {
  title: string;
  headCount: number | null;
  dates: string[];
  startTime: string | null;
  endTime: string | null;
  timer: {
    day: number;
    hour: number;
    minute: number;
  } | null;
}
