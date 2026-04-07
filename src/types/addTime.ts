export interface PutAvailableTimesType {
  hasTime: boolean;
  availableDateTimes: string[];
}

export interface PutAvailableTimesParamsType {
  roomId: string;
  payload: PutAvailableTimesType;
}
