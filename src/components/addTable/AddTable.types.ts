export interface SelectType {
  isValidDate: boolean;
  selectedMethod: string;
}

export interface ChunkType {
  date: string;
  isValidDate: boolean;
}

export interface AddTableType {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<ChunkType[]>;
  availableTimes: string[];
  setAvailableTimes: React.Dispatch<React.SetStateAction<string[]>>;
  times: number[];
  timeDetail: string[];
}
