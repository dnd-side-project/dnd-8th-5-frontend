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

import { TableSelectedTypes } from './AddTime.types';
import { useGetRoomInfo } from '../../queries/room/useGetRoomInfo';
import { RoomTypes } from '../../types/roomInfo';
import { initialRoomInfoData } from '../../assets/data/initialRoomInfoData';
import { ROUTES } from '../../constants/ROUTES';

const AddTime = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const userName = localStorage.getItem('userName') || '';

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [selectedMethod] = useRecoilState(selectedMethodState);

  const [tableSelected, setTableSelected] = useState<TableSelectedTypes>({});
  const [calendarSelected, setCalendarSelected] = useState<string[]>([]);

  const [isTooltipShown, setIsTooltipShown] =
    useRecoilState<boolean>(isTooltipShownState);

  const { data } = useGetRoomInfo(roomUUID);
  const [{ title, dates, startTime, endTime }, setRoomInfo] =
    useState<RoomTypes>(initialRoomInfoData);

  useEffect(() => {
    if (data) {
      setRoomInfo(data.data);
    }
  }, [data]);

  const isTableView = startTime !== null && endTime !== null ? true : false;

  return (
    <Wrapper ref={wrapperRef}>
      <Header pageName={ROUTES.ADD_TIME} title={title} />
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
