export interface TableSelectedTypes {
  [key: number]: string[];
}

export interface AddTimeTypes {
  availableDateTimes: [
    {
      availableDate: string;
      availableTimeInfos: [
        {
          time: string | null;
          count: number;
        }
      ];
    }
  ];
}
