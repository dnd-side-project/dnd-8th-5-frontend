import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import theme from '../styles/theme';

import addPrev from '../assets/icons/addPrev.png';
import addNext from '../assets/icons/addNext.png';
import AddTable from '../components/addTable/AddTable';

import room from '../assets/data/room.json';
import { getChunks } from '../utils/getChunks';
import { getValidDates } from '../utils/getValidDates';
import { getDateRange } from '../utils/getDateRange';

const AddTime = () => {
  const { dates, startTime, endTime } = room;

  const [selectedMethod, setSelectedMethod] = useState('possible');

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(e.target.value);
  };

  const validDateChunks = getChunks(
    getValidDates(getDateRange(dates[0], dates[dates.length - 1]))
  );

  const [tablePage, setTablePage] = useState(0);

  const handlePrevButtonClick = () => {
    if (tablePage !== 0) {
      setTablePage(tablePage - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (tablePage !== validDateChunks.length - 1) {
      setTablePage(tablePage + 1);
    }
  };

  return (
    <Wrapper>
      <Body>
        <TitleWrapper>
          <Title>수빈 님의 일정을</Title>
        </TitleWrapper>
        <TitleWrapper>
          <select onChange={handleSelect} value={selectedMethod}>
            <option value="possible">되는</option>
            <option value="impossible">안 되는</option>
          </select>
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>

        <Main>
          <MoveButton
            src={addPrev}
            alt="Prev Button"
            onClick={handlePrevButtonClick}
          />
          <AddTable
            selectedMethod={selectedMethod}
            tablePage={tablePage}
            validDateChunks={validDateChunks}
          />
          <MoveButton
            src={addNext}
            alt="Next Button"
            onClick={handleNextButtonClick}
          />
        </Main>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 108px;

  border: 1px solid gray;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const TitleWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

const Main = styled.div`
  width: 100%;
  margin-top: 48px;
  padding-bottom: 116px;
  border: 1px solid hotpink;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

const MoveButton = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default AddTime;
