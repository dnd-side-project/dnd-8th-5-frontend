export interface TimerTypes {
  deadLine: string;
  isTimeExpired: boolean;
}

export interface participant {
  participant: string;
}

export interface currentParticipants {
  headCount: number | null;
  participants: string[];
}

export interface roomTitle {
  title: string;
}

export interface room extends roomTitle, currentParticipants {
  deadLine: string | null;
  dates: string[];
  startTime: string;
  endTime: string;
}

export interface roomInfo {
  room: room;
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
