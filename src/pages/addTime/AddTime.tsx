import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import _ from 'lodash';

import { selectedMethodState } from '../../atoms/selectedMethodAtom';
import { isTooltipShownState } from '../../atoms/isTooltipShownAtoms';

import {
  Body,
  Main,
  Title,
  TitleWrapper,
  Wrapper,
  CalendarWrapper,
} from './AddTime.styles';
import Header from '../../components/header/Header';
import AddToggle from '../../components/addToggle/AddToggle';
import AddTable from '../../components/addTable/AddTable';
import AddCalendar from '../../components/addCalendar/AddCalendar';
import BottomButton from '../../components/bottomButton/BottomButton';
import Tooltip from '../../components/tooltip/Tooltip';

import { RoomTypes } from '../../types/roomInfo';

import { API } from '../../utils/API';
import { getRange } from '../../utils/getRange';
import { getAllTimeRange } from '../../utils/getAllTimeRange';
import { TableSelectedTypes } from './AddTime.types';

const AddTime = () => {
  const { roomUUID } = useParams();
  const navigate = useNavigate();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: null,
    headCount: null,
    participants: [''],
    dates: [''],
    startTime: null,
    endTime: null,
  });

  const { title, dates, startTime, endTime } = room;
  const [timeRange, setTimeRange] = useState<number[]>([]);

  const isTableView = startTime !== null && endTime !== null ? true : false;

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);

  const [previousSelectedTimes, setPreviousSelectedTimes] = useState<string[]>(
    []
  );
  const [tableSelected, setTableSelected] = useState<TableSelectedTypes>({});
  const [calendarSelected, setCalendarSelected] = useState<string[]>([]);

  const userName = localStorage.getItem('userName') || '';

  const [isTooltipShown, setIsTooltipShown] =
    useRecoilState<boolean>(isTooltipShownState);

  useEffect(() => {
    setSelectedMethod('possible');

    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };

    const getPreviousSelectedTimes = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time?name=${userName}`
      );
      setPreviousSelectedTimes(data.availableDateTimes);
    };

    getRoomInfo();
    getPreviousSelectedTimes();
  }, []);

  useEffect(() => {
    if (!isTableView) {
      setCalendarSelected(previousSelectedTimes);
    }
  }, [previousSelectedTimes]);

  useEffect(() => {
    if (startTime && endTime && wrapperRef.current) {
      setTimeRange(
        getRange(parseInt(startTime.slice(0, 2)), parseInt(endTime.slice(0, 2)))
      );

      document.body.style.overflow = 'hidden';
      wrapperRef.current.style.overflow = 'hidden';
    }
  }, [startTime, endTime]);

  const goToCurrent = () => {
    document.body.style.overflow = '';
    (wrapperRef.current as HTMLDivElement).style.overflow = 'auto';

    navigate(`/current/${roomUUID}`);
  };

  const allTimeRange = getAllTimeRange(dates, timeRange);

  const handleApplyClick = () => {
    const putAvailableTime = async (payload: {
      name: string;
      hasTime: boolean;
      availableDateTimes: string[];
    }) => {
      await API.put(
        `/api/room/${roomUUID}/available-time`,
        JSON.stringify(payload)
      );
    };

    if (selectedMethod === 'possible') {
      const payload = isTableView
        ? {
            name: userName,
            hasTime: true,
            availableDateTimes: Object.values(tableSelected).flat(),
          }
        : {
            name: userName,
            hasTime: false,
            availableDateTimes: [...calendarSelected],
          };

      putAvailableTime(payload);
    }

    if (selectedMethod === 'impossible') {
      if (isTableView) {
        const filteredTime = _.difference(
          allTimeRange,
          Object.values(tableSelected).flat()
        );

        const payload = {
          name: userName,
          hasTime: true,
          availableDateTimes: filteredTime,
        };

        putAvailableTime(payload);
      } else {
        const newDates = dates.map((date) => `${date} 00:00`);
        const filteredTime =
          calendarSelected && _.difference(newDates, calendarSelected);

        const payload = {
          name: userName,
          hasTime: false,
          availableDateTimes: filteredTime,
        };

        putAvailableTime(payload);
      }
    }

    goToCurrent();
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Header pageName="addTime" title={title} />
      <Body>
        <TitleWrapper>
          <Title>{`${userName} 님의 일정을`}</Title>
        </TitleWrapper>
        <TitleWrapper>
          <AddToggle
            isTableView={isTableView}
            setTableSelected={setTableSelected}
            setSelected={setCalendarSelected}
          />
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>
        <Main>
          {isTableView ? (
            <AddTable
              selectedMethod={selectedMethod}
              dates={dates}
              timeRange={timeRange}
              previousSelectedTimes={previousSelectedTimes}
              tableSelected={tableSelected}
              setTableSelected={setTableSelected}
            />
          ) : (
            <CalendarWrapper>
              <AddCalendar
                dates={dates}
                selected={calendarSelected}
                setSelected={setCalendarSelected}
                selectedMethod={selectedMethod}
              />
            </CalendarWrapper>
          )}
        </Main>
        <BottomButton
          onClick={handleApplyClick}
          navigate={goToCurrent}
          text="등록하기"
          isActivated={true}
        />
      </Body>

      {isTableView && isTooltipShown && (
        <Tooltip
          isTooltipShown={isTooltipShown}
          setIsTooltipShown={setIsTooltipShown}
        />
      )}
    </Wrapper>
  );
};

export default AddTime;
