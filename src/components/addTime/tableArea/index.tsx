import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useScroll } from '@/hooks/useScroll';
import _ from 'lodash';

import {
  ButtonWrapper,
  MoveButton,
  ScrollbarThumb,
  ScrollbarTrack,
  TableWrapper,
} from './index.styles';
import Table from '../table';
import AddButton from '../button';
import { AddTimeTableTypes, TableSelectedTypes } from './index.types';

import addPrevDisable from '@/assets/icons/addPrevDisable.png';
import addNextDisable from '@/assets/icons/addNextDisable.png';
import addPrevActive from '@/assets/icons/addPrevActive.png';
import addNextActive from '@/assets/icons/addNextActive.png';

import { getTimeRange } from '@/utils/getTimeRange';
import { getAllTimeRange } from '@/utils/getAllTimeRange';
import { getAddTimeTableInfo } from '@/utils/getAddTimeTableInfo';
import { usePutAvailableTimes } from '@/queries/availableTimes/usePutAvailableTimes';
import { useGetAvailableTimesByOne } from '@/queries/availableTimes/useGetAvailableTimesByOne';

import { ROUTES } from '@/constants/ROUTES';
import { selectedMethodState } from '@/atoms/selectedMethodAtom';

const TableArea = ({
  wrapperRef,
  startTime,
  endTime,
  selected,
  setSelected,
  dates,
  setTableSelected,
  isResetButtonClick,
  setIsResetButtonClick,
}: AddTimeTableTypes) => {
  const navigate = useNavigate();
  const { roomUUID } = useParams() as { roomUUID: string };
  const userName = localStorage.getItem('userName') || '';

  const [tablePage, setTablePage] = useState(0);
  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);

  const validDateChunks = getAddTimeTableInfo(dates);
  const timeRange = getTimeRange(startTime, endTime);

  const windowHeight = window.innerHeight;

  const {
    contentWrapperRef,
    contentRef,
    trackRef,
    thumbRef,
    offsetY,
    setOffsetY,
    handleMouseDown,
    handleTouchStart,
    handleDragStart,
  } = useScroll();

  const { data } = useGetAvailableTimesByOne(roomUUID, userName);
  const { mutate, isSuccess, isError } = usePutAvailableTimes();

  useEffect(() => {
    if (data) {
      const newObj: TableSelectedTypes = {};

      data.availableDateTimes.forEach((date: string) => {
        validDateChunks.map((chunk, tablePage) => {
          chunk.map((item) => {
            if (item.date.slice(0, 10) === date.slice(0, 10)) {
              if (newObj[tablePage]) {
                newObj[tablePage].push(date);
              } else {
                newObj[tablePage] = [date];
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

  const handleScrollToTop = () => {
    const contentWrapper = contentWrapperRef.current as HTMLDivElement;
    contentWrapper.scrollTo({ top: 0 });

    setOffsetY(0);
  };

  const handlePrevButtonClick = () => {
    if (tablePage !== 0) {
      setTablePage(tablePage - 1);
    }

    handleScrollToTop();
  };

  const handleNextButtonClick = () => {
    if (tablePage !== validDateChunks.length - 1) {
      setTablePage(tablePage + 1);
    }

    handleScrollToTop();
  };

  const goToCurrent = () => {
    document.body.style.overflow = '';
    (wrapperRef.current as HTMLDivElement).style.overflow = 'auto';

    navigate(`${ROUTES.CURRENT}/${roomUUID}?isCompleted=true`);
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
      setSelectedMethod('possible');
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

export default TableArea;
