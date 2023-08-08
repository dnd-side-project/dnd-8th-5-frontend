import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
import _ from 'lodash';

import {
  ButtonWrapper,
  MoveButton,
  ScrollbarThumb,
  ScrollbarTrack,
  TableWrapper,
} from './AddTimeTable.styles';
import Table from './Table';

import addPrevDisable from '../../assets/icons/addPrevDisable.png';
import addNextDisable from '../../assets/icons/addNextDisable.png';
import addPrevActive from '../../assets/icons/addPrevActive.png';
import addNextActive from '../../assets/icons/addNextActive.png';

import { AddTimeTableTypes, TableSelectedTypes } from './AddTimeTable.types';

import { getAddTimeTableInfo } from '../../utils/getAddTimeTableInfo';
import { getAllTimeRange } from '../../utils/getAllTimeRange';
import { getTimeRange } from '../../utils/getTimeRange';
import { useGetAvailableTimesByOne } from '../../queries/availableTimes/useGetAvailableTimesByOne';
import { usePutAvailableTimes } from '../../queries/availableTimes/usePutAvailableTimes';
import AddButton from '../addButton/AddButton';
import { ROUTES } from '../../constants/ROUTES';

const AddTimeTable = ({
  wrapperRef,
  startTime,
  endTime,
  selected,
  setSelected,
  selectedMethod,
  dates,
  setTableSelected,
  isResetButtonClick,
  setIsResetButtonClick,
}: AddTimeTableTypes) => {
  const navigate = useNavigate();
  const { roomUUID } = useParams() as { roomUUID: string };
  const userName = localStorage.getItem('userName') || '';

  const [tablePage, setTablePage] = useState(0);

  const validDateChunks = getAddTimeTableInfo(dates);
  const timeRange = getTimeRange(startTime, endTime);

  const windowHeight = window.innerHeight;

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

  const { data } = useGetAvailableTimesByOne(roomUUID, userName);
  const { mutate, isSuccess, isError } = usePutAvailableTimes();

  useEffect(() => {
    if (data) {
      const newObj: TableSelectedTypes = {};

      data.availableDateTimes.forEach((time: string) => {
        validDateChunks.map((chunk, index) => {
          chunk.map((date) => {
            if (date.date.slice(0, 10) === time.slice(0, 10)) {
              if (newObj[index] === undefined) {
                newObj[index] = [time];
              } else {
                newObj[index].push(time);
              }
            }
          });
        });
      });

      setSelected(newObj);
    }
  }, [data]);

  useEffect(() => {
    if (wrapperRef.current) {
      document.body.style.overflow = 'hidden';
      wrapperRef.current.style.overflow = 'hidden';
    }
  }, []);

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

  const goToCurrent = () => {
    document.body.style.overflow = '';
    (wrapperRef.current as HTMLDivElement).style.overflow = 'auto';

    navigate(`${ROUTES.CURRENT}/${roomUUID}`);
  };

  const allTimeRange = getAllTimeRange(dates, timeRange);

  const handleApplyClick = () => {
    if (selectedMethod === 'possible') {
      const payload = {
        name: userName,
        hasTime: true,
        availableDateTimes: Object.values(selected).flat(),
      };

      mutate({ roomUUID, payload });
    }

    if (selectedMethod === 'impossible') {
      const filteredTime = _.difference(
        allTimeRange,
        Object.values(selected).flat()
      );

      const payload = {
        name: userName,
        hasTime: true,
        availableDateTimes: filteredTime,
      };

      mutate({ roomUUID, payload });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      goToCurrent();
    }

    if (isError) {
      alert('처리 중 오류가 발생했습니다. 다시 시도해 주세요!');
    }
  }, [isSuccess, isError]);

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
      <TableWrapper ref={contentWrapperRef} windowHeight={windowHeight}>
        <Table
          contentRef={contentRef}
          selected={selected}
          setSelected={setSelected}
          times={timeRange}
          tablePage={tablePage}
          selectedMethod={selectedMethod}
          validDateChunks={validDateChunks}
          isResetButtonClick={isResetButtonClick}
          setIsResetButtonClick={setIsResetButtonClick}
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

      <AddButton
        setTableSelected={setTableSelected}
        handleApplyClick={handleApplyClick}
        setIsResetButtonClick={setIsResetButtonClick}
      />
    </>
  );
};

export default AddTimeTable;
