import styled from '@emotion/styled';
import theme from '../../styles/theme';

import room from '../../assets/data/room.json';
import { getDateRange } from '../../utils/getDateRange';
import { getChunks } from '../../utils/getChunks';
import { getValidDates } from '../../utils/getValidDates';

const AddTable = ({ selectedMethod }: { selectedMethod: string }) => {
  const { dates, startTime, endTime } = room;
  console.log(getValidDates(getDateRange(dates[0], dates[dates.length - 1])));

  const times = [9, 10, 11, 12, 13, 14];
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
  ];

  const three = ['2023-02-21', '2023-02-22', '2023-02-23'];

  const handleClick = (e: any) => {
    console.log(e.currentTarget.getAttribute('value'));
    console.log('class: ', e.currentTarget);
  };

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {three.map((date) => (
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
        {three.map((date) => (
          <SelectWrapper key={date}>
            {timeDetail.map((time) => (
              <Select
                key={`${date} ${time}:00`}
                value={`${date} ${time}`}
                isSelected={false}
                selectedMethod={selectedMethod}
                onClick={handleClick}
              />
            ))}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  color: ${theme.colors.gray06};
  ${theme.typography.medium02};
  border-radius: 5.5px;
  border: 1px solid ${theme.colors.gray03};
`;

const Top = styled.div`
  display: flex;
  height: 36px;
  border-bottom: 1px solid ${theme.colors.gray03};
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
`;

const Blank = styled.div`
  width: 16px;
  height: 36px;
  border-right: 1px solid ${theme.colors.gray03};
  border-bottom: 1px solid ${theme.colors.gray03};
`;

const DateWrapper = styled.div`
  display: flex;
  height: 36px;
`;

const Date = styled.div`
  width: 68px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray06};
  ${theme.typography.medium04};

  & + & {
    border-left: 1px solid ${theme.colors.gray03};
  }
`;

const TimeWrapper = styled.div`
  width: 16px;
  border-right: 1px solid ${theme.colors.gray03};
`;

const Time = styled.div`
  width: 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray04};
  ${theme.typography.regular03};

  & + & {
    border-top: 1px solid ${theme.colors.gray03};
  }
`;

const SelectWrapper = styled.div`
  width: 68px;

  & + & {
    border-left: 1px solid ${theme.colors.gray03};
  }
`;

const Select = styled.div<{
  isSelected: boolean;
  value: string;
  selectedMethod: string;
}>`
  height: 17px;
  box-sizing: content-box;

  background: ${({ selectedMethod, isSelected }) =>
    isSelected &&
    (selectedMethod ? `${theme.colors.purple06}` : `${theme.colors.orange02}`)};

  &:nth-of-type(odd) {
    border-bottom: 1px dashed ${theme.colors.gray03};
  }
  &:nth-of-type(even) {
    border-bottom: 1px solid ${theme.colors.gray03};
  }
  &:first-of-type {
    padding-top: 1px;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

export default AddTable;
