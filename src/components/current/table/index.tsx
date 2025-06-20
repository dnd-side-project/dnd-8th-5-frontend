import { useParams } from 'react-router-dom';

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
import { useGetAvailableTimesByGroup } from '@/queries/availableTimes/useGetAvailableTimesByGroup';
import { Participant } from '@/types/roomInfo';

interface TableTypes {
  dates: string[];
  startTime: string;
  endTime: string;
  participants: Participant[];
}

const Table = ({ dates, startTime, endTime, participants }: TableTypes) => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const timeRange = getTimeRange(parseInt(startTime), parseInt(endTime));

  const { data } = useGetAvailableTimesByGroup(roomUUID);

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

        {data &&
          getCurrentTableInfo(data.availableDateTimes, timeRange).map(
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
