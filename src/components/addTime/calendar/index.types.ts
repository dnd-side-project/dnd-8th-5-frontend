import { CalendarProps } from 'react-calendar';

export interface AddCalendarType extends CalendarProps {
  dates: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMethod: string;
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
