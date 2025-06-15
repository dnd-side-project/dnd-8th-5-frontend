export interface currentParticipants {
  headCount: number | null;
  participants: Participant[];
}

export interface RoomTypes {
  title: string;
  participants: Participant[];
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

export interface RoomInfoTypes {
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

  isRangeSelect: boolean;
  isOnlyDateSelect: boolean;
  timerType: 'dial' | 'button' | 'checkbox' | null;
}

export interface DeleteParticipantTypes {
  participantIds: number[];
}

export interface Participant {
  id: number;
  name: string;
}
