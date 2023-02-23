import styled from '@emotion/styled';
import theme from '../../styles/theme';

import room from '../../assets/data/room.json';

const AddTable = () => {
  //   const { dates, startTime, endTime } = room;

  const times = [9, 10, 11, 12, 13, 14];
  const three = ['2023-02-21', '2023-02-22', '2023-02-23'];

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
        </SelectWrapper>
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

const Select = styled.div`
  height: 17px;
  box-sizing: content-box;

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
