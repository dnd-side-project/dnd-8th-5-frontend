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
import Toggle from '../components/Toggle';

const AddTime = () => {
  const { dates, startTime, endTime } = room;
  const [isToggled, setIsToggled] = useState(false);

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
          {/* <select onChange={handleSelect} value={selectedMethod}>
            <option value="possible">되는</option>
            <option value="impossible">안 되는</option>
          </select> */}
          <Toggle
            text={['되는', '안되는']}
            toggle={isToggled}
            setData={setIsToggled}
          />
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>

        <Main>
          <ButtonWrapper>
            <MoveButton
              src={addPrev}
              alt="Prev Button"
              onClick={handlePrevButtonClick}
            />
            <MoveButton
              src={addNext}
              alt="Next Button"
              onClick={handleNextButtonClick}
            />
          </ButtonWrapper>

          <TableWrapper>
            <AddTable
              selectedMethod={selectedMethod}
              tablePage={tablePage}
              validDateChunks={validDateChunks}
            />
          </TableWrapper>
          <ScrollbarWrapper>
            <Scrollbar draggable={true} />
          </ScrollbarWrapper>
        </Main>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  height: 600px;
  margin: 0 auto;
  padding-bottom: 108px;

  border: 1px solid gray;
  overflow: hidden;
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
  height: 454px;
  margin-top: 48px;
  padding-bottom: 116px;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  top: 0;
`;

const MoveButton = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const TableWrapper = styled.div`
  height: 454px;
  margin: 0 auto;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollbarWrapper = styled.div`
  width: 18px;
  height: 160px;
  border-radius: 41px;
  background: ${theme.colors.gray02};
  position: absolute;
  right: 9px;
  top: 52px;
`;

const Scrollbar = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 41px;
  background: ${theme.colors.purple05};
`;

export default AddTime;
