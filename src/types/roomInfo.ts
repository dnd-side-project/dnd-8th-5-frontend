export interface participant {
  participant: string;
}

export interface participants {
  participants: participant[];
}

export interface currentParticipants {
  headCount: number;
  participants: string[];
}

export interface roomTitle {
  title: string;
}

export interface roomInfo extends currentParticipants {
  deadLine?: string;
  dates: string[];
  startTime?: string;
  endTime?: string;
}
