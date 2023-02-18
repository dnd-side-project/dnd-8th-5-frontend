import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { getRange } from '../../utils/getRange';

const Table = ({ room, current }: any) => {
  const dates = room.dates;
  const times = getRange(
    parseInt(room.startTime.slice(0, 2)),
    parseInt(room.endTime.slice(0, 2))
  );
  console.log(times);
  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {dates.map((d: any) => (
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
        <SelectWrapper>
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
        </SelectWrapper>
        <SelectWrapper>
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
        </SelectWrapper>
        <SelectWrapper>
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
        </SelectWrapper>

        <SelectWrapper>
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
        </SelectWrapper>
        <SelectWrapper>
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
          <Select />
        </SelectWrapper>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;

  color: ${theme.colors.gray6};
  ${theme.typography.system_1_medium};

  border-radius: 5.5px;
  border: 1px solid ${theme.colors.gray3};
`;

const Top = styled.div`
  display: flex;

  height: 36px;
  border-bottom: 1px solid ${theme.colors.gray3};
`;

const Bottom = styled.div`
  display: flex;

  width: 100%;
`;

const Blank = styled.div`
  width: 22px;
  height: 36px;

  border-right: 1px solid ${theme.colors.gray3};
  border-bottom: 1px solid ${theme.colors.gray3};
`;

const DateWrapper = styled.div`
  display: flex;

  height: 36px;
`;

const Date = styled.div`
  width: 88px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray6};
  ${theme.typography.system_1_medium};

  & + & {
    border-left: 1px solid ${theme.colors.gray3};
  }
`;

const TimeWrapper = styled.div`
  width: 22px;
  border-right: 1px solid ${theme.colors.gray3};
`;

const Time = styled.div`
  width: 22px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray4};
  ${theme.typography.system_1_regular};

  & + & {
    border-top: 1px solid ${theme.colors.gray3};
  }
`;

const SelectWrapper = styled.div`
  width: 88px;

  & + & {
    border-left: 1px solid ${theme.colors.gray3};
  }
`;

const Select = styled.div`
  width: 88px;
  height: 20px;

  &:nth-child(odd) {
    border-bottom: 1px dashed ${theme.colors.gray3};
  }

  &:nth-child(even) {
    border-bottom: 1px solid ${theme.colors.gray3};
  }

  &:first-child {
    margin-top: 1px;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default Table;
