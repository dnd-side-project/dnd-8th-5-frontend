import styled from '@emotion/styled';
import theme from '../../styles/theme';

import room from '../../assets/data/room.json';

interface Props {
  selectedMethod: string;
  tablePage: number;
  validDateChunks: any;
}

const AddTable = ({ selectedMethod, tablePage, validDateChunks }: Props) => {
  const { dates, startTime, endTime } = room;
  console.log(validDateChunks[tablePage]);
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

  const handleClick = (e: any) => {
    console.log(e.currentTarget.getAttribute('value'));
    console.log('class: ', e.currentTarget);
  };

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {validDateChunks[tablePage].map(({ date }: any) => (
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
        {validDateChunks[tablePage].map(({ date, isValidDate }: any) => (
          <SelectWrapper key={date}>
            {timeDetail.map((time) => (
              <Select
                key={`${date} ${time}:00`}
                value={`${date} ${time}`}
                isSelected={false}
                selectedMethod={selectedMethod}
                onClick={handleClick}
                isValidDate={isValidDate}
              />
            ))}
          </SelectWrapper>
        ))}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 231px;
  border-radius: 5.5px;
  border: 1px solid ${theme.colors.gray03};

  color: ${theme.colors.gray06};
  ${theme.typography.medium02};
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 37px;
  border-bottom: 1px solid ${theme.colors.gray03};
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
`;

const Blank = styled.div`
  width: 17px;
  height: 36px;

  border-right: 1px solid ${theme.colors.gray03};
`;

const DateWrapper = styled.div`
  display: flex;
`;

const Date = styled.div`
  width: 70px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray06};
  ${theme.typography.medium04};

  & + & {
    width: 71px;
    border-left: 1px solid ${theme.colors.gray03};
  }
`;

const TimeWrapper = styled.div`
  width: 17px;
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
    height: 37px;
    border-top: 1px solid ${theme.colors.gray03};
  }
`;

const SelectWrapper = styled.div`
  width: 70px;

  & + & {
    width: 71px;
    border-left: 1px solid ${theme.colors.gray03};
  }
`;

const Select = styled.div<{
  isSelected: boolean;
  value: string;
  selectedMethod: string;
  isValidDate: boolean;
}>`
  height: 17px;
  box-sizing: content-box;

  background: ${({ isValidDate }) => !isValidDate && `${theme.colors.gray02}`};

  background: ${({ selectedMethod, isSelected }) =>
    isSelected &&
    (selectedMethod ? `${theme.colors.purple06}` : `${theme.colors.orange02}`)};

  &:nth-of-type(odd) {
    border-bottom: 1px dashed ${theme.colors.gray03};
  }

  &:nth-of-type(even) {
    height: 18px;
    border-bottom: 1px solid ${theme.colors.gray03};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export default AddTable;
