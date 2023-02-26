import { ChangeEvent, useState } from 'react';

import addPrev from '../../assets/icons/addPrev.png';
import addNext from '../../assets/icons/addNext.png';
import AddTable from '../../components/addTable/AddTable';

import room from '../../assets/data/room.json';
import { getChunks } from '../../utils/getChunks';
import { getValidDates } from '../../utils/getValidDates';
import { getDateRange } from '../../utils/getDateRange';
import {
  Body,
  ButtonWrapper,
  Main,
  MoveButton,
  Scrollbar,
  ScrollbarWrapper,
  TableWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './AddTime.styles';

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

export default AddTime;
