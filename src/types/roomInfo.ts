export interface participant {
  participant: string;
}

export interface currentParticipants {
  headCount: number;
  participants: string[];
}

export interface roomTitle {
  title: string;
}

export interface room extends currentParticipants, roomTitle {
  deadLine?: string;
  dates: string[];
  startTime: string;
  endTime: string;
}

export interface roomInfo {
  room: room;
}
