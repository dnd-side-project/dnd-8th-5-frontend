import { Dispatch, SetStateAction } from 'react';

export interface SelectParticipants {
  name: string;
  isSelected: boolean;
}

export interface ParticipantsListTypes extends Array<SelectParticipants> {}

export interface SelectParticipantsTypes {
  participants: string[];
  setFilteredParticipants: Dispatch<SetStateAction<ParticipantsListTypes>>;

  selectedList: string[];
  setSelectedList: Dispatch<SetStateAction<string[]>>;

  setNameQS: Dispatch<SetStateAction<string>>;
  setIsParticipantOpened: Dispatch<SetStateAction<boolean>>;
}

export interface ParticipantBlockTypes {
  id: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
}

export interface SortTimesTypes {
  sortedQS: string;
  setSortedQS: Dispatch<string>;
  setIsSortOpened: Dispatch<SetStateAction<boolean>>;
}
