import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import _ from 'lodash';

import { TableWrapper, Wrapper } from './index.styles';
import Table from '../table';
import AddButton from '../button';
import { AddTimeTableTypes, TableSelectedTypes } from './index.types';

import { getTimeRange } from '@/utils/getTimeRange';
import { getAllTimeRange } from '@/utils/getAllTimeRange';
import { getAddTimeTableInfo } from '@/utils/getAddTimeTableInfo';
import { usePutAvailableTimes } from '@/queries/availableTimes/usePutAvailableTimes';
import { useGetAvailableTimesByOne } from '@/queries/availableTimes/useGetAvailableTimesByOne';

import { ROUTES } from '@/constants/ROUTES';
import { selectedMethodState } from '@/atoms/selectedMethodAtom';

const TableArea = ({
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
      setSelectedMethod('possible');
    }

    if (isError) {
      alert('처리 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  }, [isSuccess, isError]);

  return (
    <Wrapper>
      <TableWrapper>
        <Table
          selected={selected}
          setSelected={setSelected}
          times={timeRange}
          tablePage={tablePage}
          selectedMethod={selectedMethod}
          validDateChunks={validDateChunks}
          isResetButtonClick={isResetButtonClick}
          setIsResetButtonClick={setIsResetButtonClick}
          handlePrevButtonClick={handlePrevButtonClick}
          handleNextButtonClick={handleNextButtonClick}
        />
      </TableWrapper>
      <AddButton
        setTableSelected={setTableSelected}
        handleApplyClick={handleApplyClick}
        setIsResetButtonClick={setIsResetButtonClick}
      />
    </Wrapper>
  );
};

export default TableArea;
