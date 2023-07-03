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

import { getCurrentTableInfo } from '../../utils/getCurrentTableInfo';
import { useEffect, useState } from 'react';
import { AvailableDateTimeTypes } from '../../types/current';

interface TableTypes {
  availableDateTimes: AvailableDateTimeTypes[];
  dates: string[];
  times: number[];
  participants: string[];
}

const Table = ({
  availableDateTimes,
  dates,
  times,
  participants,
}: TableTypes) => {
  const [currentTableInfo, setCurrentTableInfo] = useState<
    AvailableDateTimeTypes[]
  >([]);

  useEffect(() => {
    setCurrentTableInfo(getCurrentTableInfo(availableDateTimes, times));
  }, [availableDateTimes]);

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
          {times.map((time: number) => (
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
