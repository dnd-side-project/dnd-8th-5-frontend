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

const Table = ({ room }: roomInfo) => {
  const dates = room.dates;
  const times = getRange(
    parseInt(room.startTime.slice(0, 2)),
    parseInt(room.endTime.slice(0, 2))
  );

  const timeValues = getTimeArray(times);

  const getValue = (e: React.MouseEvent) => {
    console.log(e.currentTarget.getAttribute('value'));
  };

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
                key={`${date} ${time}`}
                value={`${date} ${time}`}
                onClick={getValue}
              />
            ))}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
