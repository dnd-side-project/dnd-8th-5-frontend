import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { selectedMethodState } from '@/atoms/selectedMethodAtom';
import { tooltipState } from '@/atoms/tooltipAtom';

import Header from '@/components/commons/header';
import Tooltip from '@/components/addTime/tooltip';
import AddToggle from '@/components/addTime/toggle';
import AddTimeTable from '@/components/addTime/tableArea';
import AddCalendar from '@/components/addTime/calendar';
import { Body, Main, Title, TitleWrapper, Wrapper } from './index.styles';

import { TableSelectedTypes } from './index.types';

import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { ROUTES } from '@/constants/ROUTES';
import { Layout } from '@/components/commons/layout';

const AddTime = () => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const userName = localStorage.getItem('userName') || '';
  const { data: room } = useGetRoomInfo(roomUUID);

  const [selectedMethod] = useRecoilState(selectedMethodState);
  const [isResetButtonClick, setIsResetButtonClick] = useState<boolean>(false);

  const [tableSelected, setTableSelected] = useState<TableSelectedTypes>({});
  const [calendarSelected, setCalendarSelected] = useState<string[]>([]);

  const [isTooltipShown, setIsTooltipShown] =
    useRecoilState<boolean>(tooltipState);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      top: 124,
      behavior: 'smooth',
    });
  };

  const isTableView =
    room?.startTime !== null && room?.endTime !== null ? true : false;

  if (!room) return null;
  return (
    <Layout>
      <Wrapper ref={scrollRef}>
        <Header pageName={ROUTES.ADD_TIME} title={room?.title ?? ''} />
        <Body>
          <TitleWrapper>
            <Title>{`${userName ?? ''} 님의 일정을`}</Title>
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
              <AddTimeTable
                startTime={parseInt(room.startTime)}
                endTime={parseInt(room.endTime)}
                selected={tableSelected}
                setSelected={setTableSelected}
                setTableSelected={setTableSelected}
                dates={room.dates}
                isResetButtonClick={isResetButtonClick}
                setIsResetButtonClick={setIsResetButtonClick}
                scrollToTop={scrollToTop}
              />
            ) : (
              <AddCalendar
                defaultActiveStartDate={
                  room?.dates?.[0] ? new Date(room.dates[0]) : new Date()
                }
                dates={room.dates}
                selected={calendarSelected}
                setSelected={setCalendarSelected}
                selectedMethod={selectedMethod}
              />
            )}
          </Main>
        </Body>

        {isTableView && isTooltipShown && (
          <Tooltip setIsTooltipShown={setIsTooltipShown} />
        )}
      </Wrapper>
    </Layout>
  );
};

export default AddTime;
