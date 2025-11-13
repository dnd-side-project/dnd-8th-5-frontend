export interface currentInfo {
  current: { availableDateTimes: AvailableDateTimes[] };
}

// here
interface AvailableDateTimes {
  availableDate: string;
  availableTimeInfos: AvailableTimeInfo[];
}

interface AvailableTimeInfo {
  time: string | null;
  count: number;
}

export interface AvailableDateTimeTypes {
  availableDate: string;
  availableTimeInfos: {
    timeInfoId?: number;
    time: string | null;
    count: number;
  }[];
}

export interface AvailableDateTimesTypes {
  availableDateTimes: AvailableDateTimeTypes[];
}
