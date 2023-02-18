import { useEffect, useRef } from 'react';
import { currentInfo } from '../../types/current';
import { roomInfo } from '../../types/roomInfo';
import { getRange } from '../../utils/getRange';
import { getTimeArray } from '../../utils/getTimeArray';
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

const Table = ({ room, current }: roomInfo & currentInfo) => {
  const ref = useRef(null);

  const dates = room.dates;
  const times = getRange(
    parseInt(room.startTime.slice(0, 2)),
    parseInt(room.endTime.slice(0, 2))
  );

  const timeValues = getTimeArray(times);

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {dates.map((d: string) => (
            <Date key={d}>{`${d.slice(5, 7)}월 ${d.slice(8, 10)}일`}</Date>
          ))}
        </DateWrapper>
      </Top>
      <Bottom>
        <TimeWrapper>
          {times.map((time) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>
        {dates.map((date: string) => (
          <SelectWrapper key={date}>
            {timeValues.map((time) => (
              <Select
                ref={ref}
                key={`${date} ${time}`}
                id={`${date} ${time}`}
                opacity={'0.1'}
              />
            ))}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
