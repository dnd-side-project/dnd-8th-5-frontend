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
import { getTimeRange } from '../../utils/getTimeRange';

interface TableTypes {
  dates: string[];
  startTime: string;
  endTime: string;
  participants: string[];
}

const Table = ({ dates, startTime, endTime, participants }: TableTypes) => {
  const { roomUUID } = useParams();
  const timeRange = getTimeRange(parseInt(startTime), parseInt(endTime));

  const [currentTableInfo, setCurrentTableInfo] = useState<
    AvailableDateTimeTypes[]
  >([]);

  useEffect(() => {
    const getCurrentTableInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time/group`
      );

      setCurrentTableInfo(data.availableDateTimes);
    };

    getCurrentTableInfo();
  }, []);

  const convertDateFormat = (date: string) => {
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
                {convertDateFormat(date)}
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
