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

import { useParams } from 'react-router-dom';
import { getRange } from '../../utils/getRange';
import { useGetAvailableTimesByGroup } from '../../queries/availableTimes/useGetAvailableTimesByGroup';
import { useEffect, useState } from 'react';
import { AvailableDateTimesTypes } from '../../types/current';

interface TableTypes {
  dates: string[];
  startTime: string;
  endTime: string;
  participants: string[];
}

const Table = ({ dates, startTime, endTime, participants }: TableTypes) => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const timeRange = getRange(parseInt(startTime), parseInt(endTime));

  const { data } = useGetAvailableTimesByGroup(roomUUID);
  const [availableDateTimes, setAvailableDateTimes] = useState<
    AvailableDateTimesTypes[]
  >([]);

  useEffect(() => {
    if (data) {
      setAvailableDateTimes(data.availableDateTimes);
    }
  }, [data]);

  const getDateFormat = (date: string) => {
    return `${date.slice(5, 7)}월 ${date.slice(8, 10)}일`;
  };

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {dates.map((date: string) =>
            date.slice(0, 5) === 'blank' ? (
              <Date key={date} isBlank={true}></Date>
            ) : (
              <Date key={date} isBlank={false}>
                {getDateFormat(date)}
              </Date>
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

        {availableDateTimes.map(
          ({ availableDate, availableTimeInfos }: any) => (
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
          )
        )}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
