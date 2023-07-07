import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { selectedMethodState } from '../../atoms/selectedMethodAtom';
import { isTooltipShownState } from '../../atoms/isTooltipShownAtoms';

import { Body, Main, Title, TitleWrapper, Wrapper } from './AddTime.styles';
import Header from '../../components/header/Header';
import AddToggle from '../../components/addToggle/AddToggle';
import AddTimeTable from '../../components/addTimeTable/AddTimeTable';
import AddCalendar from '../../components/addCalendar/AddCalendar';
import Tooltip from '../../components/tooltip/Tooltip';

import { RoomTypes } from '../../types/roomInfo';
import { TableSelectedTypes } from './AddTime.types';
import { API } from '../../utils/API';

const AddTime = () => {
  const { roomUUID } = useParams();
  const userName = localStorage.getItem('userName') || '';

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
  const isTableView = startTime !== null && endTime !== null ? true : false;

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);

  const [tableSelected, setTableSelected] = useState<TableSelectedTypes>({});
  const [calendarSelected, setCalendarSelected] = useState<string[]>([]);

  const [isTooltipShown, setIsTooltipShown] =
    useRecoilState<boolean>(isTooltipShownState);

  useEffect(() => {
    setSelectedMethod('possible');

    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

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
          {startTime !== null && endTime !== null ? (
            <AddTimeTable
              wrapperRef={wrapperRef}
              selectedMethod={selectedMethod}
              startTime={parseInt(startTime)}
              endTime={parseInt(endTime)}
              selected={tableSelected}
              setSelected={setTableSelected}
              dates={dates}
            />
          ) : (
            <AddCalendar
              dates={dates}
              selected={calendarSelected}
              setSelected={setCalendarSelected}
              selectedMethod={selectedMethod}
            />
          )}
        </Main>
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
