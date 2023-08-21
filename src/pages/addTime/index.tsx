import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { selectedMethodState } from '@/atoms/selectedMethodAtom';
import { tooltipState } from '@/atoms/tooltipAtom';

import Header from '@/components/commons/header';
import Tooltip from '@/components/addTime/tooltip';
import AddToggle from '@/components/addTime/addToggle';
import AddTimeTable from '@/components/addTime/addTimeTable';
import AddCalendar from '@/components/addTime/addCalendar';
import { Body, Main, Title, TitleWrapper, Wrapper } from './index.styles';
import { initialRoomInfoData } from '@/assets/data/initialRoomInfoData';

import { TableSelectedTypes } from './index.types';
import { RoomTypes } from '@/types/roomInfo';

import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { ROUTES } from '@/constants/ROUTES';

const AddTime = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const userName = localStorage.getItem('userName') || '';

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [selectedMethod] = useRecoilState(selectedMethodState);
  const [isResetButtonClick, setIsResetButtonClick] = useState<boolean>(false);

  const [tableSelected, setTableSelected] = useState<TableSelectedTypes>({});
  const [calendarSelected, setCalendarSelected] = useState<string[]>([]);

  const [isTooltipShown, setIsTooltipShown] =
    useRecoilState<boolean>(tooltipState);

  const { data } = useGetRoomInfo(roomUUID);
  const [{ title, dates, startTime, endTime }, setRoomInfo] =
    useState<RoomTypes>(initialRoomInfoData);

  useEffect(() => {
    if (data) {
      setRoomInfo(data);
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
              startTime={parseInt(startTime)}
              endTime={parseInt(endTime)}
              selected={tableSelected}
              setSelected={setTableSelected}
              setTableSelected={setTableSelected}
              dates={dates}
              isResetButtonClick={isResetButtonClick}
              setIsResetButtonClick={setIsResetButtonClick}
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
