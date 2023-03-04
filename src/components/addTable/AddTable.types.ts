export interface SelectType {
  isValidDate: boolean;
  selectedMethod: string;
}

export interface ChunkType {
  date: string;
  isValidDate: boolean;
}

export interface AddTableType {
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<ChunkType[]>;
  availableTimes: string[];
  setAvailableTimes: React.Dispatch<React.SetStateAction<string[]>>;
  startTime: string;
  endTime: string;
}
