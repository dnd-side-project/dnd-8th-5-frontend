export interface PutAvailableTimesType {
  name: string;
  hasTime: boolean;
  availableDateTimes: string[];
}

export interface PutAvailableTimesParamsType {
  roomUUID: string;
  payload: PutAvailableTimesType;
}
