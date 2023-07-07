import {
  Blank,
  Bottom,
  Date,
  DateWrapper,
  Select,
  SelectWrapper,
  Time,
  TimeWrapper,
  Top,
  Wrapper,
} from './Table.styles';

import { useEffect, useState } from 'react';
import { AvailableDateTimeTypes } from '../../types/current';
import { API } from '../../utils/API';
import { useParams } from 'react-router-dom';
import { getRange } from '../../utils/getRange';
import { getTimeRange } from '../../utils/getTimeRange';

interface TableTypes {
  dates: string[];
  startTime: string;
  endTime: string;
  participants: string[];
}

const tete = [
  {
    availableDate: '2023-07-24',
    availableTimeInfos: [
      { time: '00:00', count: 0 },
      { time: '00:30', count: 2 },
      { time: '01:00', count: 2 },
      { time: '01:30', count: 2 },
      { time: '19:00', count: 2 },
      { time: '19:30', count: 0 },
      { time: '20:00', count: 0 },
      { time: '20:30', count: 0 },
      { time: '21:00', count: 2 },
      { time: '21:30', count: 2 },
      { time: '22:00', count: 2 },
      { time: '22:30', count: 0 },
      { time: '23:00', count: 0 },
      { time: '23:30', count: 0 },
    ],
  },
  {
    availableDate: '2023-07-25',
    availableTimeInfos: [
      { time: '00:00', count: 0 },
      { time: '00:30', count: 1 },
      { time: '01:00', count: 1 },
      { time: '01:30', count: 1 },
      { time: '19:00', count: 1 },
      { time: '19:30', count: 1 },
      { time: '20:00', count: 3 },
      { time: '20:30', count: 3 },
      { time: '21:00', count: 3 },
      { time: '21:30', count: 3 },
      { time: '22:00', count: 3 },
      { time: '22:30', count: 0 },
      { time: '23:00', count: 0 },
      { time: '23:30', count: 0 },
    ],
  },
  {
    availableDate: '2023-07-26',
    availableTimeInfos: [
      { time: '00:00', count: 0 },
      { time: '00:30', count: 2 },
      { time: '01:00', count: 2 },
      { time: '01:30', count: 2 },
      { time: '19:00', count: 0 },
      { time: '19:30', count: 0 },
      { time: '20:00', count: 0 },
      { time: '20:30', count: 0 },
      { time: '21:00', count: 2 },
      { time: '21:30', count: 3 },
      { time: '22:00', count: 2 },
      { time: '22:30', count: 0 },
      { time: '23:00', count: 0 },
      { time: '23:30', count: 0 },
    ],
  },
  {
    availableDate: '2023-07-27',
    availableTimeInfos: [
      { time: '00:00', count: 0 },
      { time: '00:30', count: 2 },
      { time: '01:00', count: 2 },
      { time: '01:30', count: 2 },
      { time: '19:00', count: 0 },
      { time: '19:30', count: 0 },
      { time: '20:00', count: 0 },
      { time: '20:30', count: 0 },
      { time: '21:00', count: 2 },
      { time: '21:30', count: 1 },
      { time: '22:00', count: 2 },
      { time: '22:30', count: 0 },
      { time: '23:00', count: 0 },
      { time: '23:30', count: 0 },
    ],
  },
];

const Table = ({ dates, startTime, endTime, participants }: TableTypes) => {
  const { roomUUID } = useParams();
  const timeRange = getRange(parseInt(startTime), parseInt(endTime));

  const [currentTableInfo, setCurrentTableInfo] = useState<
    AvailableDateTimeTypes[]
  >([]);

  useEffect(() => {
    const getCurrentTableInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time/group`
      );

      // setCurrentTableInfo(data.availableDateTimes);
      setCurrentTableInfo(tete);
    };

    getCurrentTableInfo();
  }, []);

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {dates.map((date: string) =>
            date.slice(0, 5) === 'blank' ? (
              <Date key={date} isBlank={true}></Date>
            ) : (
              <Date key={date} isBlank={false}>{`${date.slice(
                5,
                7
              )}월 ${date.slice(8, 10)}일`}</Date>
            )
          )}
        </DateWrapper>
      </Top>

      <Bottom>
        <TimeWrapper>
          {timeRange.map((time: number) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>

        {currentTableInfo.map(({ availableDate, availableTimeInfos }: any) => (
          <SelectWrapper key={availableDate}>
            {availableTimeInfos.map(
              ({ time, count }: { time: number; count: number }) => (
                <Select
                  key={`${availableDate} ${time}`}
                  count={count}
                  total={participants.length}
                />
              )
            )}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
