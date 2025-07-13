export interface SelectType {
  isValidDate: boolean;
  selectedMethod: string;
}

export interface TableSelectedTypes {
  [key: number]: string[];
}

export interface ChunkType {
  date: string;
  isValidDate: boolean;
}

export interface PayloadTypes {
  name: string;
  hasTime: boolean;
  availableDateTimes: string[];
}

export interface AddTimeTableTypes {
  startTime: number;
  endTime: number;
  dates: string[];
  selected: TableSelectedTypes;
  setSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  isResetButtonClick: boolean;
  setIsResetButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TableType {
  selected: TableSelectedTypes;
  setSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<ChunkType[]>;
  times: number[];
  isResetButtonClick: boolean;
  setIsResetButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}
