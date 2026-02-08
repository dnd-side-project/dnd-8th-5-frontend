export interface GetAvailableTimesByOneResponse {
  name: string;
  availableDateTimes: string[];
}

export interface GetAvailableTimeOverviewResponse {
  availableDateTimes: AvailableDateTimes[];
}

export interface AvailableDateTimes {
  availableDate: string;
  availableTimeInfos: AvailableTimeInfo[];
}

export interface AvailableTimeInfo {
  timeInfoId?: number;
  time: string | null;
  count: number;
}
