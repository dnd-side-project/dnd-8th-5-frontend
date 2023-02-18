export interface currentInfo {
  current: { availableDateTimes: availableDateTimes[] };
}

interface availableDateTimes {
  availableDate: string;
  availableTimeInfos: availablePeople[];
}

interface availablePeople {
  availableTimeInfo: {
    time: string | null;
    headCount: number;
  };
}
