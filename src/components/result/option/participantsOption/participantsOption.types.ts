import { Dispatch, SetStateAction, MouseEventHandler } from 'react';

export interface Participants {
  name: string;
  isSelected: boolean;
}

export interface ParticipantsOptionTypes {
  setIsParticipantOpened: Dispatch<SetStateAction<boolean>>;
  participantsList: Participants[];
  setParticipantsList: Dispatch<SetStateAction<Participants[]>>;
}

export interface ParticipantBlockTypes {
  id: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
}
