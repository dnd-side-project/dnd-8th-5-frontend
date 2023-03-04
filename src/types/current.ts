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

export interface CurrentTypes {
  availableDateTimes: [
    {
      availableDate: string;
      availableTimeInfos: [
        {
          time: string;
          count: number;
        }
      ];
    }
  ];
}
