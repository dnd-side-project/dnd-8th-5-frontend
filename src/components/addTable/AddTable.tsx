import { useEffect, useState } from 'react';
import { useScroll } from '../../hooks/useScroll';

import {
  ButtonWrapper,
  MoveButton,
  ScrollbarThumb,
  ScrollbarTrack,
  TableWrapper,
} from './AddTable.styles';

import addPrevDisable from '../../assets/icons/addPrevDisable.png';
import addNextDisable from '../../assets/icons/addNextDisable.png';
import addPrevActive from '../../assets/icons/addPrevActive.png';
import addNextActive from '../../assets/icons/addNextActive.png';
import Table from './Table';
import { TableSelectedTypes } from './AddTable.types';
import { getAddTimeTableInfo } from '../../utils/getAddTimeTableInfo';

interface AddTableTypes {
  selectedMethod: string;
  dates: string[];
  timeRange: number[];
  previousSelectedTimes: string[];
  tableSelected: TableSelectedTypes;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
}

const AddTable = ({
  selectedMethod,
  timeRange,
  dates,
  previousSelectedTimes,
  tableSelected,
  setTableSelected,
}: AddTableTypes) => {
  const [tablePage, setTablePage] = useState(0);

  const validDateChunks = getAddTimeTableInfo(dates);

  useEffect(() => {
    const newObj: TableSelectedTypes = {};

    previousSelectedTimes.forEach((time: any) => {
      validDateChunks.map((chunk, index) => {
        chunk.map((date) => {
          if (date.date === time.slice(0, 10)) {
            if (newObj[index] === undefined) {
              newObj[index] = [time];
            } else {
              newObj[index].push(time);
            }
          }
        });
      });
    });

    setTableSelected(newObj);
  }, [previousSelectedTimes]);

  useEffect(() => {
    const newObj: TableSelectedTypes = {};

    previousSelectedTimes.forEach((time) => {
      validDateChunks.map((chunk, index) => {
        chunk.map((date) => {
          if (date.date === time.slice(0, 10)) {
            if (newObj[index] === undefined) {
              newObj[index] = [time];
            } else {
              newObj[index].push(time);
            }
          }
        });
      });
    });

    setTableSelected(newObj);
  }, [previousSelectedTimes]);

  const {
    contentWrapperRef,
    contentRef,
    trackRef,
    thumbRef,
    offsetY,
    handleMouseDown,
    handleTouchStart,
    handleDragStart,
  } = useScroll();

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
    <>
      <ButtonWrapper>
        <MoveButton
          src={tablePage === 0 ? addPrevDisable : addPrevActive}
          alt="Prev Button"
          onClick={handlePrevButtonClick}
        />
        <MoveButton
          src={
            tablePage !== validDateChunks.length - 1
              ? addNextActive
              : addNextDisable
          }
          alt="Next Button"
          onClick={handleNextButtonClick}
        />
      </ButtonWrapper>
      <TableWrapper ref={contentWrapperRef}>
        <Table
          contentRef={contentRef}
          tableSelected={tableSelected}
          setTableSelected={setTableSelected}
          times={timeRange}
          tablePage={tablePage}
          selectedMethod={selectedMethod}
          validDateChunks={validDateChunks}
        />
      </TableWrapper>
      <ScrollbarTrack ref={trackRef}>
        <ScrollbarThumb
          ref={thumbRef}
          offsetY={offsetY}
          onMouseDown={handleMouseDown}
          onDragStart={handleDragStart}
          onTouchStart={handleTouchStart}
        />
      </ScrollbarTrack>
    </>
  );
};

export default AddTable;
