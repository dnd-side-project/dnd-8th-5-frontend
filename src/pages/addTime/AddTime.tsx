import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { availableTimesState } from '../../atoms/availableTimesAtom';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';

import addPrev from '../../assets/icons/addPrev.png';
import addNext from '../../assets/icons/addNext.png';

import room from '../../assets/data/room.json';
import { getChunks } from '../../utils/getChunks';
import { getValidDates } from '../../utils/getValidDates';
import { getDateRange } from '../../utils/getDateRange';
import {
  Body,
  ButtonWrapper,
  Main,
  MoveButton,
  ScrollbarThumb,
  ScrollbarTrack,
  TableWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './AddTime.styles';
import Header from '../../components/header/Header';
import BottomButton from '../../components/bottomButton/BottomButton';
import AddTable from '../../components/addTable/AddTable';
import AddCalendar from '../../components/addCalendar/AddCalendar';
import { availableDatesState } from '../../atoms/availableDatesAtom';
import AddToggle from '../../components/addToggle/AddToggle';

const AddTime = () => {
  const { dates, title } = room;

  const [tablePage, setTablePage] = useState(0);
  const [isPageMoved, setIsPageMoved] = useState(false);

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [availableTimes, setAvailableTimes] =
    useRecoilState(availableTimesState);
  const [availableDates, setAvailableDates] =
    useRecoilState(availableDatesState);

  const validDateChunks = getChunks(
    getValidDates(getDateRange(dates[0], dates[dates.length - 1]))
  );

  const handlePrevButtonClick = () => {
    if (tablePage !== 0) {
      setTablePage(tablePage - 1);
    }

    setIsPageMoved(true);
  };

  const handleNextButtonClick = () => {
    if (tablePage !== validDateChunks.length - 1) {
      setTablePage(tablePage + 1);
    }

    setIsPageMoved(true);
  };

  useEffect(() => {
    availableTimes.map(
      (time: string) =>
        document.getElementById(`${time}`) &&
        document.getElementById(`${time}`)?.classList.add('selected')
    );

    setIsPageMoved(false);
  }, [isPageMoved]);

  useEffect(() => {
    setAvailableTimes([]);

    const elements = document.querySelectorAll('.selected');
    elements.forEach((element) => {
      element.classList.remove('selected');
    });
  }, [selectedMethod]);

  // console.log(availableTimes);

  const tableWrapperRef = useRef<any>(null);
  const tableRef = useRef<any>(null);
  const scrollThumbRef = useRef<any>(null);
  const scrollTrackRef = useRef<any>(null);

  if (tableRef.current) {
    console.log(tableRef.current);
  }

  return (
    <Wrapper>
      <Header title={title} />
      <Body>
        <TitleWrapper>
          <Title>수빈 님의 일정을</Title>
        </TitleWrapper>
        <TitleWrapper>
          <AddToggle />
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
          <TableWrapper ref={tableWrapperRef}>
            <AddTable
              tableRef={tableRef}
              tablePage={tablePage}
              selectedMethod={selectedMethod}
              validDateChunks={validDateChunks}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          </TableWrapper>
          <ScrollbarTrack ref={scrollTrackRef}>
            <ScrollbarThumb ref={scrollThumbRef} />
          </ScrollbarTrack>
          {/* <AddCalendar
            availableDates={availableDates}
            setAvailableDates={setAvailableDates}
          /> */}
          <BottomButton text="등록하기" isActivated={true} />
        </Main>
      </Body>
    </Wrapper>
  );
};

export default AddTime;
