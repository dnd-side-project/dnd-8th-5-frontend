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
import BottomButton from '../bottomButton/BottomButton';

import addPrevDisable from '../../assets/icons/addPrevDisable.png';
import addNextDisable from '../../assets/icons/addNextDisable.png';
import addPrevActive from '../../assets/icons/addPrevActive.png';
import addNextActive from '../../assets/icons/addNextActive.png';

import { AddTimeTableTypes, TableSelectedTypes } from './AddTimeTable.types';

import { API } from '../../utils/API';
import { getAddTimeTableInfo } from '../../utils/getAddTimeTableInfo';
import { getAllTimeRange } from '../../utils/getAllTimeRange';
import { getTimeRange } from '../../utils/getTimeRange';
import { useGetAvailableTimesByOne } from '../../queries/availableTimes/useGetAvailableTimesByOne';
import { usePutAvailableTimes } from '../../queries/availableTimes/usePutAvailableTimes';
import { PutAvailableTimesType } from '../../types/addTime';

const AddTimeTable = ({
  wrapperRef,
  startTime,
  endTime,
  selected,
  setSelected,
  selectedMethod,
  dates,
}: AddTimeTableTypes) => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || '';

  const [tablePage, setTablePage] = useState(0);
  const [previousSelectedTimes, setPreviousSelectedTimes] = useState<string[]>(
    []
  );

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
  const { mutate, isError, isSuccess } = usePutAvailableTimes();

  useEffect(() => {
    if (data) {
      setPreviousSelectedTimes(data.availableDateTimes);
    }
  }, [data]);

  useEffect(() => {
    if (wrapperRef.current) {
      document.body.style.overflow = 'hidden';
      wrapperRef.current.style.overflow = 'hidden';
    }
  }, []);

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

    setSelected(newObj);
  }, [previousSelectedTimes]);

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

    navigate(`/current/${roomUUID}`);
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
  }, [isSuccess]);

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

      <BottomButton
        onClick={handleApplyClick}
        navigate={goToCurrent}
        text="등록하기"
        isActivated={true}
      />
    </>
  );
};

export default AddTimeTable;
