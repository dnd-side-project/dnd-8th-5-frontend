export interface CandidateTimesType {
  id: number;
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  availableParticipantNames: string[];
  unavailableParticipantNames: string[];
  isConfirmed: boolean;
}
