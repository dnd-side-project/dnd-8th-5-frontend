export interface CandidateTime {
  id: number;
  date: string;
  dayOfWeek: string;
  startTime: string | null;
  endTime: string | null;
  availableParticipantNames: string[];
  unavailableParticipantNames: string[];
  isConfirmed: boolean;
}

export interface GetCandidateTimesParams {
  roomId: string;
  sort: string;
  names?: string[];
  page: number;
  size: number;
}
