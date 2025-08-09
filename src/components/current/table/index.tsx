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
} from './index.styles';

import { getTimeRange } from '@/utils/getTimeRange';
import { getTableDateFormat } from '@/utils/getTableDateFormat';
import { getCurrentTableInfo } from '@/utils/getCurrentTableInfo';
import { Participant } from '@/types/roomInfo';
import {
  AvailableDateTimesTypes,
  AvailableDateTimeTypes,
} from '@/types/current';

interface TableTypes {
  dates: string[];
  startTime: string;
  endTime: string;
  participants: Participant[];
  timeInfo?: AvailableDateTimesTypes;
}

const Table = ({
  timeInfo,
  dates,
  startTime,
  endTime,
  participants,
}: TableTypes) => {
  const timeRange = getTimeRange(parseInt(startTime), parseInt(endTime));

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
                {getTableDateFormat(date)}
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

        {timeInfo &&
          getCurrentTableInfo(
            timeInfo.availableDateTimes,
            dates,
            timeRange
          ).map(
            ({ availableDate, availableTimeInfos }: AvailableDateTimeTypes) => (
              <SelectWrapper key={availableDate}>
                {availableTimeInfos.map(({ time, count }) => (
                  <Select
                    key={`${availableDate} ${time}`}
                    count={count}
                    total={participants.length}
                  />
                ))}
              </SelectWrapper>
            )
          )}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
