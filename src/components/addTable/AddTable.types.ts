export interface SelectType {
  isValidDate: boolean;
  selectedMethod: string;
}

export interface ChunkType {
  date: string;
  isValidDate: boolean;
}

export interface AddTableType {
  contentRef: any;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<ChunkType[]>;
  times: number[];
}
