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

const Table = ({
  currentroomState,
  dates,
  participants,
  startTime,
  endTime,
}: any) => {
  const timeRange = getRange(
    parseInt(startTime.slice(0, 2)),
    parseInt(endTime.slice(0, 2))
  );

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {dates.map((date: string) => (
            <Date key={date}>{`${date.slice(5, 7)}월 ${date.slice(
              8,
              10
            )}일`}</Date>
          ))}
        </DateWrapper>
      </Top>

      <Bottom>
        <TimeWrapper>
          {timeRange.map((time) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>

        {currentroomState.map(({ availableDate, availableTimeInfos }: any) => (
          <SelectWrapper key={availableDate}>
            {availableTimeInfos.map(({ time, count }: any) => (
              <Select
                key={`${availableDate} ${time}`}
                opacity={
                  participants.length === 0 ? 0 : count / participants.length
                }
              />
            ))}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
