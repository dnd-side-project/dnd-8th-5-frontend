export interface AddCalendarType {
  availableDates: string[];
  setAvailableDates: React.Dispatch<React.SetStateAction<string[]>>;
  participants: string[];
  currentRoomState: currentRoomState[];
}

export interface currentRoomState {
  availableDate: string;
  availableTimeInfos: {
    time: string;
    count: number;
  }[];
}
