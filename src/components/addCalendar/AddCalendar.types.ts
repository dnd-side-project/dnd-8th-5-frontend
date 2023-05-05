export interface AddCalendarType {
  dates: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface currentRoomState {
  availableDateTimes: {
    availableDate: string;
    availableTimeInfos: {
      time: null | string;
      count: number;
    }[];
  }[];
}
