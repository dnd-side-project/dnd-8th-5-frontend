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
  wrapperRef: React.RefObject<HTMLDivElement>;
  selectedMethod: string;
  startTime: number;
  endTime: number;
  dates: string[];
  selected: TableSelectedTypes;
  setSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
}

export interface TableType {
  contentRef: React.RefObject<HTMLDivElement>;
  selected: TableSelectedTypes;
  setSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<ChunkType[]>;
  times: number[];
}
