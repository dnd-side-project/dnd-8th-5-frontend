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
} from './addTable.styles';

interface Props {
  selectedMethod: string;
  tablePage: number;
  validDateChunks: Array<{ date: string; isValidDate: boolean }[]>;
}

const AddTable = ({ selectedMethod, tablePage, validDateChunks }: Props) => {
  const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const timeDetail = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
  ];

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {validDateChunks[tablePage].map(({ date }: { date: string }) => (
            <Date key={date}>{`${date.slice(5, 7)}월${date.slice(
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
        {validDateChunks[tablePage].map(
          ({ date, isValidDate }: { date: string; isValidDate: boolean }) => (
            <SelectWrapper key={date}>
              {timeDetail.map((time) => (
                <Select
                  key={`${date} ${time}:00`}
                  value={`${date} ${time}`}
                  isSelected={false}
                  selectedMethod={selectedMethod}
                  isValidDate={isValidDate}
                />
              ))}
            </SelectWrapper>
          )
        )}
      </Bottom>
    </Wrapper>
  );
};

export default AddTable;
