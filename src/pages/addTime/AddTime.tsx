import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { availableTimesState } from '../../atoms/availableTimesAtom';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';

import addPrev from '../../assets/icons/addPrev.png';
import addNext from '../../assets/icons/addNext.png';

import { getChunks } from '../../utils/getChunks';
import { getValidDates } from '../../utils/getValidDates';
import { getDateRange } from '../../utils/getDateRange';

import {
  Body,
  ButtonWrapper,
  Main,
  MoveButton,
  ScrollbarThumb,
  ScrollbarTrack,
  TableWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './AddTime.styles';
import Header from '../../components/header/Header';
import BottomButton from '../../components/bottomButton/BottomButton';
import AddTable from '../../components/addTable/AddTable';
import { useParams } from 'react-router-dom';

import { availableDatesState } from '../../atoms/availableDatesAtom';
import AddToggle from '../../components/addToggle/AddToggle';
import { RoomTypes } from '../../types/roomInfo';
import { API } from '../../utils/API';
import AddCalendar from '../../components/addCalendar/AddCalendar';

const AddTime = () => {
  const { roomUuid } = useParams();

  const [currentRoomState, setCurrentRoomState] = useState<any>([]);
  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: null,
    headCount: null,
    participants: [''],
    dates: [''],
    startTime: null,
    endTime: null,
  });

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUuid}`);
      setRoom(data);
    };

    const getCurrentRoomInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUuid}/available-time/group`
      );

      setCurrentRoomState(data);
    };

    getRoomInfo();
    getCurrentRoomInfo();
  }, []);

  const { title, dates, participants, startTime, endTime } = room;

  const [tablePage, setTablePage] = useState(0);
  const [isPageMoved, setIsPageMoved] = useState(false);

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [availableTimes, setAvailableTimes] =
    useRecoilState(availableTimesState);
  const [availableDates, setAvailableDates] =
    useRecoilState(availableDatesState);

  const handleSelectMethod = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(e.target.value);
  };

  const validDateChunks = getChunks(
    getValidDates(getDateRange(dates[0], dates[dates.length - 1]))
  );

  const handlePrevButtonClick = () => {
    if (tablePage !== 0) {
      setTablePage(tablePage - 1);
    }

    setIsPageMoved(true);
  };

  const handleNextButtonClick = () => {
    if (tablePage !== validDateChunks.length - 1) {
      setTablePage(tablePage + 1);
    }

    setIsPageMoved(true);
  };

  useEffect(() => {
    availableTimes.map(
      (time: string) =>
        document.getElementById(`${time}`) &&
        document.getElementById(`${time}`)?.classList.add('selected')
    );

    setIsPageMoved(false);
  }, [isPageMoved]);

  return (
    <Wrapper>
      <Header pageName="addTime" title={title} />
      <Body>
        <TitleWrapper>
          <Title>수빈 님의 일정을</Title>
        </TitleWrapper>
        <TitleWrapper>
          <AddToggle />
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>

        <Main>
          {startTime !== null && endTime !== null ? (
            <>
              <ButtonWrapper>
                <MoveButton
                  src={addPrev}
                  alt="Prev Button"
                  onClick={handlePrevButtonClick}
                />
                <MoveButton
                  src={addNext}
                  alt="Next Button"
                  onClick={handleNextButtonClick}
                />
              </ButtonWrapper>
              <TableWrapper>
                <AddTable
                  startTime={startTime}
                  endTime={endTime}
                  tablePage={tablePage}
                  selectedMethod={selectedMethod}
                  validDateChunks={validDateChunks}
                  availableTimes={availableTimes}
                  setAvailableTimes={setAvailableTimes}
                />
              </TableWrapper>
              <ScrollbarTrack>
                <ScrollbarThumb />
              </ScrollbarTrack>
            </>
          ) : (
            <AddCalendar
              participants={participants}
              availableDates={availableDates}
              setAvailableDates={setAvailableDates}
              currentRoomState={currentRoomState ? currentRoomState : []}
            />
          )}
        </Main>
        <BottomButton text="등록하기" isActivated={true} />
      </Body>
    </Wrapper>
  );
};

export default AddTime;
