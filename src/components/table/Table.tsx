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
import { getRange } from '../../utils/getRange';

import { currentInfo } from '../../types/current';
import { roomInfo } from '../../types/roomInfo';

const Table = ({ room, current }: roomInfo & currentInfo) => {
  const { dates, headCount, startTime, endTime } = room;
  const { availableDateTimes } = current;

  const times = getRange(
    parseInt(startTime.slice(0, 2)),
    parseInt(endTime.slice(0, 2))
  );

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {dates.map((date) => (
            <Date key={date}>{`${date.slice(5, 7)}월 ${date.slice(
              8,
              10
            )}일`}</Date>
          ))}
        </DateWrapper>
      </Top>

      <Bottom>
        <TimeWrapper>
          {times.map((time) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>

        {availableDateTimes.map(({ availableDate, availableTimeInfos }) => (
          <SelectWrapper key={availableDate}>
            {availableTimeInfos.map(({ time, count }) => (
              <Select
                key={`${availableDate} ${time}`}
                opacity={count / headCount}
              />
            ))}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
