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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../utils/API';

const Table = ({ dates, participants, startTime, endTime }: any) => {
  const times = getRange(
    parseInt(startTime.slice(0, 2)),
    parseInt(endTime.slice(0, 2))
  );

  const { roomUUID } = useParams();

  const [current, setCurrent] = useState<any>({
    availableDateTimes: [
      {
        availableDate: '2023-02-20',
        availableTimeInfos: [
          {
            time: '09:00',
            count: 0,
          },
        ],
      },
    ],
  });

  useEffect(() => {
    const getCurrentInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time/group`
      );
      setCurrent(data);
    };

    getCurrentInfo();
  }, []);

  const { availableDateTimes } = current;

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
          {times.map((time) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>

        {availableDateTimes.map(
          ({ availableDate, availableTimeInfos }: any) => (
            <SelectWrapper key={availableDate}>
              {availableTimeInfos.map(({ time, count }: any) => (
                <Select
                  key={`${availableDate} ${time}`}
                  opacity={participants ? count / participants.length : 0}
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
