export interface current {
  availableDateTimes: availableDateTimes[];
}

interface availableDateTimes {
  availableDate: string;
  availablePeople: availablePeople[];
}

interface availablePeople {
  availableTimesAndHeadCount: {
    availableTime: string | null;
    availableHeadCount: number;
  };
}
