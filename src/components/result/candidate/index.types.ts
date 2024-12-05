export interface CandidateTypes {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  availableParticipantNames: string[];
  unavailableParticipantNames: string[];
  count: number | null;
  defaultOpen?: boolean;
}
