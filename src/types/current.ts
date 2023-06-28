export interface currentInfo {
  current: { availableDateTimes: availableDateTimes[] };
}

interface availableDateTimes {
  availableDate: string;
  availableTimeInfos: availableTimeInfo[];
}

interface availableTimeInfo {
  time: string | null;
  count: number;
}

export interface AvailableDateTimeTypes {
  availableDate: string;
  availableTimeInfos: {
    time: string;
    count: number;
  }[];
}

export interface AvailableDateTimesTypes {
  availableDateTimes: AvailableDateTimeTypes[];
}
