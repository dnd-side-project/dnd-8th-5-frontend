export interface PutAvailableTimesType {
  name: string;
  hasTime: boolean;
  availableDateTimes: string[];
}

export interface PutAvailableTimesParamsType {
  roomId: string;
  payload: PutAvailableTimesType;
}
