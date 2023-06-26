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

export interface AddTableTypes {
  selectedMethod: string;
  dates: string[];
  timeRange: number[];
  previousSelectedTimes: string[];
  tableSelected: TableSelectedTypes;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
}

export interface TableType {
  contentRef: React.RefObject<HTMLDivElement>;
  tableSelected: TableSelectedTypes;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<ChunkType[]>;
  times: number[];
}
