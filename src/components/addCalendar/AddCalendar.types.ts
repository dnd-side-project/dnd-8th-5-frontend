export interface AddCalendarType {
  availableDates: string[];
  setAvailableDates: React.Dispatch<React.SetStateAction<string[]>>;
  participants: string[];
  addState: {
    name: string;
    availableDateTimes: string[];
  };
}

// interface currentRoomState {
//   availableDate: string;
//   availableTimeInfos: {
//     time: string;
//     count: number;
//   }[];
// }
