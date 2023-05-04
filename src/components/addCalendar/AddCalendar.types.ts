export interface AddCalendarType {
  availableDates: string[];
  setAvailableDates: React.Dispatch<React.SetStateAction<string[]>>;
  participants: string[];
}

export interface currentRoomState {
  availableDate: string;
  availableTimeInfos: {
    time: string;
    count: number;
  }[];
}
